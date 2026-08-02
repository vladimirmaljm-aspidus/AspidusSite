"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { commodities } from "./data";
import { products } from "./products-data";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

export default function CommoditiesPreview() {
  const { t } = useI18n();

  return (
    <section id="commodities" className="relative py-16 sm:py-24 bg-[var(--muted)] border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Compact header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">{t("commodities.tag")}</div>
            <h2 className="h-section max-w-xl">
              {t("commodities.title")}{" "}
              <span className="gold-gradient italic">{t("commodities.titleAccent")}</span>
            </h2>
          </div>
          <RLink to="/commodities" className="btn-ghost-sm group">
            {t("commodities.viewAll")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </RLink>
        </div>

        {/* Bento grid: first card large (feature), rest smaller — denser, less uniform */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(0,1fr)]"
        >
          {/* Feature card (first sector) — spans 2 cols + 2 rows */}
          {commodities.slice(0, 1).map((c) => (
            <motion.div key={c.id} variants={staggerItem} className="col-span-2 row-span-2">
              <RLink
                to={`/commodities/${c.id}`}
                className="group relative block h-full min-h-[280px] overflow-hidden border border-[var(--rule)] hover:border-[var(--brass)]/45 transition-colors duration-500"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 border border-[var(--rule-strong)] bg-[var(--background)]/70 backdrop-blur flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] transition-all">
                    <c.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mono-label opacity-60 mb-1">01 · {products.filter(p => p.sector === c.id).length} products</div>
                  <h3 className="font-serif text-2xl text-[var(--parchment)] mb-2">{c.name}</h3>
                  <p className="body-sm line-clamp-2 mb-3">{c.items.slice(0, 5).join(" · ")}</p>
                  <span className="btn-ghost-sm">
                    {t("commodities.explore")}
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </RLink>
            </motion.div>
          ))}

          {/* Remaining sectors — compact cards */}
          {commodities.slice(1).map((c, i) => (
            <motion.div key={c.id} variants={staggerItem}>
              <RLink
                to={`/commodities/${c.id}`}
                className="group relative block h-full min-h-[140px] overflow-hidden border border-[var(--rule)] hover:border-[var(--brass)]/45 transition-colors duration-500"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent" />
                <div className="absolute top-2.5 right-2.5 w-7 h-7 border border-[var(--rule-strong)] bg-[var(--background)]/70 backdrop-blur flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] transition-all">
                  <c.icon className="h-3.5 w-3.5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="mono-label opacity-50 text-[0.6rem]">{String(i + 2).padStart(2, "0")}</div>
                  <h3 className="font-serif text-sm text-[var(--parchment)] leading-tight">{c.name}</h3>
                  <div className="text-[0.65rem] text-[var(--parchment-dim)] mt-0.5">
                    {products.filter(p => p.sector === c.id).length} items
                  </div>
                </div>
              </RLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
