"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "../i18n";
import { useRouter } from "../router";
import ContactSection from "../contact";
import { useScrollReveals } from "../use-scroll-reveals";

export default function ContactPage() {
  const { t } = useI18n();
  const { navigate } = useRouter();
  useScrollReveals([]);

  return (
    <div className="pt-28 sm:pt-32 page-enter">
      <section className="border-b border-[rgba(201,165,92,0.12)] pb-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="breadcrumb py-4">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>{t("nav.home")}</a>
            <span className="sep">/</span>
            <span className="text-[var(--primary)]">{t("nav.contact")}</span>
          </div>
        </div>
      </section>

      <ContactSection />

      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-[var(--parchment-dim)] hover:text-[var(--primary)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("common.backToHome")}
          </button>
        </div>
      </div>
    </div>
  );
}
