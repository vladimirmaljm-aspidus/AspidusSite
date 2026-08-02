"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe2, ArrowRight } from "lucide-react";
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
    <section id="esg" className="relative py-16 sm:py-24 bg-[var(--forest-deep)]/40 border-t border-[var(--rule)] overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/20 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        {/* Compact header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow mb-3">{t("esg.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section">
                {t("esg.title")}{" "}
                <span className="gold-gradient italic">{t("esg.titleAccent")}</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="lead max-w-xl">{t("esg.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Pillars — compact */}
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
              className="group bg-[var(--background)] p-6 hover:bg-[var(--card)] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 border border-[var(--rule-strong)] flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] group-hover:border-[var(--brass)] transition-all">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="mono-label opacity-40 text-[0.6rem]">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="h-card mb-2 text-lg">{t(p.tKey)}</h3>
              <p className="body-sm text-[0.82rem]">{t(p.dKey)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats — inline horizontal */}
        <Reveal delay={0.15}>
          <div className="mt-6 grid grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {ESG_STATS.map((s, i) => (
              <div key={i} className="bg-[var(--background)] p-5 text-center sm:text-left">
                <div className="font-serif text-2xl sm:text-3xl gold-gradient">{s.value}</div>
                <div className="mono-label mt-1.5 text-[0.6rem]">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Compliance CTA — compact */}
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-5 border border-[var(--rule-strong)] bg-[var(--card)]">
            <div className="flex-1 min-w-0">
              <div className="mono-label mb-1 text-[0.6rem]">{t("reporting.tag")}</div>
              <p className="text-sm text-[var(--parchment)] line-clamp-2">{t("reporting.desc")}</p>
            </div>
            <RLink to="/reporting" className="btn-outline group whitespace-nowrap">
              {t("footer.compliance")}
              <ArrowRight className="h-3 w-3 text-[var(--brass)]" />
            </RLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
