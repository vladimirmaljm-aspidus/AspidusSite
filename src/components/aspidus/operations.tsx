"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "./i18n";
import { offices } from "./data";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

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

const ROUTES: [number, number][] = [[0, 1], [0, 2], [1, 2]];

export default function Operations() {
  const { t } = useI18n();
  return (
    <section id="operations" className="relative py-16 sm:py-24 bg-[var(--parchment-warm)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
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

        <Reveal delay={0.05}>
          <div className="relative bg-white rounded-2xl shadow-sm border border-[var(--rule)] aspect-[2.6/1] overflow-hidden">
            <WorldMap />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {ROUTES.map(([a, b], i) => {
                const p1 = project(HUBS[a].lat, HUBS[a].lng);
                const p2 = project(HUBS[b].lat, HUBS[b].lng);
                const mx = (p1.x + p2.x) / 2;
                const my = (p1.y + p2.y) / 2 - 6;
                return (
                  <motion.path
                    key={i}
                    d={`M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`}
                    fill="none"
                    stroke="var(--brass)"
                    strokeWidth="0.18"
                    strokeDasharray="0.5 0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                );
              })}
            </svg>

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
                  <span className="absolute inset-0 -m-2 rounded-full border border-[var(--brass)] animate-ping opacity-40" />
                  <span className="relative block w-2.5 h-2.5 rounded-full bg-[var(--brass)] ring-4 ring-white shadow-md" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap text-center pointer-events-none">
                    <div className="text-xs font-bold text-[var(--ink)]">{hub.label}</div>
                    <div className="text-[0.55rem] text-[var(--muted-foreground)] tracking-wider uppercase">{hub.sub}</div>
                  </div>
                </motion.div>
              );
            })}

            <div className="absolute top-3 left-3 mono-label opacity-50 text-[0.6rem]">EQUIRECTANGULAR · INDICATIVE</div>
            <div className="absolute bottom-3 right-3 mono-label opacity-50 text-[0.6rem]">{t("operations.routes")}: 3 · {t("operations.hubs")}: 3</div>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-4 grid sm:grid-cols-3 gap-3"
        >
          {offices.map((office) => (
            <motion.div
              key={office.id}
              variants={staggerItem}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex items-center justify-between gap-3 border border-[var(--rule)]"
            >
              <div className="flex-1 min-w-0">
                <div className="mono-label text-[0.6rem]">{office.flag}</div>
                <h3 className="font-serif text-base text-[var(--ink)] mt-0.5">{office.city}</h3>
                <div className="text-[0.7rem] text-[var(--muted-foreground)] mt-1 line-clamp-1">{office.specialties}</div>
              </div>
              <RLink to={`/office/${office.id}`} className="btn-ghost-sm">
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
  return (
    <div className="absolute inset-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
          <pattern id="dotgrid-light" width="1.2" height="1.2" patternUnits="userSpaceOnUse">
            <circle cx="0.6" cy="0.6" r="0.2" fill="var(--ink)" opacity="0.4" />
          </pattern>
          <mask id="continents-light">
            <rect width="100" height="50" fill="black" />
            <ellipse cx="50" cy="18" rx="8" ry="6" fill="white" />
            <ellipse cx="51" cy="32" rx="9" ry="11" fill="white" />
            <ellipse cx="68" cy="18" rx="16" ry="9" fill="white" />
            <ellipse cx="58" cy="24" rx="6" ry="5" fill="white" />
            <ellipse cx="22" cy="17" rx="12" ry="8" fill="white" />
            <ellipse cx="30" cy="35" rx="6" ry="9" fill="white" />
            <ellipse cx="82" cy="36" rx="7" ry="5" fill="white" />
          </mask>
        </defs>
        <rect width="100" height="50" fill="url(#dotgrid-light)" mask="url(#continents-light)" />
        <line x1="0" y1="25" x2="100" y2="25" stroke="var(--brass)" strokeWidth="0.05" opacity="0.4" />
        <line x1="50" y1="0" x2="50" y2="50" stroke="var(--brass)" strokeWidth="0.05" opacity="0.3" />
      </svg>
    </div>
  );
}
