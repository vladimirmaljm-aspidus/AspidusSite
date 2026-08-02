"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { commodities } from "./data";
import { products } from "./products-data";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { AnimatedFlame, AnimatedDiamond, AnimatedSprout, AnimatedGlobe, AnimatedShield, AnimatedTrend, AnimatedLeaf } from "./animated-icons";

// Map sector to animated icon
const SECTOR_ICON: Record<string, React.ComponentType<{ size?: number; delay?: number; className?: string; stroke?: string }>> = {
  energy: AnimatedFlame,
  metals: AnimatedDiamond,
  agriculture: AnimatedSprout,
  meat: AnimatedShield,
  raw_materials: AnimatedGlobe,
  construction: AnimatedShield,
  textiles: AnimatedSprout,
  fertilizers: AnimatedTrend,
  nuts_dried_fruits: AnimatedSprout,
  cocoa_coffee: AnimatedLeaf,
  spices: AnimatedLeaf,
};

export default function CommoditiesPreview() {
  const { t } = useI18n();

  return (
    <section id="commodities" className="relative py-16 sm:py-24 bg-[var(--parchment-warm)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">{t("commodities.tag")}</div>
            <h2 className="h-section max-w-xl">
              {t("commodities.title")}{" "}
              <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("commodities.titleAccent")}</span>
            </h2>
          </div>
          <RLink to="/commodities" className="btn-ghost-sm group">
            {t("commodities.viewAll")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </RLink>
        </div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(0,1fr)]"
        >
          {/* Feature card — first sector */}
          {commodities.slice(0, 1).map((c) => {
            const Icon = SECTOR_ICON[c.id] || AnimatedGlobe;
            return (
              <motion.div key={c.id} variants={staggerItem} className="col-span-2 row-span-2">
                <RLink
                  to={`/commodities/${c.id}`}
                  className="group relative block h-full min-h-[300px] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.92)] via-[rgba(26,29,36,0.3)] to-transparent" />
                  <div className="absolute top-5 left-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", color: "#fff" }}>
                      <Icon size={28} stroke="#fff" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mono-label mb-2" style={{ color: "var(--brass-soft)" }}>01 · {products.filter(p => p.sector === c.id).length} products</div>
                    <h3 className="font-serif text-3xl mb-2">{c.name}</h3>
                    <p className="text-sm opacity-80 line-clamp-2 mb-4">{c.items.slice(0, 5).join(" · ")}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brass-soft)" }}>
                      {t("commodities.explore")}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </RLink>
              </motion.div>
            );
          })}

          {/* Remaining sectors — rounded cards */}
          {commodities.slice(1).map((c, i) => {
            const Icon = SECTOR_ICON[c.id] || AnimatedGlobe;
            return (
              <motion.div key={c.id} variants={staggerItem}>
                <RLink
                  to={`/commodities/${c.id}`}
                  className="group relative block h-full min-h-[150px] overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.9)] via-[rgba(26,29,36,0.2)] to-transparent" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-400" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", color: "#fff" }}>
                    <Icon size={20} stroke="#fff" delay={i * 0.05} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="mono-label text-[0.6rem]" style={{ color: "rgba(255,255,255,0.6)" }}>{String(i + 2).padStart(2, "0")}</div>
                    <h3 className="font-serif text-base leading-tight">{c.name}</h3>
                    <div className="text-[0.65rem] mt-0.5 opacity-70">{products.filter(p => p.sector === c.id).length} items</div>
                  </div>
                </RLink>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
