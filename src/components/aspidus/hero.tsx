"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useI18n } from "./i18n";
import { easeOutExpo } from "./motion-helpers";

export default function Hero() {
  const { t } = useI18n();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[92svh] flex items-end overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0">
        <img src="/aspidus/hero2.webp" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d12] via-[#0a0d12]/85 to-[#0a0d12]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-transparent to-[#0a0d12]/50" />
      </motion.div>

      {/* Editorial grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-[var(--brass)]" />
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-[var(--brass)]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full pb-16 sm:pb-20 pt-32"
      >
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Main headline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="pill">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brass)] animate-pulse" />
                {t("hero.badge")}
              </span>
              <span className="mono-label">{t("hero.est")}</span>
            </motion.div>

            <h1 className="h-display">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, ease: easeOutExpo, delay: 0.35 }}
                >
                  {t("hero.title1")}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block gold-gradient italic"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, ease: easeOutExpo, delay: 0.48 }}
                >
                  {t("hero.title2")}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.7 }}
              className="lead mt-6 max-w-xl"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.85 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button onClick={() => scrollTo("#commodities")} className="btn-brass group">
                {t("hero.cta1")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button onClick={() => scrollTo("#contact")} className="btn-outline group">
                {t("hero.cta2")}
                <Plus className="h-3.5 w-3.5 transition-transform group-hover:rotate-90" />
              </button>
            </motion.div>
          </div>

          {/* Side meta — editorial stats column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 1 }}
            className="lg:col-span-4 lg:border-l lg:border-[var(--rule)] lg:pl-8"
          >
            <div className="space-y-5">
              <div>
                <div className="mono-label mb-1">Trade Volume</div>
                <div className="font-serif text-3xl text-[var(--parchment)]">
                  <span className="gold-gradient">$500M+</span>
                </div>
                <div className="body-sm mt-0.5">Annual, USD</div>
              </div>
              <hr className="rule" />
              <div>
                <div className="mono-label mb-1">Sectors</div>
                <div className="font-serif text-3xl text-[var(--parchment)]">11</div>
                <div className="body-sm mt-0.5">Commodity verticals</div>
              </div>
              <hr className="rule" />
              <div>
                <div className="mono-label mb-1">Offices</div>
                <div className="font-serif text-3xl text-[var(--parchment)]">3</div>
                <div className="body-sm mt-0.5">Dubai · Cape Town · Istanbul</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
