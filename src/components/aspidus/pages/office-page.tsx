"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, Clock, Mail, Plane, Ship, Building2, Compass, Hammer, Globe, Leaf } from "lucide-react";
import { useI18n } from "../i18n";
import { offices, commodities, CONTACT_EMAIL } from "../data";
import { RLink, useRouter } from "../router";
import { useScrollReveals } from "../use-scroll-reveals";

const OFFICE_ICONS: Record<string, { why1: typeof Plane; why2: typeof Building2; why3: typeof Globe }> = {
  dubai: { why1: Plane, why2: Building2, why3: Globe },
  capetown: { why1: Globe, why2: Ship, why3: Leaf },
  istanbul: { why1: Compass, why2: Building2, why3: Hammer },
};

const OFFICE_SECTORS: Record<string, string[]> = {
  dubai: ["energy", "metals"],
  capetown: ["agriculture", "nuts_dried_fruits", "raw_materials"],
  istanbul: ["metals", "construction", "raw_materials"],
};

export default function OfficePage({ id }: { id: string }) {
  const { t } = useI18n();
  const { navigate } = useRouter();
  const office = offices.find((o) => o.id === id);

  useScrollReveals([id]);

  if (!office) {
    return (
      <div className="pt-32 pb-24 page-enter">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h1 className="font-serif text-4xl text-[var(--ink)] mb-4">Office not found</h1>
          <RLink to="/#locations" className="btn-primary mt-6">{t("common.backToHome")}</RLink>
        </div>
      </div>
    );
  }

  const icons = OFFICE_ICONS[office.id] || OFFICE_ICONS.dubai;
  const whyKeys = [
    { t: t(`office.${office.id}.why1.t`), d: t(`office.${office.id}.why1.d`), Icon: icons.why1 },
    { t: t(`office.${office.id}.why2.t`), d: t(`office.${office.id}.why2.d`), Icon: icons.why2 },
    { t: t(`office.${office.id}.why3.t`), d: t(`office.${office.id}.why3.d`), Icon: icons.why3 },
  ];
  const officeSectors = OFFICE_SECTORS[office.id] || [];
  const sectorCommodities = officeSectors.map((sid) => commodities.find((c) => c.id === sid)).filter(Boolean);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <motion.img
          src={office.image}
          alt={office.city}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.9)] via-[rgba(26,29,36,0.3)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--parchment)]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pb-12 sm:pb-16 w-full">
          <div className="breadcrumb mb-6 text-[var(--muted-foreground)]">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>{t("nav.home")}</a>
            <span className="sep">/</span>
            <a href="/#locations" onClick={(e) => { e.preventDefault(); navigate("/#locations"); }}>{t("nav.locations")}</a>
            <span className="sep">/</span>
            <span className="text-[var(--primary)]">{office.city}</span>
          </div>

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,165,92,0.35)] bg-[rgba(201,165,92,0.08)] backdrop-blur-sm mb-5"
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)]">
                {office.legalName}
              </span>
              <span className="text-[0.65rem] font-bold tracking-widest text-[var(--primary)] border-l border-[rgba(26,29,36,0.2)] pl-2">
                {office.flag}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[var(--ink)] leading-[1] tracking-tight"
            >
              {office.city}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-5 text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed"
            >
              {t(office.descKey)}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why this city */}
      <section className="py-20 sm:py-24 bg-[var(--parchment-warm)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12" data-reveal>
            <div className="section-tag mb-5">{t("office.whyTitle")} {office.city}</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] leading-tight">
              {t("office.whyTitle")}{" "}
              <span className="gold-gradient italic">{office.city}</span>?
            </h2>
            <div className="mt-5 h-px w-16 bg-[var(--primary)]" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {whyKeys.map((why, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String(i * 0.12)}
                className="group relative p-7 sm:p-8 rounded-sm border border-[rgba(26,29,36,0.1)] bg-gradient-to-br from-white to-[#0a1626] hover:border-[var(--primary)]/45 transition-all duration-500"
              >
                <span className="absolute top-6 right-6 font-serif text-2xl text-[var(--primary)]/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-14 h-14 rounded-sm border border-[rgba(26,29,36,0.2)] bg-[rgba(201,165,92,0.05)] flex items-center justify-center text-[var(--primary)] mb-6 transition-all duration-500 group-hover:bg-[var(--primary)] group-hover:text-[#0a1420]">
                  <why.Icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl text-[var(--ink)] mb-3">{why.t}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{why.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office details + specialties */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Details */}
            <div data-reveal>
              <div className="section-tag mb-5">{t("office.details")}</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] mb-8">
                {office.legalName}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-sm border border-[rgba(26,29,36,0.1)] bg-white">
                  <div className="w-11 h-11 rounded-sm border border-[rgba(26,29,36,0.2)] bg-[rgba(201,165,92,0.05)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--primary)] font-semibold mb-1">
                      {t("office.address")}
                    </div>
                    <p className="text-[var(--ink)] leading-relaxed">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-sm border border-[rgba(26,29,36,0.1)] bg-white">
                  <div className="w-11 h-11 rounded-sm border border-[rgba(26,29,36,0.2)] bg-[rgba(201,165,92,0.05)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--primary)] font-semibold mb-1">
                      {t("office.hours")}
                    </div>
                    <p className="text-[var(--ink)]">{office.hours} ({office.hoursTz})</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-sm border border-[rgba(26,29,36,0.1)] bg-white">
                  <div className="w-11 h-11 rounded-sm border border-[rgba(26,29,36,0.2)] bg-[rgba(201,165,92,0.05)] flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--primary)] font-semibold mb-1">
                      {t("footer.contact")}
                    </div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--ink)] hover:text-[var(--brass)] transition-colors break-all">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <RLink to="/contact" className="btn-primary group mt-8">
                {t("office.contact")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </RLink>
            </div>

            {/* Specialties / sectors */}
            <div data-reveal data-reveal-delay="0.15">
              <div className="section-tag mb-5">{t("office.specialties")}</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] mb-8">
                {t("office.overview")}
              </h2>

              <div className="space-y-4">
                {sectorCommodities.map((c) => c && (
                  <RLink
                    key={c.id}
                    to={`/commodities/${c.id}`}
                    className="group flex items-center gap-4 p-5 rounded-sm border border-[rgba(26,29,36,0.1)] bg-white hover:border-[var(--primary)]/45 transition-colors duration-500"
                  >
                    <div className="w-14 h-14 rounded-sm overflow-hidden flex-shrink-0 border border-[rgba(26,29,36,0.14)]">
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <c.icon className="h-4 w-4 text-[var(--primary)]" />
                        <h3 className="font-serif text-lg text-[var(--ink)] group-hover:text-[var(--brass)] transition-colors">
                          {c.name}
                        </h3>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1 line-clamp-1">
                        {c.items.slice(0, 5).join(" · ")}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </RLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <button
            onClick={() => navigate("/#locations")}
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--brass)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("common.back")} — {t("nav.locations")}
          </button>
        </div>
      </div>
    </div>
  );
}
