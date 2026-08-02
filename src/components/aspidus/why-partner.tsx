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
    <section className="relative py-24 sm:py-32 bg-[#0a1626] overflow-hidden">
      {/* decorative diagonal line */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full border-r border-[var(--primary)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <Reveal>
            <div className="section-tag mb-5">{t("why.tag")}</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
              {t("why.title")}{" "}
              <span className="gold-gradient italic">{t("why.titleAccent")}</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-5 h-px w-16 bg-[var(--primary)]" />
          </Reveal>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.titleKey}
              variants={staggerItem}
              className="group relative p-7 sm:p-8 rounded-sm border border-[rgba(201,169,97,0.14)] bg-gradient-to-br from-[#0d1929] to-[#0a1626] hover:border-[var(--primary)]/45 transition-all duration-500 overflow-hidden"
            >
              {/* hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/8 blur-2xl transition-all duration-700" />

              {/* number */}
              <span className="absolute top-6 right-6 font-serif text-2xl text-[var(--primary)]/25 group-hover:text-[var(--primary)]/50 transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="w-14 h-14 rounded-sm border border-[rgba(201,169,97,0.3)] bg-[rgba(201,169,97,0.05)] flex items-center justify-center text-[var(--primary)] transition-all duration-500 group-hover:bg-[var(--primary)] group-hover:text-[#0a1420] group-hover:scale-105">
                  <c.icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 font-serif text-2xl text-white">{t(c.titleKey)}</h3>
                <div className="mt-3 h-px w-10 bg-[var(--primary)]/40 group-hover:w-16 transition-all duration-500" />
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{t(c.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
