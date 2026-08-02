"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock,
  Mail,
  Lock,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import { useI18n } from "./i18n";
import { offices, CONTACT_EMAIL, CLIENT_PORTAL_URL } from "./data";
import { Reveal, staggerContainer, staggerItem, easeOutExpo } from "./motion-helpers";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meozwped";

export default function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState(false);

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
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/4 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <Reveal>
            <div className="section-tag mb-5">{t("contact.tag")}</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
              {t("contact.title")}{" "}
              <span className="gold-gradient italic">{t("contact.titleAccent")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-5 h-px w-16 bg-[var(--primary)]" />
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              {t("contact.desc")}
            </p>
          </Reveal>
        </div>

        {/* Office cards */}
        <div className="mt-14">
          <Reveal>
            <h3 className="text-xs tracking-[0.25em] uppercase text-[var(--primary)] font-semibold mb-5">
              {t("contact.offices")}
            </h3>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-4 sm:gap-5"
          >
            {offices.map((office) => (
              <motion.div
                key={office.id}
                variants={staggerItem}
                className="group p-5 rounded-sm border border-[rgba(201,169,97,0.14)] bg-[#0d1929] hover:border-[var(--primary)]/40 transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-serif text-xl text-white">{office.city}</div>
                  <span className="text-[0.6rem] font-bold tracking-widest text-[var(--primary)] px-2 py-0.5 border border-[rgba(201,169,97,0.3)] rounded-sm">
                    {office.flag}
                  </span>
                </div>
                <div className="text-[0.7rem] text-[var(--primary)] font-semibold tracking-wide mb-3">
                  {office.legalName}
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-[var(--primary)] flex-shrink-0" />
                    <span>
                      {office.hours} ({office.hoursTz})
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Form + side info */}
        <div className="mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="p-6 sm:p-8 lg:p-10 rounded-sm border border-[rgba(201,169,97,0.16)] bg-gradient-to-br from-[#0d1929] to-[#0a1626]">
              <div className="mb-6">
                <div className="section-tag mb-3">{t("contact.sendTag")}</div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">
                  {t("contact.sendTitle")}{" "}
                  <span className="gold-gradient italic">{t("contact.sendTitleAccent")}</span>
                </h3>
                <p className="mt-2 text-sm text-slate-400">{t("contact.sendDesc")}</p>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="h-14 w-14 text-emerald-400 mx-auto mb-4" />
                    <h4 className="font-serif text-2xl text-white mb-2">
                      {t("contact.successTitle")}
                    </h4>
                    <p className="text-slate-400">{t("contact.successDesc")}</p>
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <AlertCircle className="h-14 w-14 text-red-400 mx-auto mb-4" />
                    <h4 className="font-serif text-2xl text-white mb-2">
                      {t("contact.errorTitle")}
                    </h4>
                    <p className="text-slate-400">{t("contact.errorDesc")}</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 btn-ghost"
                    >
                      Try again
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    className="space-y-5"
                  >
                    {/* Inquiry type */}
                    <Field label={t("contact.inquiryType")}>
                      <select
                        name="inquiry_type"
                        required
                        defaultValue=""
                        className="form-input"
                      >
                        <option value="" disabled>
                          {t("contact.inquiryPlaceholder")}
                        </option>
                        <option value="buying">{t("contact.buying")}</option>
                        <option value="selling">{t("contact.selling")}</option>
                        <option value="partnership">{t("contact.partnership")}</option>
                        <option value="career_other">{t("contact.career")}</option>
                      </select>
                    </Field>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label={t("contact.name")}>
                        <input name="name" type="text" required className="form-input" />
                      </Field>
                      <Field label={t("contact.email")}>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={(e) => validateEmail(e.target.value)}
                          className="form-input"
                        />
                        {emailError && (
                          <p className="mt-1.5 text-xs text-red-400">{t("contact.emailError")}</p>
                        )}
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label={t("contact.company")}>
                        <input name="company_name" type="text" className="form-input" />
                      </Field>
                      <Field label={t("contact.office")}>
                        <select name="contact_office" required defaultValue="" className="form-input">
                          <option value="" disabled>
                            {t("contact.officePlaceholder")}
                          </option>
                          {offices.map((o) => (
                            <option key={o.id} value={`${o.city} (${o.flag})`}>
                              {o.city} ({o.flag})
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label={t("contact.message")}>
                      <textarea name="message" rows={4} required className="form-input resize-none" />
                    </Field>

                    <button
                      type="submit"
                      disabled={status === "sending" || emailError}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      {status === "sending" ? (
                        t("contact.sending")
                      ) : (
                        <>
                          {t("contact.send")}
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal delay={0.1}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group block p-6 rounded-sm border border-[rgba(201,169,97,0.14)] bg-[#0d1929] hover:border-[var(--primary)]/40 transition-colors duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm border border-[rgba(201,169,97,0.3)] bg-[rgba(201,169,97,0.05)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[#0a1420] transition-all duration-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.18em] uppercase text-[var(--primary)] font-semibold">
                      {t("contact.directTitle")}
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{t("contact.directDesc")}</p>
                    <p className="mt-2 text-white font-medium break-all">{CONTACT_EMAIL}</p>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.18}>
              <a
                href={CLIENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-sm border border-[rgba(201,169,97,0.14)] bg-[#0d1929] hover:border-[var(--primary)]/40 transition-colors duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm border border-[rgba(201,169,97,0.3)] bg-[rgba(201,169,97,0.05)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[#0a1420] transition-all duration-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.18em] uppercase text-[var(--primary)] font-semibold">
                      {t("contact.portalTitle")}
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{t("contact.portalDesc")}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-white font-medium">
                      {t("nav.portal")}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="p-6 rounded-sm border border-[rgba(201,169,97,0.14)] bg-gradient-to-br from-[rgba(201,169,97,0.06)] to-transparent">
                <p className="font-serif text-lg text-white leading-snug">
                  &ldquo;The name for Integrity. Connecting global commodity markets since 2007.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          padding: 0.75rem 0.9rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(201, 169, 97, 0.18);
          border-radius: 2px;
          color: #eef2f7;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: var(--primary);
          background: rgba(201, 169, 97, 0.04);
          box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.1);
        }
        :global(.form-input::placeholder) {
          color: #64748b;
        }
        :global(select.form-input option) {
          background: #0d1929;
          color: #eef2f7;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium tracking-wide text-slate-400 mb-2">{label}</span>
      {children}
    </label>
  );
}
