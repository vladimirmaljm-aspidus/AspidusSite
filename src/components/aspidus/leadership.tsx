"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useI18n } from "./i18n";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

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
    <section id="leadership" className="relative py-16 sm:py-24 bg-[var(--parchment-warm)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow mb-3">{t("leadership.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section">
                {t("leadership.title")}{" "}
                <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("leadership.titleAccent")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}><AnimatedDivider className="mt-4" /></Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.12}>
              <p className="lead max-w-xl">{t("leadership.desc")}</p>
            </Reveal>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {EXECUTIVES.map((exec) => (
            <motion.div
              key={exec.name}
              variants={staggerItem}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-[var(--rule)] p-5"
            >
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden mesh-warm flex items-center justify-center">
                <span className="font-serif text-5xl" style={{ color: "var(--brass)" }}>{exec.initials}</span>
                <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/80 backdrop-blur border border-[var(--rule)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Linkedin className="h-3.5 w-3.5" style={{ color: "var(--brass)" }} />
                </div>
              </div>
              <h3 className="font-serif text-base text-[var(--ink)] leading-tight">{exec.name}</h3>
              <div className="mono-label mt-1 text-[0.6rem]" style={{ color: "var(--brass)" }}>{exec.role}</div>
              <hr className="rule mt-3 mb-2" />
              <div className="text-xs text-[var(--muted-foreground)]">{exec.location}</div>
              <div className="mono-label mt-1.5 opacity-60 text-[0.55rem]">{exec.focus}</div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.15}>
          <p className="mt-4 text-[0.7rem] text-[var(--muted-foreground)] italic">
            Executive profiles are summarised. Full biographies available to verified counterparties on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
