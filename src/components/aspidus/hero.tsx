"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useI18n } from "./i18n";
import { easeOutExpo } from "./motion-helpers";

export default function Hero() {
  const { t } = useI18n();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden grain-overlay"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/aspidus/hero2.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08111d] via-[#08111d]/85 to-[#08111d]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08111d] via-transparent to-[#08111d]/60" />
      </motion.div>

      {/* Decorative gold grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[var(--primary)]" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-[var(--primary)]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full pt-24"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(201,169,97,0.3)] bg-[rgba(201,169,97,0.06)] backdrop-blur-sm mb-8"
          >
            <span className="pulse-dot" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--primary)]">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.2rem] text-white tracking-tight">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: easeOutExpo, delay: 0.4 }}
              >
                {t("hero.title1")}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block gold-gradient italic"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: easeOutExpo, delay: 0.55 }}
              >
                {t("hero.title2")}
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.8 }}
            className="mt-7 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            {t("hero.desc")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.95 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button onClick={() => scrollTo("#commodities")} className="btn-primary group">
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => scrollTo("#contact")} className="btn-ghost group">
              {t("hero.cta2")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Est. badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex items-center gap-4 text-slate-500"
          >
            <div className="h-px w-12 bg-[var(--primary)]/50" />
            <span className="text-xs tracking-[0.3em] uppercase">{t("hero.est")}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400 hover:text-[var(--primary)] transition-colors group"
        aria-label={t("hero.scroll")}
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">{t("hero.scroll")}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
