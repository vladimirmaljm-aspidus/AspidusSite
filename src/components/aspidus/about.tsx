"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "./i18n";
import { Reveal } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

const VALUES = [
  { key: "about.v1", tag: "Reach" },
  { key: "about.v2", tag: "People" },
  { key: "about.v3", tag: "Innovation" },
  { key: "about.v4", tag: "Stewardship" },
];

export default function About() {
  const { t } = useI18n();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="relative py-16 sm:py-24 mesh-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-14">
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

        {/* Image + values — editorial split, no cards */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Image with parallax + floating stat */}
          <Reveal className="lg:col-span-5">
            <div ref={ref} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg">
                <motion.img
                  src="/aspidus/team1.webp"
                  alt="Aspidus team"
                  style={{ y: imgY, scale: 1.12 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.5)] via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="absolute -bottom-5 -left-3 sm:-left-5 bg-white rounded-2xl shadow-lg px-5 py-4"
              >
                <div className="font-serif text-3xl leading-none" style={{ color: "var(--brass-deep)" }}>17+</div>
                <div className="mono-label mt-1 text-[0.6rem]">{t("about.years")}</div>
              </motion.div>
            </div>
          </Reveal>

          {/* Values — editorial numbered rows, NO cards */}
          <div className="lg:col-span-7">
            <div className="border-t border-[var(--rule-strong)]">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group grid grid-cols-12 gap-4 items-baseline py-6 border-b border-[var(--rule)]"
                >
                  <div className="col-span-2">
                    <span className="font-serif italic text-3xl" style={{ color: "var(--brass)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-3">
                    <span className="mono-label text-[0.6rem]" style={{ color: "var(--brass)" }}>{v.tag}</span>
                  </div>
                  <div className="col-span-7">
                    <p className="text-sm text-[var(--ink)] leading-relaxed">{t(v.key)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
