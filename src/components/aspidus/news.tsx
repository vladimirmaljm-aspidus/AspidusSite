"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

type Insight = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
};

const INSIGHTS: Insight[] = [
  {
    category: "Market Commentary",
    date: "Q4 2025",
    title: "Energy markets brace for winter demand amid supply recalibration",
    excerpt: "Brent and WTI spreads narrow as OPEC+ output policy meets seasonal heating demand. LNG flows to Europe remain elevated versus five-year averages.",
    image: "/aspidus/energy.webp",
    readTime: "6 min read",
  },
  {
    category: "Soft Commodities",
    date: "Nov 2025",
    title: "West African cocoa supply: a structural deficit cycle",
    excerpt: "Weather-driven yield compression in Côte d'Ivoire and Ghana continues to pressure global cocoa balances. We examine origin differentials and forward curves.",
    image: "/aspidus/cacao_coffee.webp",
    readTime: "8 min read",
  },
  {
    category: "Company Update",
    date: "Oct 2025",
    title: "Aspidus expands African origination footprint",
    excerpt: "Cape Town office strengthens direct producer relationships across the SADC region, with new allocated capacity in sugar, nuts and essential minerals.",
    image: "/aspidus/agrikultura.webp",
    readTime: "4 min read",
  },
];

export default function News() {
  const { t } = useI18n();

  return (
    <section id="news" className="relative py-20 sm:py-28 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow mb-4">{t("news.eyebrow")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label mb-4">05 / Insights</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section max-w-2xl">
                {t("news.title")} <span className="gold-gradient italic">{t("news.titleAccent")}</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Reveal delay={0.15}>
              <RLink to="/contact" className="btn-outline group">
                {t("news.all")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </RLink>
            </Reveal>
          </div>
        </div>

        {/* Featured + list layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid lg:grid-cols-12 gap-px bg-[var(--rule)] border border-[var(--rule)]"
        >
          {/* Featured (first) */}
          <motion.article variants={staggerItem} className="lg:col-span-7 bg-[var(--background)] group">
            <RLink to="/contact" className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={INSIGHTS[0].image}
                  alt={INSIGHTS[0].title}
                  className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="pill">{INSIGHTS[0].category}</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mono-label mb-3">
                  <span>{INSIGHTS[0].date}</span>
                  <span className="opacity-40">·</span>
                  <span>{INSIGHTS[0].readTime}</span>
                </div>
                <h3 className="h-card text-xl sm:text-2xl mb-3 group-hover:text-[var(--brass)] transition-colors">
                  {INSIGHTS[0].title}
                </h3>
                <p className="body-sm max-w-xl">{INSIGHTS[0].excerpt}</p>
                <span className="btn-ghost-sm mt-4">
                  {t("news.readMore")}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </RLink>
          </motion.article>

          {/* Side list (2 + 3) */}
          <div className="lg:col-span-5 flex flex-col">
            {INSIGHTS.slice(1).map((insight) => (
              <motion.article
                key={insight.title}
                variants={staggerItem}
                className="bg-[var(--background)] group flex-1 border-b border-[var(--rule)] last:border-b-0"
              >
                <RLink to="/contact" className="block p-6 sm:p-7 hover:bg-[var(--card)] transition-colors">
                  <div className="flex items-center gap-3 mono-label mb-3">
                    <span className="pill">{insight.category}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <h3 className="h-card flex-1 group-hover:text-[var(--brass)] transition-colors leading-snug">
                      {insight.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-[var(--parchment-dim)] group-hover:text-[var(--brass)] transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="body-sm mt-3 line-clamp-2">{insight.excerpt}</p>
                  <div className="flex items-center gap-3 mono-label mt-4 opacity-60">
                    <span>{insight.date}</span>
                    <span>·</span>
                    <span>{insight.readTime}</span>
                  </div>
                </RLink>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
