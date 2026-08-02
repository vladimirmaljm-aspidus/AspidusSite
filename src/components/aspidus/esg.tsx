"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe2 } from "lucide-react";
import { useI18n } from "./i18n";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

const PILLARS = [
  { icon: Leaf, tKey: "esg.p1.t", dKey: "esg.p1.d" },
  { icon: ShieldCheck, tKey: "esg.p2.t", dKey: "esg.p2.d" },
  { icon: Globe2, tKey: "esg.p3.t", dKey: "esg.p3.d" },
];

const ESG_STATS = [
  { value: "100%", labelKey: "esg.stats.certified" },
  { value: "Annual", labelKey: "esg.stats.audit" },
  { value: "150+", labelKey: "esg.stats.routes" },
];

export default function Esg() {
  const { t } = useI18n();

  return (
    <section id="esg" className="relative py-20 sm:py-28 bg-[var(--forest-deep)]/40 border-t border-[var(--rule)] overflow-hidden">
      {/* subtle forest glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/20 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="eyebrow mb-4">{t("esg.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label">04 / ESG</div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="h-section max-w-3xl">
                {t("esg.title")} <span className="gold-gradient italic">{t("esg.titleAccent")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead mt-5 max-w-2xl">{t("esg.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]"
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.tKey}
              variants={staggerItem}
              className="group bg-[var(--background)] p-7 hover:bg-[var(--card)] transition-colors duration-400"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 border border-[var(--rule-strong)] flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] group-hover:border-[var(--brass)] transition-all duration-400">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="mono-label opacity-40">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="h-card mb-3">{t(p.tKey)}</h3>
              <p className="body-sm">{t(p.dKey)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {ESG_STATS.map((s, i) => (
              <div key={i} className="bg-[var(--background)] p-6 text-center sm:text-left">
                <div className="font-serif text-3xl sm:text-4xl gold-gradient">{s.value}</div>
                <div className="mono-label mt-2">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Compliance CTA */}
        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-6 border border-[var(--rule-strong)] bg-[var(--card)]">
            <div>
              <div className="mono-label mb-1">{t("reporting.tag")}</div>
              <p className="text-sm text-[var(--parchment)]">{t("reporting.desc")}</p>
            </div>
            <RLink to="/reporting" className="btn-outline group whitespace-nowrap">
              {t("footer.compliance")}
              <span className="text-[var(--brass)]">→</span>
            </RLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
