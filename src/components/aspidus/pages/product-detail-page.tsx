"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, FileText, Package, ShieldCheck } from "lucide-react";
import { useI18n } from "../i18n";
import { products } from "../products-data";
import { commodities } from "../data";
import { RLink, useRouter } from "../router";
import { useScrollReveals } from "../use-scroll-reveals";

const TAB_META: Record<string, { icon: typeof FileText; key: string }> = {
  specification: { icon: FileText, key: "product.specification" },
  origin: { icon: MapPin, key: "product.origin" },
  packaging_logistics: { icon: Package, key: "product.packaging" },
  certificates: { icon: ShieldCheck, key: "product.certificates" },
};

export default function ProductDetailPage({ slug }: { slug: string }) {
  const { t } = useI18n();
  const { navigate } = useRouter();
  const product = products.find((p) => p.slug === slug);

  const availableTabs = product?.tabs.filter((tab) => tab.content.length > 0) || [];
  const [activeTab, setActiveTab] = useState(0);

  useScrollReveals([slug, activeTab]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 page-enter">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h1 className="font-serif text-4xl text-[var(--parchment)] mb-4">{t("product.notFound")}</h1>
          <p className="text-[var(--parchment-dim)] mb-8">{t("product.notFoundDesc")}</p>
          <RLink to="/commodities" className="btn-primary group">
            {t("product.browseCatalog")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </RLink>
        </div>
      </div>
    );
  }

  const sector = commodities.find((c) => c.id === product.sector);
  const related = products
    .filter((p) => p.sector === product.sector && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="pt-28 sm:pt-32 page-enter">
      {/* Breadcrumb */}
      <section className="border-b border-[rgba(201,165,92,0.12)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4">
          <div className="breadcrumb">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>{t("nav.home")}</a>
            <span className="sep">/</span>
            <a href="#/commodities" onClick={(e) => { e.preventDefault(); navigate("/commodities"); }}>{t("nav.commodities")}</a>
            {sector && (
              <>
                <span className="sep">/</span>
                <a href={`#/commodities/${sector.id}`} onClick={(e) => { e.preventDefault(); navigate(`/commodities/${sector.id}`); }}>{sector.name}</a>
              </>
            )}
            <span className="sep">/</span>
            <span className="text-[var(--primary)]">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product hero */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Image */}
            <div className="lg:col-span-6" data-reveal>
              <div className="relative aspect-[4/5] sm:aspect-[5/5] overflow-hidden rounded-sm border border-[rgba(201,165,92,0.16)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/40 via-transparent to-transparent" />
                {sector && (
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#060d18]/85 backdrop-blur-sm border border-[rgba(201,165,92,0.3)] text-xs font-semibold tracking-wider uppercase text-[var(--primary)]">
                    <sector.icon className="h-4 w-4" />
                    {sector.name}
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-6 flex flex-col" data-reveal data-reveal-delay="0.15">
              <div className="text-xs tracking-[0.25em] uppercase text-[var(--primary)] font-semibold mb-3">
                {sector?.name} · {t("product.sector")}
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--parchment)] leading-[1.05] tracking-tight">
                {product.name}
              </h1>
              <div className="mt-5 h-px w-16 bg-[var(--primary)]" />
              <p className="mt-6 text-lg text-[var(--parchment-dim)] leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Quick meta */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-sm border border-[rgba(201,165,92,0.12)] bg-[#0b1626]">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--parchment-dim)] mb-1">
                    {t("product.sector")}
                  </div>
                  <div className="font-serif text-lg text-[var(--parchment)]">{sector?.name}</div>
                </div>
                <div className="p-4 rounded-sm border border-[rgba(201,165,92,0.12)] bg-[#0b1626]">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--parchment-dim)] mb-1">
                    {t("product.overview")}
                  </div>
                  <div className="font-serif text-lg text-[var(--parchment)]">{availableTabs.length} sections</div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <RLink to="/contact" className="btn-primary group w-full sm:w-auto justify-center">
                  {t("product.inquire")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </RLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec tabs */}
      <section className="py-12 sm:py-16 bg-[#0a1626] border-y border-[rgba(201,165,92,0.12)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Tab nav (sticky sidebar) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="section-tag mb-5">{t("product.overview")}</div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--parchment)] mb-6">
                  {t("product.specification")}
                </h2>
                <nav className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
                  {availableTabs.map((tab, i) => {
                    const meta = TAB_META[tab.titleKey];
                    const Icon = meta?.icon || FileText;
                    return (
                      <button
                        key={tab.titleKey}
                        onClick={() => setActiveTab(i)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-sm border text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${
                          activeTab === i
                            ? "border-[var(--primary)] bg-[rgba(201,165,92,0.08)] text-[var(--primary)]"
                            : "border-[rgba(201,165,92,0.12)] text-[var(--parchment-dim)] hover:text-[var(--parchment)] hover:border-[rgba(201,165,92,0.3)]"
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm font-medium">{meta ? t(meta.key) : tab.titleKey}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Tab content */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {availableTabs[activeTab] ? (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        {(() => {
                          const meta = TAB_META[availableTabs[activeTab].titleKey];
                          const Icon = meta?.icon || FileText;
                          return <Icon className="h-6 w-6 text-[var(--primary)]" />;
                        })()}
                        <h3 className="font-serif text-2xl text-[var(--parchment)]">
                          {(() => {
                            const meta = TAB_META[availableTabs[activeTab].titleKey];
                            return meta ? t(meta.key) : availableTabs[activeTab].titleKey;
                          })()}
                        </h3>
                      </div>
                      <table className="spec-table">
                        <tbody>
                          {availableTabs[activeTab].content.map((row, i) => (
                            <tr key={i}>
                              <td>{row.item}</td>
                              <td>{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  ) : (
                    <p className="text-[var(--parchment-dim)]">{t("product.noData")}</p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[var(--parchment)]">
                {t("product.related")}
              </h2>
              <RLink to={`/commodities/${product.sector}`} className="link-underline text-sm text-[var(--primary)]">
                {t("common.viewAll")}
              </RLink>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {related.map((p) => (
                <RLink
                  key={p.slug}
                  to={`/product/${p.slug}`}
                  className="group block overflow-hidden rounded-sm border border-[rgba(201,165,92,0.12)] hover:border-[var(--primary)]/45 bg-[#0b1626] transition-colors duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-base text-[var(--parchment)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                      {p.name}
                    </h3>
                  </div>
                </RLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <button
            onClick={() => navigate(`/commodities/${product.sector}`)}
            className="inline-flex items-center gap-2 text-sm text-[var(--parchment-dim)] hover:text-[var(--primary)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("common.back")} — {sector?.name}
          </button>
        </div>
      </div>
    </div>
  );
}
