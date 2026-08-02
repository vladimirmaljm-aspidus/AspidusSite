"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, UserRound, Lightbulb, Leaf } from "lucide-react";
import { useI18n } from "./i18n";
import { Reveal, Parallax, easeOutExpo } from "./motion-helpers";

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
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal y={40}>
            <div ref={ref} className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[4/4.5] overflow-hidden rounded-sm">
                <motion.img
                  src="/aspidus/team1.webp"
                  alt="Aspidus team"
                  style={{ y: imgY, scale: 1.1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111d]/70 via-transparent to-transparent" />
              </div>

              {/* gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[var(--primary)]/40 rounded-sm -z-0" />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.3 }}
                className="absolute -bottom-8 -left-4 sm:-left-8 glass-card rounded-sm p-5 sm:p-6 max-w-[200px]"
              >
                <div className="text-4xl font-serif gold-gradient">17+</div>
                <div className="text-xs tracking-[0.2em] uppercase text-slate-400 mt-1">
                  {t("about.years")}
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <div className="section-tag mb-5">{t("about.tag")}</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
                {t("about.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-5 h-px w-16 bg-[var(--primary)]" />
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
                {t("about.desc")}
              </p>
            </Reveal>

            {/* Value list */}
            <div className="mt-8 space-y-4">
              {values.map((v, i) => (
                <Reveal key={v.key} delay={0.3 + i * 0.08}>
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-sm border border-[rgba(201,169,97,0.3)] bg-[rgba(201,169,97,0.05)] flex items-center justify-center text-[var(--primary)] transition-all duration-400 group-hover:bg-[rgba(201,169,97,0.12)] group-hover:border-[var(--primary)]">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <p className="pt-2.5 text-slate-300 leading-relaxed">{t(v.key)}</p>
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
