"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Lock,
  CheckCircle2,
  AlertCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useI18n } from "./i18n";
import { offices, CONTACT_EMAIL, CLIENT_PORTAL_URL } from "./data";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meozwped";

type InquiryType = "buying" | "selling" | "partnership" | "career_other" | "";

export default function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [inquiryType, setInquiryType] = useState<InquiryType>("");
  const [supplierType, setSupplierType] = useState<string>("");
  const [emailError, setEmailError] = useState(false);

  // Conditional section visibility logic (matches original site)
  const showBusiness = inquiryType === "buying" || inquiryType === "selling";
  const showVetting = inquiryType === "selling";
  const showTrade = inquiryType === "buying" || inquiryType === "selling";
  const showVerification = inquiryType === "buying" || inquiryType === "selling";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setInquiryType("");
        setSupplierType("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const validateEmail = (value: string) => {
    const free = /@(gmail|yahoo|hotmail|outlook|live|icloud|aol|protonmail|gmx)\./i;
    setEmailError(free.test(value));
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="eyebrow mb-4">{t("contact.tag")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label">09 / Contact</div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <h1 className="h-display max-w-3xl">
                {t("contact.title")} <span className="gold-gradient italic">{t("contact.titleAccent")}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead mt-5 max-w-2xl">{t("contact.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Two-column: form + sidebar */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <Reveal className="lg:col-span-8">
            <div className="bg-[var(--card)] border border-[var(--rule)] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <CheckCircle2 className="h-12 w-12 text-[#4a9d75] mx-auto mb-4" />
                    <h3 className="h-card text-xl mb-2">{t("contact.successTitle")}</h3>
                    <p className="body-sm">{t("contact.successDesc")}</p>
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <AlertCircle className="h-12 w-12 text-[#b04838] mx-auto mb-4" />
                    <h3 className="h-card text-xl mb-2">{t("contact.errorTitle")}</h3>
                    <p className="body-sm mb-6">{t("contact.errorDesc")}</p>
                    <button onClick={() => setStatus("idle")} className="btn-outline">Try again</button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    {/* Inquiry type */}
                    <div>
                      <label className="form-label">{t("contact.inquiryType")}</label>
                      <select
                        name="inquiry_type"
                        required
                        defaultValue=""
                        className="form-input"
                        onChange={(e) => setInquiryType(e.target.value as InquiryType)}
                      >
                        <option value="" disabled>{t("contact.inquiryPlaceholder")}</option>
                        <option value="buying">{t("contact.buying")}</option>
                        <option value="selling">{t("contact.selling")}</option>
                        <option value="partnership">{t("contact.partnership")}</option>
                        <option value="career_other">{t("contact.career")}</option>
                      </select>
                    </div>

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">{t("contact.name")}</label>
                        <input name="name" type="text" required className="form-input" />
                      </div>
                      <div>
                        <label className="form-label">{t("contact.email")}</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={(e) => validateEmail(e.target.value)}
                          className="form-input"
                        />
                        {emailError && (
                          <p className="mt-1.5 text-xs text-[#b04838]">{t("form.emailCorporateWarn")}</p>
                        )}
                      </div>
                    </div>

                    {/* CONDITIONAL: Business Details (buying/selling) */}
                    <AnimatePresence>
                      {showBusiness && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-[var(--rule)]">
                            <div className="form-section-title mb-4">{t("form.business.eyebrow")}</div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="form-label">{t("form.business.companyName")}</label>
                                <input name="company_name" type="text" className="form-input" />
                              </div>
                              <div>
                                <label className="form-label">{t("form.business.position")}</label>
                                <input name="position" type="text" className="form-input" />
                              </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                              <div>
                                <label className="form-label">{t("form.business.regNo")}</label>
                                <input name="company_reg_number" type="text" className="form-input" />
                              </div>
                              <div>
                                <label className="form-label">{t("form.business.website")}</label>
                                <input name="website" type="url" className="form-input" />
                              </div>
                            </div>
                            <div className="mt-4">
                              <label className="form-label">{t("form.business.hqAddress")}</label>
                              <input name="company_address" type="text" className="form-input" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CONDITIONAL: Supplier Vetting (selling only) */}
                    <AnimatePresence>
                      {showVetting && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-[var(--rule)]">
                            <div className="form-section-title mb-4">{t("form.vetting.eyebrow")}</div>
                            <div>
                              <label className="form-label">{t("form.vetting.role")}</label>
                              <select
                                name="supplier_type"
                                defaultValue=""
                                className="form-input"
                                onChange={(e) => setSupplierType(e.target.value)}
                              >
                                <option value="" disabled>{t("form.vetting.rolePlaceholder")}</option>
                                <option value="Manufacturer">{t("form.vetting.roleManufacturer")}</option>
                                <option value="Authorized_Distributor">{t("form.vetting.roleDistributor")}</option>
                                <option value="Trader">{t("form.vetting.roleTrader")}</option>
                              </select>
                            </div>

                            {/* Manufacturer → certifications */}
                            <AnimatePresence>
                              {supplierType === "Manufacturer" && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden mt-4"
                                >
                                  <p className="body-sm mb-2">{t("form.vetting.certsLabel")}</p>
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {["ISO", "HACCP", "Halal", "GMP"].map((cert) => (
                                      <label key={cert} className="flex items-center gap-2 p-2.5 border border-[var(--rule)] hover:border-[var(--brass)]/40 cursor-pointer transition-colors">
                                        <input type="checkbox" name="certs[]" value={cert} className="accent-[var(--brass)] w-3.5 h-3.5" />
                                        <span className="text-xs text-[var(--parchment)]">{cert === "Halal" ? "Halal/Kosher" : cert}</span>
                                      </label>
                                    ))}
                                  </div>
                                  <div className="mt-3">
                                    <label className="form-label">{t("form.vetting.otherCerts")}</label>
                                    <input name="other_certs" type="text" className="form-input" />
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Trader → source proof */}
                            <AnimatePresence>
                              {supplierType === "Trader" && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden mt-4"
                                >
                                  <div>
                                    <label className="form-label">{t("form.vetting.sourceProof")}</label>
                                    <textarea name="supply_proof" rows={3} className="form-input resize-none" />
                                  </div>
                                  <p className="mt-2 text-xs text-[#b04838]">{t("form.vetting.resellerWarn")}</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CONDITIONAL: Trade Specs (buying/selling) */}
                    <AnimatePresence>
                      {showTrade && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-[var(--rule)]">
                            <div className="form-section-title mb-4">{t("form.trade.eyebrow")}</div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="form-label">{t("form.trade.commodity")}</label>
                                <input name="commodity_name" type="text" className="form-input" />
                              </div>
                              <div>
                                <label className="form-label">{t("form.trade.origin")}</label>
                                <input name="origin" type="text" className="form-input" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                              <div>
                                <label className="form-label">{t("form.trade.quantity")}</label>
                                <input name="quantity" type="text" className="form-input" />
                              </div>
                              <div>
                                <label className="form-label">{t("form.trade.incoterms")}</label>
                                <select name="incoterms" defaultValue="" className="form-input">
                                  <option value="" disabled>Incoterms</option>
                                  <option value="CIF">CIF</option>
                                  <option value="FOB">FOB</option>
                                  <option value="ExWorks">ExWorks</option>
                                </select>
                              </div>
                              <div className="col-span-2 sm:col-span-1">
                                <label className="form-label">{t("form.trade.targetPrice")}</label>
                                <input name="target_price" type="text" className="form-input" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CONDITIONAL: Verification & Declaration (buying/selling) */}
                    <AnimatePresence>
                      {showVerification && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-[var(--rule)]">
                            <div className="form-section-title mb-4">{t("form.verify.eyebrow")}</div>
                            <div>
                              <label className="form-label">{t("form.verify.linkedin")}</label>
                              <input name="linkedin" type="url" className="form-input" />
                            </div>
                            <label className="flex items-start gap-3 mt-4 p-4 border border-[var(--rule-strong)] bg-[var(--muted)] cursor-pointer">
                              <input type="checkbox" name="declaration" value="yes" required className="mt-0.5 w-4 h-4 accent-[var(--brass)] flex-shrink-0" />
                              <div>
                                <div className="form-section-title text-[#b04838] mb-1">{t("form.verify.declarationTitle")}</div>
                                <p className="text-xs text-[var(--parchment-dim)] leading-relaxed">{t("form.verify.declarationBody")}</p>
                              </div>
                            </label>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Recipient office */}
                    <div>
                      <label className="form-label">{t("contact.office")}</label>
                      <select name="contact_office" required defaultValue="" className="form-input">
                        <option value="" disabled>{t("contact.officePlaceholder")}</option>
                        {offices.map((o) => (
                          <option key={o.id} value={`${o.city} (${o.flag})`}>
                            {o.city} ({o.flag})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="form-label">{t("contact.message")}</label>
                      <textarea name="message" rows={4} required className="form-input resize-none" />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending" || emailError}
                      className="btn-brass w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {status === "sending" ? (
                        t("contact.sending")
                      ) : (
                        <>
                          {t("contact.send")}
                          <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Sidebar: direct contact + portal + offices */}
          <div className="lg:col-span-4 space-y-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.a
                variants={staggerItem}
                href={`mailto:${CONTACT_EMAIL}`}
                className="group block bg-[var(--card)] border border-[var(--rule)] hover:border-[var(--brass)]/40 transition-colors duration-400 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--rule-strong)] flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] transition-all">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mono-label text-[var(--brass)] mb-1">{t("contact.directTitle")}</div>
                    <p className="body-sm mb-2">{t("contact.directDesc")}</p>
                    <p className="text-sm text-[var(--parchment)] break-all">{CONTACT_EMAIL}</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                variants={staggerItem}
                href={CLIENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[var(--card)] border border-[var(--rule)] hover:border-[var(--brass)]/40 transition-colors duration-400 p-5 mt-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--rule-strong)] flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] transition-all">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="mono-label text-[var(--brass)] mb-1">{t("contact.portalTitle")}</div>
                    <p className="body-sm">{t("contact.portalDesc")}</p>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Offices quick list */}
            <Reveal delay={0.1}>
              <div className="bg-[var(--card)] border border-[var(--rule)] p-5">
                <div className="mono-label text-[var(--brass)] mb-4">{t("contact.offices")}</div>
                <div className="space-y-3">
                  {offices.map((o) => (
                    <div key={o.id} className="flex items-center justify-between text-sm border-b border-[var(--rule)] last:border-b-0 pb-3 last:pb-0">
                      <div>
                        <div className="text-[var(--parchment)]">{o.city}</div>
                        <div className="mono-label opacity-60">{o.hoursTz}</div>
                      </div>
                      <span className="pill">{o.flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Trust badge */}
            <Reveal delay={0.15}>
              <div className="bg-[var(--forest-deep)]/40 border border-[var(--rule-strong)] p-5 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#6ba889] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--parchment-dim)] leading-relaxed">
                  All counterparties undergo KYC/AML verification. Submission of this form constitutes a business inquiry under our compliance framework.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
