"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, ArrowUp, Lock } from "lucide-react";
import { useI18n } from "./i18n";
import { offices, CONTACT_EMAIL, CLIENT_PORTAL_URL, LINKEDIN_URL } from "./data";
import { RLink, useRouter } from "./router";

export default function SiteFooter() {
  const { t } = useI18n();
  const { route, navigate } = useRouter();

  const go = (to: string) => {
    if (to.startsWith("/#")) {
      const anchor = to.slice(2);
      if (route.name !== "home") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(`#${anchor}`)?.scrollIntoView({ behavior: "smooth" });
        }, 350);
      } else {
        document.querySelector(`#${anchor}`)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="relative bg-[var(--parchment-warm)] border-t border-[rgba(201,165,92,0.16)] mt-auto">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <img
              src="/aspidus/aspidus_logo2.webp"
              alt="Aspidus"
              className="h-10 w-auto mb-5"
            />
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-sm">
              {t("footer.brand")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-sm border border-[rgba(201,165,92,0.2)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--brass)] hover:border-[var(--primary)] transition-all duration-400"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email"
                className="w-10 h-10 rounded-sm border border-[rgba(201,165,92,0.2)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--brass)] hover:border-[var(--primary)] transition-all duration-400"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--primary)] font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => go("/#about")} className="text-[var(--muted-foreground)] hover:text-[var(--ink)] transition-colors">{t("footer.aboutUs")}</button></li>
              <li><button onClick={() => go("/commodities")} className="text-[var(--muted-foreground)] hover:text-[var(--ink)] transition-colors">{t("nav.commodities")}</button></li>
              <li><button onClick={() => go("/#locations")} className="text-[var(--muted-foreground)] hover:text-[var(--ink)] transition-colors">{t("footer.globalPresence")}</button></li>
              <li><button onClick={() => go("/contact")} className="text-[var(--muted-foreground)] hover:text-[var(--ink)] transition-colors">{t("footer.contactUs")}</button></li>
              <li><button onClick={() => go("/reporting")} className="text-[var(--muted-foreground)] hover:text-[var(--ink)] transition-colors">{t("footer.compliance")}</button></li>
              <li>
                <a href={CLIENT_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1.5">
                  <Lock className="h-3 w-3" />
                  {t("footer.portal")}
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--primary)] font-semibold mb-4">
              {t("footer.ourLocations")}
            </h4>
            <ul className="space-y-3 text-sm">
              {offices.map((o) => (
                <li key={o.id}>
                  <button onClick={() => go(`/office/${o.id}`)} className="text-left group">
                    <div className="text-[var(--ink)] group-hover:text-[var(--brass)] transition-colors">
                      {o.name}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)]">{o.country}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--primary)] font-semibold mb-4">
              {t("footer.contact")}
            </h4>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-[var(--ink)] hover:text-[var(--brass)] transition-colors break-all"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-4">
              <button onClick={() => go("/contact")} className="btn-ghost text-xs py-2.5 px-5">
                {t("footer.sendInquiry")}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[rgba(201,165,92,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)]">{t("footer.rights")}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[var(--muted-foreground)]">
            <button className="hover:text-[var(--brass)] transition-colors">{t("footer.privacy")}</button>
            <span className="text-[var(--rule-strong)]">·</span>
            <button className="hover:text-[var(--brass)] transition-colors">{t("footer.terms")}</button>
            <span className="text-[var(--rule-strong)]">·</span>
            <button className="hover:text-[var(--brass)] transition-colors">{t("footer.cookie")}</button>
            <span className="text-[var(--rule-strong)]">·</span>
            <button className="hover:text-[var(--brass)] transition-colors">{t("footer.disclaimer")}</button>
            <span className="text-[var(--rule-strong)]">·</span>
            <button onClick={() => go("/reporting")} className="hover:text-[var(--brass)] transition-colors">{t("footer.compliance")}</button>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-sm bg-gradient-to-br from-[#c4a368] to-[var(--brass)] text-[#0a1420] flex items-center justify-center shadow-lg hover:shadow-[0_8px_30px_-8px_rgba(201,165,92,0.7)] transition-shadow"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
