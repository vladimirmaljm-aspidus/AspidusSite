"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useI18n } from "./i18n";
import { easeOutExpo } from "./motion-helpers";
import { PulseDot, AnimatedDivider } from "./animated-icons";

export default function Hero() {
  const { t } = useI18n();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} id="home" className="relative min-h-[92svh] flex items-end overflow-hidden mesh-warm grain">
      {/* Parallax background image with soft mask */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0">
        <img src="/aspidus/hero2.webp" alt="" className="w-full h-full object-cover" />
        {/* Light, premium overlay — keeps image visible but readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f2ea] via-[#f5f2ea]/80 to-[#f5f2ea]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f2ea] via-transparent to-[#f5f2ea]/40" />
      </motion.div>

      {/* Decorative floating orbs (blend) */}
      <motion.div
        className="absolute top-1/4 right-10 w-72 h-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(154,123,63,0.4), transparent 70%)" }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(45,74,62,0.5), transparent 70%)" }}
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full pb-16 sm:pb-20 pt-32">
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
                <PulseDot size={6} color="#9a7b3f" />
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
                  className="block italic"
                  style={{ color: "var(--brass-deep)" }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, ease: easeOutExpo, delay: 0.48 }}
                >
                  {t("hero.title2")}
                </motion.span>
              </span>
            </h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-6">
              <AnimatedDivider />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.75 }}
              className="lead mt-5 max-w-xl"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.9 }}
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

          {/* Side meta — glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 1 }}
            className="lg:col-span-4"
          >
            <div className="card-glass rounded-2xl p-6 space-y-5">
              <div>
                <div className="mono-label mb-1">Trade Volume</div>
                <div className="font-serif text-3xl" style={{ color: "var(--brass-deep)" }}>$500M+</div>
                <div className="body-sm mt-0.5">Annual, USD</div>
              </div>
              <hr className="rule" />
              <div>
                <div className="mono-label mb-1">Sectors</div>
                <div className="font-serif text-3xl text-[var(--ink)]">11</div>
                <div className="body-sm mt-0.5">Commodity verticals</div>
              </div>
              <hr className="rule" />
              <div>
                <div className="mono-label mb-1">Offices</div>
                <div className="font-serif text-3xl text-[var(--ink)]">3</div>
                <div className="body-sm mt-0.5">Dubai · Cape Town · Istanbul</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
