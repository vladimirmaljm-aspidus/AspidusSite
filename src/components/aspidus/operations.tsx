"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "./i18n";
import { offices } from "./data";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

// Approx lat/lng -> x/y percentages on an equirectangular world map
function project(lat: number, lng: number) {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

const HUBS = [
  { id: "dubai", lat: 25.2, lng: 55.27, label: "Dubai", sub: "HQ · DMCC" },
  { id: "capetown", lat: -33.92, lng: 18.42, label: "Cape Town", sub: "Pty Ltd" },
  { id: "istanbul", lat: 41.01, lng: 28.97, label: "Istanbul", sub: "Türkiye" },
];

const ROUTES: [number, number][] = [
  [0, 1], // Dubai - Cape Town
  [0, 2], // Dubai - Istanbul
  [1, 2], // Cape Town - Istanbul
];

export default function Operations() {
  const { t } = useI18n();

  return (
    <section id="operations" className="relative py-20 sm:py-28 bg-[var(--muted)] border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="eyebrow mb-4">{t("operations.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label">02 / Network</div>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="h-section max-w-3xl">
                {t("operations.title")} <span className="gold-gradient italic">{t("operations.titleAccent")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead mt-5 max-w-2xl">{t("operations.desc")}</p>
            </Reveal>
          </div>
        </div>

        {/* Map */}
        <Reveal delay={0.1}>
          <div className="relative bg-[var(--card)] border border-[var(--rule)] aspect-[16/9] sm:aspect-[2.4/1] overflow-hidden">
            {/* World map SVG (simplified dotted continents) */}
            <WorldMap />

            {/* Trade routes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {ROUTES.map(([a, b], i) => {
                const p1 = project(HUBS[a].lat, HUBS[a].lng);
                const p2 = project(HUBS[b].lat, HUBS[b].lng);
                // curved arc
                const mx = (p1.x + p2.x) / 2;
                const my = (p1.y + p2.y) / 2 - 8;
                return (
                  <motion.path
                    key={i}
                    d={`M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`}
                    fill="none"
                    stroke="var(--brass)"
                    strokeWidth="0.15"
                    strokeDasharray="0.4 0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                );
              })}
            </svg>

            {/* Hub markers */}
            {HUBS.map((hub, i) => {
              const p = project(hub.lat, hub.lng);
              return (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  {/* pulse ring */}
                  <span className="absolute inset-0 -m-2 rounded-full border border-[var(--brass)] animate-ping opacity-30" />
                  <span className="relative block w-2.5 h-2.5 rounded-full bg-[var(--brass)] ring-2 ring-[var(--brass)]/30" />
                  {/* label */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap text-center pointer-events-none">
                    <div className="text-xs font-semibold text-[var(--parchment)]">{hub.label}</div>
                    <div className="text-[0.6rem] text-[var(--parchment-dim)] tracking-wider uppercase">{hub.sub}</div>
                  </div>
                </motion.div>
              );
            })}

            {/* Corner labels */}
            <div className="absolute top-4 left-4 mono-label opacity-60">EQUIRECTANGULAR · INDICATIVE</div>
            <div className="absolute bottom-4 right-4 mono-label opacity-60">{t("operations.routes")}: 3 · {t("operations.hubs")}: 3</div>
          </div>
        </Reveal>

        {/* Hub cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {offices.map((office) => (
            <motion.div
              key={office.id}
              variants={staggerItem}
              className="group bg-[var(--card)] border border-[var(--rule)] hover:border-[var(--brass)]/40 transition-colors duration-400 p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="mono-label">{office.flag}</div>
                  <h3 className="font-serif text-lg text-[var(--parchment)] mt-1">{office.city}</h3>
                </div>
                <span className="pill">{office.legalName.split(" ").slice(-1)[0]}</span>
              </div>
              <p className="body-sm line-clamp-2">{t(office.descKey)}</p>
              <RLink
                to={`/office/${office.id}`}
                className="btn-ghost-sm mt-3"
              >
                {t("locations.learnMore")}
                <ArrowRight className="h-3 w-3" />
              </RLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WorldMap() {
  // Simplified dotted-grid world map using a pattern of dots
  // We render a faint dot grid that suggests continents
  return (
    <div className="absolute inset-0 opacity-25">
      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
          <pattern id="dotgrid" width="1.2" height="1.2" patternUnits="userSpaceOnUse">
            <circle cx="0.6" cy="0.6" r="0.18" fill="var(--parchment-dim)" />
          </pattern>
          <mask id="continents">
            {/* Very rough continent shapes as ellipses to mask the dot grid */}
            <rect width="100" height="50" fill="black" />
            {/* Europe */}
            <ellipse cx="50" cy="18" rx="8" ry="6" fill="white" />
            {/* Africa */}
            <ellipse cx="51" cy="32" rx="9" ry="11" fill="white" />
            {/* Asia */}
            <ellipse cx="68" cy="18" rx="16" ry="9" fill="white" />
            {/* Middle East */}
            <ellipse cx="58" cy="24" rx="6" ry="5" fill="white" />
            {/* N America */}
            <ellipse cx="22" cy="17" rx="12" ry="8" fill="white" />
            {/* S America */}
            <ellipse cx="30" cy="35" rx="6" ry="9" fill="white" />
            {/* Australia */}
            <ellipse cx="82" cy="36" rx="7" ry="5" fill="white" />
          </mask>
        </defs>
        <rect width="100" height="50" fill="url(#dotgrid)" mask="url(#continents)" />
        {/* faint grid lines */}
        <line x1="0" y1="25" x2="100" y2="25" stroke="var(--brass)" strokeWidth="0.05" opacity="0.3" />
        <line x1="50" y1="0" x2="50" y2="50" stroke="var(--brass)" strokeWidth="0.05" opacity="0.2" />
      </svg>
    </div>
  );
}
