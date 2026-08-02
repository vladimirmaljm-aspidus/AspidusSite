"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "./i18n";
import { RLink } from "./router";
import { Reveal } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

const PRINCIPLES = [
  { titleKey: "why.c1.t", descKey: "why.c1.d", tag: "Expertise" },
  { titleKey: "why.c2.t", descKey: "why.c2.d", tag: "Network" },
  { titleKey: "why.c3.t", descKey: "why.c3.d", tag: "Advantage" },
];

export default function WhyPartner() {
  const { t } = useI18n();
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header — large editorial statement */}
        <div className="max-w-4xl mb-14">
          <Reveal>
            <div className="eyebrow mb-4">{t("approach.eyebrow")}</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display">
              {t("approach.title")}{" "}
              <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("approach.titleAccent")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}><AnimatedDivider className="mt-5" /></Reveal>
        </div>

        {/* Principles — large editorial rows, NOT cards */}
        <div className="space-y-0">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className="group grid grid-cols-12 gap-4 sm:gap-8 items-start py-10 border-b border-[var(--rule)] last:border-b-0"
            >
              {/* Large numeral */}
              <div className="col-span-2 sm:col-span-2">
                <span
                  className="font-serif text-5xl sm:text-7xl leading-none transition-colors duration-500 group-hover:italic"
                  style={{ color: "var(--brass)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {/* Tag + title */}
              <div className="col-span-10 sm:col-span-5">
                <div className="mono-label mb-2" style={{ color: "var(--brass)" }}>{p.tag}</div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] leading-tight">
                  {t(p.titleKey)}
                </h3>
              </div>
              {/* Description */}
              <div className="col-span-12 sm:col-span-5">
                <p className="body-sm text-[0.95rem] leading-relaxed">{t(p.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <p className="font-serif text-lg text-[var(--ink-soft)] italic max-w-md">
              Three disciplines. One standard. Built on seventeen years of global trade.
            </p>
            <RLink to="/contact" className="btn-brass group">
              {t("locations.partnership")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </RLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
