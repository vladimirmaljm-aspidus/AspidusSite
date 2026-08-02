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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header — editorial two-column */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="eyebrow mb-4">{t("about.tag")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label">01 / About</div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="h-section max-w-3xl">{t("about.title")}</h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead mt-6 max-w-2xl">{t("about.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Content grid — image + values */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div ref={ref} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src="/aspidus/team1.webp"
                  alt="Aspidus team"
                  style={{ y: imgY, scale: 1.1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[var(--brass)]/30 -z-0" />
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-[var(--card)] border border-[var(--rule-strong)] p-5 max-w-[200px]"
              >
                <div className="font-serif text-3xl gold-gradient">17+</div>
                <div className="mono-label mt-1">{t("about.years")}</div>
              </motion.div>
            </div>
          </Reveal>

          {/* Values */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {values.map((v, i) => (
                <Reveal key={v.key} delay={0.1 + i * 0.08}>
                  <div className="group flex items-start gap-5 py-6 border-b border-[var(--rule)] last:border-b-0">
                    <div className="flex-shrink-0 w-11 h-11 border border-[var(--rule-strong)] flex items-center justify-center text-[var(--brass)] transition-all duration-400 group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] group-hover:border-[var(--brass)]">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 pt-1.5">
                      <p className="text-[var(--parchment)] leading-relaxed">{t(v.key)}</p>
                    </div>
                    <span className="mono-label opacity-40 pt-2.5">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
