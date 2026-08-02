"use client";

import React from "react";
import { useI18n } from "./i18n";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { motion } from "framer-motion";
import { AnimatedShield, AnimatedGlobe, AnimatedTrend } from "./animated-icons";

const cards = [
  { Icon: AnimatedShield, titleKey: "why.c1.t", descKey: "why.c1.d" },
  { Icon: AnimatedGlobe, titleKey: "why.c2.t", descKey: "why.c2.d" },
  { Icon: AnimatedTrend, titleKey: "why.c3.t", descKey: "why.c3.d" },
];

export default function WhyPartner() {
  const { t } = useI18n();
  return (
    <section className="relative py-16 sm:py-24 mesh-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">{t("approach.eyebrow")}</div>
            <h2 className="h-section">
              {t("approach.title")}{" "}
              <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("approach.titleAccent")}</span>
            </h2>
          </div>
          <div className="lg:col-span-8" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.titleKey}
              variants={staggerItem}
              className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[var(--rule)]"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ background: "rgba(154,123,63,0.08)", color: "var(--brass)" }}>
                  <c.Icon size={32} delay={i * 0.1} />
                </div>
                <span className="mono-label opacity-40 text-[0.6rem]">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="h-card mb-3 text-lg">{t(c.titleKey)}</h3>
              <p className="body-sm text-[0.85rem]">{t(c.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
