"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "./i18n";
import { Reveal } from "./motion-helpers";
import { AnimatedGlobe, AnimatedShield, AnimatedTrend, AnimatedLeaf, AnimatedDivider } from "./animated-icons";

const values = [
  { key: "about.v1", Icon: AnimatedGlobe },
  { key: "about.v2", Icon: AnimatedShield },
  { key: "about.v3", Icon: AnimatedTrend },
  { key: "about.v4", Icon: AnimatedLeaf },
];

export default function About() {
  const { t } = useI18n();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="relative py-16 sm:py-24 mesh-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Compact header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow mb-3">{t("about.tag")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section">{t("about.title")}</h2>
            </Reveal>
            <Reveal delay={0.1}><AnimatedDivider className="mt-4" /></Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.12}>
              <p className="lead max-w-2xl">{t("about.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Image + values */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-5">
            <div ref={ref} className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-lg">
                <motion.img
                  src="/aspidus/team1.webp"
                  alt="Aspidus team"
                  style={{ y: imgY, scale: 1.1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.4)] via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="absolute -bottom-5 -left-3 sm:-left-5 card-glass rounded-2xl px-5 py-4"
              >
                <div className="font-serif text-3xl leading-none" style={{ color: "var(--brass-deep)" }}>17+</div>
                <div className="mono-label mt-1 text-[0.6rem]">{t("about.years")}</div>
              </motion.div>
            </div>
          </Reveal>

          {/* Values — rounded glass cards, animated icons */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.key} delay={0.05 + i * 0.08}>
                <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full border border-[var(--rule)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ background: "rgba(154,123,63,0.08)", color: "var(--brass)" }}>
                      <v.Icon size={28} delay={i * 0.1} />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm text-[var(--ink)] leading-relaxed">{t(v.key)}</p>
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
