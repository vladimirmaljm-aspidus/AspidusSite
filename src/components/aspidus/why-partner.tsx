"use client";

import React from "react";
import { ShieldCheck, Network, TrendingUp } from "lucide-react";
import { useI18n } from "./i18n";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { motion } from "framer-motion";

const cards = [
  { icon: ShieldCheck, titleKey: "why.c1.t", descKey: "why.c1.d" },
  { icon: Network, titleKey: "why.c2.t", descKey: "why.c2.d" },
  { icon: TrendingUp, titleKey: "why.c3.t", descKey: "why.c3.d" },
];

export default function WhyPartner() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 sm:py-28 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="eyebrow mb-4">{t("approach.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label">06 / Approach</div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="h-section max-w-3xl">
                {t("approach.title")}{" "}
                <span className="gold-gradient italic">{t("approach.titleAccent")}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.titleKey}
              variants={staggerItem}
              className="group relative bg-[var(--background)] p-7 sm:p-8 hover:bg-[var(--card)] transition-colors duration-400 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-[var(--rule-strong)] flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] group-hover:border-[var(--brass)] transition-all duration-400">
                  <c.icon className="h-6 w-6" />
                </div>
                <span className="mono-label opacity-40">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="h-card mb-3">{t(c.titleKey)}</h3>
              <p className="body-sm">{t(c.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
