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
    excerpt: "Brent and WTI spreads narrow as OPEC+ output policy meets seasonal heating demand. LNG flows to Europe remain elevated versus five-year averages, while Asian buyers rebuild strategic inventories.",
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
  const [featured, ...rest] = INSIGHTS;

  return (
    <section id="news" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
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

        {/* Asymmetric editorial layout — featured image left, reading list right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured — large editorial with image */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7"
          >
            <RLink to="/contact" className="group block">
              {/* Image with soft rounded corner + gradient overlay */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md mb-6">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.5)] via-transparent to-transparent" />
                {/* Category badge floating on image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[0.6rem] font-bold tracking-widest uppercase" style={{ color: "var(--brass-deep)" }}>
                    {featured.category}
                  </span>
                </div>
                {/* Date floating bottom-left */}
                <div className="absolute bottom-4 left-4 text-white text-xs flex items-center gap-2">
                  <span>{featured.date}</span>
                  <span className="opacity-50">·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
              {/* Title — large serif, no card */}
              <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] leading-tight group-hover:text-[var(--brass-deep)] transition-colors mb-3">
                {featured.title}
              </h3>
              <p className="body-sm max-w-xl mb-4">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brass)" }}>
                {t("news.readMore")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </RLink>
          </motion.div>

          {/* Reading list — pure typography, no images, no cards */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--rule)] lg:pl-12">
            <div className="mono-label mb-6 opacity-60">Latest</div>
            <div className="space-y-0">
              {rest.map((insight, i) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <RLink to="/contact" className="group block py-6 border-b border-[var(--rule)] last:border-b-0">
                    {/* Metadata row */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="mono-label text-[0.55rem]" style={{ color: "var(--brass)" }}>{insight.category}</span>
                      <span className="h-px w-4 bg-[var(--rule-strong)]" />
                      <span className="mono-label text-[0.55rem] opacity-50">{insight.date}</span>
                    </div>
                    {/* Title */}
                    <div className="flex items-start gap-2">
                      <h4 className="font-serif text-lg text-[var(--ink)] flex-1 leading-snug group-hover:text-[var(--brass-deep)] transition-colors">
                        {insight.title}
                      </h4>
                      <ArrowUpRight className="h-4 w-4 text-[var(--muted-foreground)] group-hover:text-[var(--brass)] transition-colors flex-shrink-0 mt-1" />
                    </div>
                    {/* Excerpt — subtle */}
                    <p className="text-xs text-[var(--muted-foreground)] mt-2 line-clamp-2 leading-relaxed">{insight.excerpt}</p>
                  </RLink>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
