"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

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
    excerpt: "Weather-driven yield compression in Côte d'Ivoire and Ghana continues to pressure global cocoa balances.",
    image: "/aspidus/cacao_coffee.webp",
    readTime: "8 min read",
  },
  {
    category: "Company Update",
    date: "Oct 2025",
    title: "Aspidus expands African origination footprint",
    excerpt: "Cape Town office strengthens direct producer relationships across the SADC region.",
    image: "/aspidus/agrikultura.webp",
    readTime: "4 min read",
  },
];

export default function News() {
  const { t } = useI18n();
  return (
    <section id="news" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">{t("news.eyebrow")}</div>
            <h2 className="h-section max-w-xl">
              {t("news.title")}{" "}
              <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("news.titleAccent")}</span>
            </h2>
            <AnimatedDivider className="mt-4" />
          </div>
          <RLink to="/contact" className="btn-ghost-sm group">
            {t("news.all")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </RLink>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid lg:grid-cols-12 gap-5"
        >
          {/* Featured */}
          <motion.article variants={staggerItem} className="lg:col-span-7">
            <RLink to="/contact" className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-[var(--rule)] h-full">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={INSIGHTS[0].image} alt={INSIGHTS[0].title} className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span className="pill" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>{INSIGHTS[0].category}</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mono-label mb-2 text-[0.6rem]">
                  <span>{INSIGHTS[0].date}</span>
                  <span className="opacity-40">·</span>
                  <span>{INSIGHTS[0].readTime}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 group-hover:text-[var(--brass-deep)] transition-colors leading-snug">{INSIGHTS[0].title}</h3>
                <p className="body-sm text-[0.82rem] max-w-xl">{INSIGHTS[0].excerpt}</p>
                <span className="btn-ghost-sm mt-3 text-[0.7rem]">
                  {t("news.readMore")}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </RLink>
          </motion.article>

          {/* Side list */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {INSIGHTS.slice(1).map((insight) => (
              <motion.article key={insight.title} variants={staggerItem} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-[var(--rule)] p-5">
                <RLink to="/contact" className="block group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="pill text-[0.55rem]">{insight.category}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <h3 className="font-serif text-base flex-1 group-hover:text-[var(--brass-deep)] transition-colors leading-snug">{insight.title}</h3>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--brass)] transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="body-sm text-[0.78rem] mt-2 line-clamp-2">{insight.excerpt}</p>
                  <div className="flex items-center gap-2 mono-label mt-3 opacity-60 text-[0.55rem]">
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
