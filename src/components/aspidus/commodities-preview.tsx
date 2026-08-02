"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { commodities } from "./data";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

export default function CommoditiesPreview() {
  const { t } = useI18n();

  return (
    <section id="commodities" className="relative py-20 sm:py-28 bg-[var(--muted)] border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="eyebrow mb-4">{t("commodities.tag")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label mb-4">08 / Portfolio</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section max-w-2xl">
                {t("commodities.title")}{" "}
                <span className="gold-gradient italic">{t("commodities.titleAccent")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead mt-5 max-w-xl">{t("commodities.desc")}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Reveal delay={0.15}>
              <RLink to="/commodities" className="btn-outline group">
                {t("commodities.viewAll")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </RLink>
            </Reveal>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {commodities.map((c) => (
            <motion.div key={c.id} variants={staggerItem}>
              <RLink
                to={`/commodities/${c.id}`}
                className="group relative block aspect-[4/5] overflow-hidden border border-[var(--rule)] hover:border-[var(--brass)]/45 transition-colors duration-500"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/30 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                  <div className="w-9 h-9 border border-[var(--rule-strong)] bg-[var(--background)]/70 backdrop-blur flex items-center justify-center text-[var(--brass)] group-hover:bg-[var(--brass)] group-hover:text-[var(--primary-foreground)] transition-all duration-400">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/0 group-hover:text-white transition-all duration-500 -rotate-45 group-hover:rotate-0" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="mono-label opacity-60 mb-1">{String(commodities.indexOf(c) + 1).padStart(2, "0")}</div>
                  <h3 className="font-serif text-base sm:text-lg text-[var(--parchment)]">{c.name}</h3>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100">
                    <p className="text-[0.7rem] text-[var(--parchment-dim)] leading-relaxed mt-2 pt-2 border-t border-[var(--rule-strong)] line-clamp-3">
                      {c.items.slice(0, 6).join(" · ")}
                    </p>
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
