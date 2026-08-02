"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { Reveal } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

type Exec = {
  name: string;
  role: string;
  location: string;
  focus: string;
};

const EXECUTIVES: Exec[] = [
  { name: "Executive Office", role: "Founder & Chief Executive", location: "Dubai, UAE", focus: "Group strategy · Direction" },
  { name: "Head of Trading", role: "Chief Trading Officer", location: "Dubai, UAE", focus: "Energy · Metals · Pricing" },
  { name: "Head of Origination", role: "Origination & Supply", location: "Cape Town, ZA", focus: "Africa · Agriculture · Minerals" },
  { name: "Head of Risk & Compliance", role: "Chief Risk Officer", location: "Istanbul, TR", focus: "KYC / AML · Sanctions · Legal" },
];

export default function Leadership() {
  const { t } = useI18n();
  return (
    <section id="leadership" className="relative py-16 sm:py-24 bg-[var(--parchment-warm)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
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

        {/* Editorial list — table-like, NO portrait placeholders */}
        <div className="border-t border-[var(--rule-strong)]">
          {EXECUTIVES.map((exec, i) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group grid grid-cols-12 gap-4 items-center py-6 border-b border-[var(--rule)] hover:bg-white/50 transition-colors duration-300 -mx-2 px-2 rounded-lg"
            >
              {/* Index */}
              <div className="col-span-2 sm:col-span-1">
                <span className="font-serif italic text-xl" style={{ color: "var(--brass)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {/* Name + role */}
              <div className="col-span-10 sm:col-span-5">
                <h3 className="font-serif text-lg sm:text-xl text-[var(--ink)] leading-tight">{exec.name}</h3>
                <div className="mono-label mt-1 text-[0.6rem]" style={{ color: "var(--brass)" }}>{exec.role}</div>
              </div>
              {/* Location */}
              <div className="col-span-6 sm:col-span-3">
                <div className="text-sm text-[var(--ink)]">{exec.location}</div>
                <div className="mono-label mt-0.5 text-[0.55rem] opacity-60">Office</div>
              </div>
              {/* Focus */}
              <div className="col-span-5 sm:col-span-2">
                <div className="text-xs text-[var(--muted-foreground)] leading-relaxed">{exec.focus}</div>
              </div>
              {/* LinkedIn */}
              <div className="col-span-1 flex justify-end">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg border border-[var(--rule)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--brass)] hover:border-[var(--brass)] opacity-0 group-hover:opacity-100 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-6 text-[0.7rem] text-[var(--muted-foreground)] italic">
            Executive profiles are summarised. Full biographies and disclosures are available to verified counterparties on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
