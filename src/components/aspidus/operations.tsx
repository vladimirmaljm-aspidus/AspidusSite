"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "./i18n";
import { offices } from "./data";
import { RLink } from "./router";
import { Reveal } from "./motion-helpers";
import { AnimatedDivider, PulseDot } from "./animated-icons";

// Trade flow labels between offices (commodities that move on each route)
const FLOWS: { from: string; to: string; label: string }[] = [
  { from: "dubai", to: "istanbul", label: "Metals · Construction" },
  { from: "dubai", to: "capetown", label: "Energy · Sugar" },
  { from: "istanbul", to: "capetown", label: "Textiles · Minerals" },
];

export default function Operations() {
  const { t } = useI18n();
  const dubai = offices.find((o) => o.id === "dubai")!;
  const capetown = offices.find((o) => o.id === "capetown")!;
  const istanbul = offices.find((o) => o.id === "istanbul")!;

  return (
    <section id="operations" className="relative py-16 sm:py-24 mesh-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="eyebrow mb-3">{t("operations.eyebrow")}</div>
            <h2 className="h-section max-w-xl">
              {t("operations.title")}{" "}
              <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("operations.titleAccent")}</span>
            </h2>
            <AnimatedDivider className="mt-4" />
          </div>
          <p className="body-sm max-w-sm">{t("operations.desc")}</p>
        </div>

        {/* Network diagram — 3 office nodes + animated trade routes */}
        <Reveal delay={0.05}>
          <div className="relative bg-white rounded-3xl shadow-sm border border-[var(--rule)] p-6 sm:p-10 lg:p-14 overflow-hidden">
            {/* Subtle mesh inside */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
              background: "radial-gradient(at 50% 30%, rgba(154,123,63,0.06), transparent 60%), radial-gradient(at 20% 80%, rgba(45,74,62,0.04), transparent 60%)"
            }} />

            {/* SVG routes layer — positioned absolutely over the nodes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--brass)" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="var(--brass)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--brass)" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Dubai (top-center ~50%,15%) <-> Istanbul (left ~18%,45%) */}
              <motion.path
                d="M 500 75 Q 320 180 180 225"
                fill="none"
                stroke="url(#route-grad)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Dubai <-> Cape Town (bottom-right ~82%,75%) */}
              <motion.path
                d="M 500 75 Q 680 280 820 375"
                fill="none"
                stroke="url(#route-grad)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Istanbul <-> Cape Town */}
              <motion.path
                d="M 180 225 Q 500 420 820 375"
                fill="none"
                stroke="url(#route-grad)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Animated traveling pulses on each route */}
              <motion.circle r="4" fill="var(--brass)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ offsetPath: "path('M 500 75 Q 320 180 180 225')" }} />
              <motion.circle r="4" fill="var(--brass)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }} style={{ offsetPath: "path('M 500 75 Q 680 280 820 375')" }} />
              <motion.circle r="4" fill="var(--forest)" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }} style={{ offsetPath: "path('M 180 225 Q 500 420 820 375')" }} />
            </svg>

            {/* Nodes — positioned with percentages to match SVG coords */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 min-h-[420px] items-center">
              {/* Istanbul — left column */}
              <OfficeNode office={istanbul} position="left" flowLabels={["Metals · Construction"]} delay={0.5} />

              {/* Dubai (HQ) — center, featured */}
              <OfficeNode office={dubai} position="center" featured flowLabels={["Energy · Sugar", "Metals · Construction"]} delay={0.3} />

              {/* Cape Town — right column */}
              <OfficeNode office={capetown} position="right" flowLabels={["Textiles · Minerals"]} delay={0.7} />
            </div>

            {/* Flow labels along routes (visible on lg+) */}
            <div className="hidden lg:block relative mt-4">
              <div className="flex justify-center gap-8 text-center">
                {FLOWS.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.15 }}
                    className="flex items-center gap-2"
                  >
                    <span className="mono-label text-[0.55rem]">{f.from}</span>
                    <span className="h-px w-6 bg-[var(--brass)] opacity-40" />
                    <span className="mono-label text-[0.6rem]" style={{ color: "var(--brass)" }}>{f.label}</span>
                    <span className="h-px w-6 bg-[var(--brass)] opacity-40" />
                    <span className="mono-label text-[0.55rem]">{f.to}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OfficeNode({
  office,
  position,
  featured = false,
  flowLabels,
  delay,
}: {
  office: typeof offices[number];
  position: "left" | "center" | "right";
  featured?: boolean;
  flowLabels: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${featured ? "lg:scale-110" : ""}`}
    >
      {/* Pulse ring for HQ */}
      {featured && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
          <PulseDot size={8} color="var(--brass)" />
        </span>
      )}

      <div className={`text-center ${featured ? "lg:py-4" : ""}`}>
        {/* Flag + badge */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full bg-white border border-[var(--rule-strong)] text-[0.6rem] font-bold tracking-widest" style={{ color: "var(--brass-deep)" }}>
            {office.flag}
          </span>
          {featured && (
            <span className="pill-forest text-[0.55rem]" style={{ padding: "0.2rem 0.5rem" }}>HQ</span>
          )}
        </div>

        {/* City name */}
        <h3 className={`font-serif text-[var(--ink)] mb-1 ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {office.city}
        </h3>
        <div className="mono-label text-[0.6rem] mb-3" style={{ color: "var(--brass)" }}>{office.legalName}</div>

        {/* Specialties */}
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed max-w-[200px] mx-auto mb-4">
          {office.specialties}
        </p>

        {/* Timezone */}
        <div className="inline-flex items-center gap-1.5 text-[0.65rem] text-[var(--muted-foreground)]">
          <span className="w-1 h-1 rounded-full bg-[var(--brass)]" />
          {office.hoursTz}
        </div>

        {/* Link */}
        <div className="mt-4">
          <RLink to={`/office/${office.id}`} className="btn-ghost-sm">
            Learn more
            <ArrowRight className="h-3 w-3" />
          </RLink>
        </div>
      </div>
    </motion.div>
  );
}
