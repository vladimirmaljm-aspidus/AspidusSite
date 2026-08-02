"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Globe2, ArrowRight } from "lucide-react";
import { useI18n } from "./i18n";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { AnimatedLeaf, AnimatedShield, AnimatedGlobe, AnimatedDivider } from "./animated-icons";

const PILLARS = [
  { Icon: AnimatedLeaf, tKey: "esg.p1.t", dKey: "esg.p1.d" },
  { Icon: AnimatedShield, tKey: "esg.p2.t", dKey: "esg.p2.d" },
  { Icon: AnimatedGlobe, tKey: "esg.p3.t", dKey: "esg.p3.d" },
];

const ESG_STATS = [
  { value: "100%", labelKey: "esg.stats.certified" },
  { value: "Annual", labelKey: "esg.stats.audit" },
  { value: "150+", labelKey: "esg.stats.routes" },
];

export default function Esg() {
  const { t } = useI18n();
  return (
    <section id="esg" className="relative py-16 sm:py-24" style={{ background: "var(--forest)", color: "#f5f2ea" }}>
      {/* mesh overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        background: "radial-gradient(at 20% 20%, rgba(196,163,104,0.3), transparent 50%), radial-gradient(at 80% 80%, rgba(74,109,94,0.4), transparent 50%)"
      }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow mb-3" style={{ color: "var(--brass-soft)" }}>{t("esg.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section" style={{ color: "#f5f2ea" }}>
                {t("esg.title")}{" "}
                <span className="italic" style={{ color: "var(--brass-soft)" }}>{t("esg.titleAccent")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}><AnimatedDivider className="mt-4" /></Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.12}>
              <p className="lead max-w-xl" style={{ color: "rgba(245,242,234,0.75)" }}>{t("esg.desc")}</p>
            </Reveal>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.tKey}
              variants={staggerItem}
              className="group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ background: "rgba(196,163,104,0.12)", color: "var(--brass-soft)" }}>
                  <p.Icon size={32} stroke="currentColor" delay={i * 0.1} />
                </div>
                <span className="mono-label opacity-40 text-[0.6rem]" style={{ color: "rgba(245,242,234,0.5)" }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-serif text-lg mb-2" style={{ color: "#f5f2ea" }}>{t(p.tKey)}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,242,234,0.7)" }}>{t(p.dKey)}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.15}>
          <div className="mt-6 grid grid-cols-3 gap-5">
            {ESG_STATS.map((s, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="font-serif text-3xl" style={{ color: "var(--brass-soft)" }}>{s.value}</div>
                <div className="mono-label mt-1.5 text-[0.6rem]" style={{ color: "rgba(245,242,234,0.6)" }}>{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex-1 min-w-0">
              <div className="mono-label mb-1 text-[0.6rem]" style={{ color: "var(--brass-soft)" }}>{t("reporting.tag")}</div>
              <p className="text-sm line-clamp-2" style={{ color: "#f5f2ea" }}>{t("reporting.desc")}</p>
            </div>
            <RLink to="/reporting" className="btn-outline group whitespace-nowrap" style={{ color: "#f5f2ea", borderColor: "rgba(255,255,255,0.3)" }}>
              {t("footer.compliance")}
              <ArrowRight className="h-3 w-3" style={{ color: "var(--brass-soft)" }} />
            </RLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
