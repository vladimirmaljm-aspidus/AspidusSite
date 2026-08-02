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
    <section className="relative py-16 sm:py-24 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Compact header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">{t("approach.eyebrow")}</div>
            <h2 className="h-section">
              {t("approach.title")}{" "}
              <span className="gold-gradient italic">{t("approach.titleAccent")}</span>
            </h2>
          </div>
          <div className="lg:col-span-8" />
        </div>

        {/* Cards — denser, 3 columns */}
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
              className="group relative bg-[var(--background)] p-6 hover:bg-[var(--card)] transition-colors duration-300 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 border border-[var(--rule-strong)] flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] group-hover:border-[var(--brass)] transition-all">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="mono-label opacity-40 text-[0.6rem]">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="h-card mb-2 text-lg">{t(c.titleKey)}</h3>
              <p className="body-sm text-[0.82rem]">{t(c.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
