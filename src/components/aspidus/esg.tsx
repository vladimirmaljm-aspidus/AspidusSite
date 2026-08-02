"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "./i18n";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { AnimatedLeaf, AnimatedShield, AnimatedGlobe, AnimatedDivider } from "./animated-icons";

const PILLARS = [
  { Icon: AnimatedLeaf, tKey: "esg.p1.t", dKey: "esg.p1.d", num: "01" },
  { Icon: AnimatedShield, tKey: "esg.p2.t", dKey: "esg.p2.d", num: "02" },
  { Icon: AnimatedGlobe, tKey: "esg.p3.t", dKey: "esg.p3.d", num: "03" },
];

const ESG_STATS = [
  { value: "100%", labelKey: "esg.stats.certified" },
  { value: "Annual", labelKey: "esg.stats.audit" },
  { value: "150+", labelKey: "esg.stats.routes" },
];

export default function Esg() {
  const { t } = useI18n();
  return (
    <section id="esg" className="relative py-16 sm:py-24 bg-[var(--parchment-warm)] overflow-hidden">
      {/* subtle forest-tinted mesh */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        background: "radial-gradient(at 80% 20%, rgba(45,74,62,0.06), transparent 50%), radial-gradient(at 20% 80%, rgba(154,123,63,0.06), transparent 50%)"
      }} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow mb-3">{t("esg.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section">
                {t("esg.title")}{" "}
                <span className="italic" style={{ color: "var(--forest)" }}>{t("esg.titleAccent")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}><AnimatedDivider className="mt-4" /></Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.12}>
              <p className="lead max-w-xl">{t("esg.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Pillars — editorial numbered rows, NOT card grid */}
        <div className="space-y-0">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.tKey}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group grid grid-cols-12 gap-4 sm:gap-8 items-start py-8 border-b border-[var(--rule)] last:border-b-0"
            >
              {/* Large numeral */}
              <div className="col-span-2 sm:col-span-1">
                <span className="font-serif italic text-3xl sm:text-4xl" style={{ color: "var(--forest)" }}>{p.num}</span>
              </div>
              {/* Animated icon */}
              <div className="col-span-3 sm:col-span-2">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ background: "rgba(45,74,62,0.08)", color: "var(--forest)" }}>
                  <p.Icon size={32} stroke="currentColor" delay={i * 0.1} />
                </div>
              </div>
              {/* Text */}
              <div className="col-span-7 sm:col-span-9">
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] mb-2">{t(p.tKey)}</h3>
                <p className="body-sm max-w-2xl">{t(p.dKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats — inline, no boxes */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-12 gap-y-6">
            {ESG_STATS.map((s, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl" style={{ color: "var(--forest)" }}>{s.value}</span>
                <span className="mono-label text-[0.6rem] max-w-[140px] leading-tight">{t(s.labelKey)}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Compliance CTA */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-[var(--rule)] shadow-sm">
            <div className="flex-1 min-w-0">
              <div className="eyebrow mb-2">{t("reporting.tag")}</div>
              <p className="text-sm text-[var(--ink)] line-clamp-2">{t("reporting.desc")}</p>
            </div>
            <RLink to="/reporting" className="btn-outline group whitespace-nowrap">
              {t("footer.compliance")}
              <ArrowRight className="h-3 w-3" />
            </RLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
