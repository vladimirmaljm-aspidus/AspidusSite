"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useI18n } from "./i18n";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

type Exec = {
  name: string;
  role: string;
  initials: string;
  location: string;
  focus: string;
};

const EXECUTIVES: Exec[] = [
  { name: "Executive Office", role: "Founder & CEO", initials: "EO", location: "Dubai, UAE", focus: "Strategy · Group Direction" },
  { name: "Head of Trading", role: "Chief Trading Officer", initials: "HT", location: "Dubai, UAE", focus: "Energy · Metals · Pricing" },
  { name: "Head of Origination", role: "Origination & Supply", initials: "HO", location: "Cape Town, ZA", focus: "Africa · Agriculture · Minerals" },
  { name: "Head of Risk & Compliance", role: "Chief Risk Officer", initials: "RC", location: "Istanbul, TR", focus: "KYC/AML · Sanctions · Legal" },
];

export default function Leadership() {
  const { t } = useI18n();

  return (
    <section id="leadership" className="relative py-20 sm:py-28 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="eyebrow mb-4">{t("leadership.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label">03 / Leadership</div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="h-section max-w-3xl">
                {t("leadership.title")} <span className="gold-gradient italic">{t("leadership.titleAccent")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead mt-5 max-w-2xl">{t("leadership.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Exec grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)]"
        >
          {EXECUTIVES.map((exec) => (
            <motion.div
              key={exec.name}
              variants={staggerItem}
              className="group bg-[var(--background)] p-6 hover:bg-[var(--card)] transition-colors duration-400"
            >
              {/* Portrait placeholder */}
              <div className="relative aspect-square mb-5 bg-[var(--muted)] border border-[var(--rule)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-5xl text-[var(--brass)]/40">{exec.initials}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--muted)] via-transparent to-transparent" />
                {/* LinkedIn icon on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-[var(--background)]/80 backdrop-blur border border-[var(--rule-strong)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Linkedin className="h-4 w-4 text-[var(--brass)]" />
                </div>
              </div>

              <h3 className="font-serif text-lg text-[var(--parchment)]">{exec.name}</h3>
              <div className="mono-label mt-1 text-[var(--brass)]">{exec.role}</div>
              <hr className="rule mt-4 mb-3" />
              <div className="body-sm">{exec.location}</div>
              <div className="mono-label mt-2 opacity-60">{exec.focus}</div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-xs text-[var(--parchment-dim)] italic">
            Executive profiles are summarised. Full biographies and disclosures available to verified counterparties on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
