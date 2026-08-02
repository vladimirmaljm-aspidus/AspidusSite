"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { useI18n } from "../i18n";
import { useRouter } from "../router";
import { useScrollReveals } from "../use-scroll-reveals";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meozwped";

export default function ReportingPage() {
  const { t } = useI18n();
  const { navigate } = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useScrollReveals([status]);

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

  return (
    <div className="pt-28 sm:pt-32 page-enter">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 border-b border-[rgba(26,29,36,0.09)] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/15 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <div className="breadcrumb mb-6">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>{t("nav.home")}</a>
            <span className="sep">/</span>
            <span className="text-[var(--primary)]">{t("reporting.tag")}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8" data-reveal>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(26,29,36,0.2)] bg-[rgba(201,165,92,0.06)] backdrop-blur-sm mb-6">
                <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)]">
                  {t("reporting.tag")}
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-tight">
                {t("reporting.title")}{" "}
                <span className="gold-gradient italic">{t("reporting.titleAccent")}</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-reveal data-reveal-delay="0.15">
              <p className="text-[var(--muted-foreground)] leading-relaxed">{t("reporting.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {/* Confidentiality banner */}
          <div className="mb-8 p-5 rounded-sm border border-[rgba(26,29,36,0.14)] bg-[rgba(201,165,92,0.04)] flex items-start gap-3" data-reveal>
            <Lock className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {t("reporting.confidential")}
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 rounded-sm border border-[rgba(26,29,36,0.1)] bg-gradient-to-br from-white to-[#0a1626]" data-reveal data-reveal-delay="0.1">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="h-14 w-14 text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-[var(--ink)] mb-2">
                    {t("reporting.successTitle")}
                  </h3>
                  <p className="text-[var(--muted-foreground)]">{t("reporting.successDesc")}</p>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <AlertCircle className="h-14 w-14 text-red-400 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-[var(--ink)] mb-2">Submission Failed</h3>
                  <p className="text-[var(--muted-foreground)] mb-6">Please try again.</p>
                  <button onClick={() => setStatus("idle")} className="btn-ghost">Try again</button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  className="space-y-5"
                >
                  <Field label={t("reporting.incidentType")}>
                    <select name="incident_type" required defaultValue="" className="form-input">
                      <option value="" disabled>{t("reporting.incidentPlaceholder")}</option>
                      <option value="fraud">{t("reporting.incident.fraud")}</option>
                      <option value="impersonation">{t("reporting.incident.impersonation")}</option>
                      <option value="bribery">{t("reporting.incident.bribery")}</option>
                      <option value="code_violation">{t("reporting.incident.code")}</option>
                      <option value="other">{t("reporting.incident.other")}</option>
                    </select>
                  </Field>

                  <label className="flex items-start gap-3 p-4 rounded-sm border border-[rgba(26,29,36,0.1)] bg-[var(--parchment-warm)] cursor-pointer hover:border-[rgba(26,29,36,0.2)] transition-colors">
                    <input
                      type="checkbox"
                      name="anonymous"
                      value="yes"
                      className="mt-0.5 w-4 h-4 accent-[var(--primary)]"
                    />
                    <span className="text-sm text-[var(--muted-foreground)]">{t("reporting.anon")}</span>
                  </label>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t("reporting.yourName")}>
                      <input name="name" type="text" className="form-input" />
                    </Field>
                    <Field label={t("reporting.yourEmail")}>
                      <input name="email" type="email" className="form-input" />
                    </Field>
                  </div>

                  <Field label={t("reporting.details")}>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder={t("reporting.detailsPlaceholder")}
                      className="form-input resize-none"
                    />
                  </Field>

                  <Field label={t("reporting.evidence")}>
                    <input name="evidence" type="text" className="form-input" placeholder="URL or description (optional)" />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed group"
                  >
                    {status === "sending" ? (
                      t("contact.sending")
                    ) : (
                      <>
                        {t("reporting.submit")}
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--brass)] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("reporting.back")}
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          padding: 0.75rem 0.9rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(201, 165, 92, 0.18);
          border-radius: 2px;
          color: #e8e4d8;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: var(--primary);
          background: rgba(201, 165, 92, 0.04);
          box-shadow: 0 0 0 3px rgba(201, 165, 92, 0.1);
        }
        :global(.form-input::placeholder) {
          color: #7e8898;
        }
        :global(select.form-input option) {
          background: var(--parchment-warm);
          color: #e8e4d8;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium tracking-wide text-[var(--muted-foreground)] mb-2">{label}</span>
      {children}
    </label>
  );
}
