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
    <section id="leadership" className="relative py-16 sm:py-24 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Compact header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow mb-3">{t("leadership.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section">
                {t("leadership.title")}{" "}
                <span className="gold-gradient italic">{t("leadership.titleAccent")}</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="lead max-w-xl">{t("leadership.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Exec grid — compact horizontal cards */}
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
              className="group bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-300 p-5"
            >
              {/* Compact portrait */}
              <div className="relative aspect-[4/5] mb-4 bg-[var(--muted)] border border-[var(--rule)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-4xl text-[var(--brass)]/40">{exec.initials}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--muted)] via-transparent to-transparent" />
                <div className="absolute top-2 right-2 w-7 h-7 bg-[var(--background)]/80 backdrop-blur border border-[var(--rule-strong)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Linkedin className="h-3.5 w-3.5 text-[var(--brass)]" />
                </div>
              </div>

              <h3 className="font-serif text-base text-[var(--parchment)] leading-tight">{exec.name}</h3>
              <div className="mono-label mt-1 text-[var(--brass)] text-[0.6rem]">{exec.role}</div>
              <hr className="rule mt-3 mb-2" />
              <div className="text-xs text-[var(--parchment-dim)]">{exec.location}</div>
              <div className="mono-label mt-1.5 opacity-60 text-[0.55rem]">{exec.focus}</div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.15}>
          <p className="mt-4 text-[0.7rem] text-[var(--parchment-dim)] italic">
            Executive profiles are summarised. Full biographies available to verified counterparties on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
