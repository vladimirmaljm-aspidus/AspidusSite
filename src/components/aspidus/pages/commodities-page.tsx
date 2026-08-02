"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useI18n } from "../i18n";
import { commodities } from "../data";
import { products } from "../products-data";
import { RLink, useRouter } from "../router";
import { useScrollReveals } from "../use-scroll-reveals";

export default function CommoditiesPage({ initialSector }: { initialSector?: string }) {
  const { t } = useI18n();
  const { navigate } = useRouter();
  const [activeSector, setActiveSector] = useState<string>(initialSector || "all");
  const [query, setQuery] = useState("");

  useScrollReveals([activeSector, query]);

  const filtered = useMemo(() => {
    let list = products;
    if (activeSector !== "all") {
      list = list.filter((p) => p.sector === activeSector);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeSector, query]);

  const sectorName = (id: string) =>
    id === "all" ? t("catalog.allSectors") : commodities.find((c) => c.id === id)?.name || id;

  return (
    <div className="pt-28 sm:pt-32 page-enter">
      {/* Page hero */}
      <section className="relative pb-12 sm:pb-16 border-b border-[rgba(26,29,36,0.09)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="breadcrumb mb-6">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
              {t("nav.home")}
            </a>
            <span className="sep">/</span>
            <span className="text-[var(--primary)]">{t("nav.commodities")}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="section-tag mb-5" data-reveal>{t("catalog.tag")}</div>
              <h1
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-tight"
                data-reveal
                data-reveal-delay="0.1"
              >
                {t("catalog.title")}{" "}
                <span className="gold-gradient italic">{t("catalog.titleAccent")}</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-reveal data-reveal-delay="0.2">
              <p className="text-[var(--muted-foreground)] leading-relaxed">{t("catalog.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + search */}
      <section className="sticky top-[68px] z-30 bg-[var(--parchment)]/90 backdrop-blur-xl border-b border-[rgba(26,29,36,0.09)] py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <button
                className={`chip whitespace-nowrap ${activeSector === "all" ? "active" : ""}`}
                onClick={() => { setActiveSector("all"); navigate("/commodities"); }}
              >
                {t("catalog.allSectors")}
                <span className="opacity-60">{products.length}</span>
              </button>
              {commodities.map((c) => (
                <button
                  key={c.id}
                  className={`chip whitespace-nowrap ${activeSector === c.id ? "active" : ""}`}
                  onClick={() => { setActiveSector(c.id); navigate(`/commodities/${c.id}`); }}
                >
                  <c.icon className="h-3.5 w-3.5" />
                  {c.name}
                  <span className="opacity-60">
                    {products.filter((p) => p.sector === c.id).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative lg:w-72 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("catalog.searchPlaceholder")}
                className="w-full pl-10 pr-9 py-2.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(26,29,36,0.12)] rounded-sm text-sm text-[var(--ink)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--ink)]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-[var(--muted-foreground)]">
              <span className="text-[var(--primary)] font-semibold">{filtered.length}</span>{" "}
              {t("catalog.results")}
              {activeSector !== "all" && (
                <span className="ml-2 text-[var(--muted-foreground)]">— {sectorName(activeSector)}</span>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-[var(--muted-foreground)] text-lg">{t("catalog.noResults")}</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => {
                  const sector = commodities.find((c) => c.id === p.sector);
                  return (
                    <motion.div
                      key={p.slug}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                    >
                      <RLink
                        to={`/product/${p.slug}`}
                        className="group block h-full overflow-hidden rounded-sm border border-[rgba(26,29,36,0.09)] hover:border-[var(--primary)]/45 bg-white transition-colors duration-500"
                      >
                        <div className="relative aspect-[5/4] overflow-hidden">
                          <img
                            src={p.image}
                            alt={p.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                          {sector && (
                            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[var(--parchment)]/80 backdrop-blur-sm border border-[rgba(26,29,36,0.18)] text-[0.62rem] font-semibold tracking-wider uppercase text-[var(--primary)]">
                              <sector.icon className="h-3 w-3" />
                              {sector.name}
                            </div>
                          )}
                          <ArrowUpRight className="absolute top-3 right-3 h-5 w-5 text-[var(--ink)]/0 group-hover:text-[var(--ink)] transition-all duration-500 -rotate-45 group-hover:rotate-0" />
                        </div>

                        <div className="p-5">
                          <h3 className="font-serif text-lg text-[var(--ink)] leading-snug group-hover:text-[var(--brass)] transition-colors">
                            {p.name}
                          </h3>
                          <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
                            {p.shortDescription}
                          </p>
                          <div className="mt-4 pt-4 border-t border-[rgba(201,165,92,0.1)] flex items-center justify-between">
                            <span className="text-xs tracking-wider uppercase text-[var(--muted-foreground)]">
                              {p.tabs.length} {t("product.overview")}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] group-hover:gap-2 transition-all">
                              {t("catalog.viewDetail")}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      </RLink>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
