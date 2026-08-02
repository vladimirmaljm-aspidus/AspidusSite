"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { commodities } from "./data";
import { products } from "./products-data";
import { RLink } from "./router";
import { Reveal } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

export default function CommoditiesPreview() {
  const { t } = useI18n();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section id="commodities" className="relative py-16 sm:py-24 bg-[var(--parchment-warm)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="eyebrow mb-3">{t("commodities.tag")}</div>
            <h2 className="h-section max-w-xl">
              {t("commodities.title")}{" "}
              <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("commodities.titleAccent")}</span>
            </h2>
            <AnimatedDivider className="mt-4" />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-[var(--rule-strong)] flex items-center justify-center text-[var(--ink-soft)] hover:border-[var(--brass)] hover:text-[var(--brass)] transition-colors" aria-label="Scroll left">
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-[var(--rule-strong)] flex items-center justify-center text-[var(--ink-soft)] hover:border-[var(--brass)] hover:text-[var(--brass)] transition-colors" aria-label="Scroll right">
              <ArrowRight className="h-4 w-4" />
            </button>
            <RLink to="/commodities" className="btn-ghost-sm group ml-2">
              {t("commodities.viewAll")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </RLink>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery — full-bleed, no cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto no-scrollbar pb-6 px-5 sm:px-8 snap-x snap-mandatory"
        style={{ scrollPaddingLeft: "max(1.25rem, calc((100vw - 80rem) / 2 + 1.25rem))" }}
      >
        {/* Spacer to align with max-w-7xl */}
        <div className="flex-shrink-0 hidden lg:block" style={{ width: "max(0px, calc((100vw - 80rem) / 2 - 1.25rem))" }} />

        {commodities.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 snap-start"
          >
            <RLink
              to={`/commodities/${c.id}`}
              className="group block w-[300px] sm:w-[340px]"
            >
              {/* Image — full-bleed within the slide, rounded but minimal chrome */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.85)] via-[rgba(26,29,36,0.1)] to-transparent" />
                {/* Index + icon top */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", color: "#fff" }}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <span className="font-serif italic text-2xl text-white/60">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {/* Title bottom on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-serif text-2xl leading-tight">{c.name}</h3>
                  <p className="text-xs opacity-80 mt-1 line-clamp-1">{c.items.slice(0, 4).join(" · ")}</p>
                </div>
                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </div>
              {/* Below image — text only, no card */}
              <div className="flex items-center justify-between">
                <span className="mono-label text-[0.6rem]">{products.filter((p) => p.sector === c.id).length} products</span>
                <span className="text-xs font-semibold" style={{ color: "var(--brass)" }}>{t("commodities.explore")} →</span>
              </div>
            </RLink>
          </motion.div>
        ))}

        {/* End CTA slide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-shrink-0 snap-start w-[300px] sm:w-[340px] flex items-center"
        >
          <RLink to="/commodities" className="group block w-full">
            <div className="aspect-[4/5] rounded-2xl border border-dashed border-[var(--rule-strong)] flex flex-col items-center justify-center text-center p-8 hover:border-[var(--brass)] transition-colors">
              <div className="w-12 h-12 rounded-full border border-[var(--brass)] flex items-center justify-center text-[var(--brass)] mb-4 group-hover:bg-[var(--brass)] group-hover:text-white transition-all">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg text-[var(--ink)]">{t("commodities.viewAll")}</h3>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">92 products · 11 sectors</p>
            </div>
          </RLink>
        </motion.div>
      </div>
    </section>
  );
}
