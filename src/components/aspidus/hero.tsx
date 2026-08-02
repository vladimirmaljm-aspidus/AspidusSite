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
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} id="home" className="relative min-h-[94svh] flex items-center overflow-hidden mesh-warm grain pt-24">
      {/* Layered organic gradient blobs (no dark photo) */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[10%] right-[8%] w-[36rem] h-[36rem] rounded-full opacity-50 blur-3xl pointer-events-none"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(196,163,104,0.55), transparent 65%)" }} />
      </motion.div>
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-[5%] left-[5%] w-[42rem] h-[42rem] rounded-full opacity-40 blur-3xl pointer-events-none"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(45,74,62,0.45), transparent 65%)" }} />
      </motion.div>
      <motion.div
        className="absolute top-[40%] left-[45%] w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(154,123,63,0.5), transparent 65%)" }} />
      </motion.div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Main headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
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
                  transition={{ duration: 1, ease: easeOutExpo, delay: 0.35 }}
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
                  transition={{ duration: 1, ease: easeOutExpo, delay: 0.5 }}
                >
                  {t("hero.title2")}
                </motion.span>
              </span>
            </h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="mt-7">
              <AnimatedDivider width={64} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.8 }}
              className="lead mt-5 max-w-xl"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.95 }}
              className="mt-9 flex flex-wrap items-center gap-3"
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

          {/* Floating data panel — editorial, no card box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 1 }}
            className="lg:col-span-5"
          >
            <div className="space-y-7 lg:pl-8 lg:border-l lg:border-[var(--rule-strong)]">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-5xl sm:text-6xl leading-none" style={{ color: "var(--brass-deep)" }}>$500M+</span>
                </div>
                <div className="mono-label mt-2">{t("stats.s1")}</div>
              </div>
              <hr className="rule" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-serif text-4xl leading-none text-[var(--ink)]">11</div>
                  <div className="mono-label mt-2 text-[0.6rem]">{t("stats.s2")}</div>
                </div>
                <div>
                  <div className="font-serif text-4xl leading-none text-[var(--ink)]">3</div>
                  <div className="mono-label mt-2 text-[0.6rem]">Offices · Dubai · Cape Town · Istanbul</div>
                </div>
              </div>
              <hr className="rule" />
              <div>
                <div className="mono-label mb-2">Trade since</div>
                <div className="font-serif text-3xl text-[var(--ink)]">2007</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
