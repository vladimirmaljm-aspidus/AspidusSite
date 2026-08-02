"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, UserRound, Lightbulb, Leaf } from "lucide-react";
import { useI18n } from "./i18n";
import { Reveal } from "./motion-helpers";

const values = [
  { key: "about.v1", icon: Globe },
  { key: "about.v2", icon: UserRound },
  { key: "about.v3", icon: Lightbulb },
  { key: "about.v4", icon: Leaf },
];

export default function About() {
  const { t } = useI18n();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="relative py-16 sm:py-24 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Compact header — single row */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow mb-3">{t("about.tag")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section">{t("about.title")}</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="lead max-w-2xl">{t("about.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Image + values — tighter */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-5">
            <div ref={ref} className="relative">
              <div className="relative aspect-[5/4] overflow-hidden">
                <motion.img
                  src="/aspidus/team1.webp"
                  alt="Aspidus team"
                  style={{ y: imgY, scale: 1.1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-[var(--card)] border border-[var(--rule-strong)] px-4 py-3">
                <div className="font-serif text-2xl gold-gradient leading-none">17+</div>
                <div className="mono-label mt-1 text-[0.6rem]">{t("about.years")}</div>
              </div>
            </div>
          </Reveal>

          {/* Values — 2x2 grid, compact */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {values.map((v, i) => (
              <Reveal key={v.key} delay={0.05 + i * 0.06}>
                <div className="group bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-300 p-5 h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 border border-[var(--rule-strong)] flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] transition-all">
                      <v.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[var(--parchment)] leading-relaxed">{t(v.key)}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
