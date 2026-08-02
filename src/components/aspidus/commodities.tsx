"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { commodities } from "./data";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

export default function Commodities() {
  const { t } = useI18n();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="commodities" className="relative py-24 sm:py-32 bg-[#0a1626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <Reveal>
            <div className="section-tag mb-5">{t("commodities.tag")}</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
              {t("commodities.title")}{" "}
              <span className="gold-gradient italic">{t("commodities.titleAccent")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-5 h-px w-16 bg-[var(--primary)]" />
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              {t("commodities.desc")}
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {commodities.map((c) => (
            <motion.div
              key={c.id}
              variants={staggerItem}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer border border-[rgba(201,169,97,0.12)] hover:border-[var(--primary)]/50 transition-colors duration-500"
            >
              {/* Image */}
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111d] via-[#08111d]/40 to-transparent" />
              <div className="absolute inset-0 bg-[#08111d]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top icon + arrow */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                <div className="w-10 h-10 rounded-sm border border-[rgba(201,169,97,0.4)] bg-[#08111d]/60 backdrop-blur-sm flex items-center justify-center text-[var(--primary)] transition-all duration-500 group-hover:bg-[var(--primary)] group-hover:text-[#0a1420]">
                  <c.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/0 group-hover:text-white transition-all duration-500 group-hover:rotate-0 -rotate-45" />
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-lg sm:text-xl text-white">{c.name}</h3>

                {/* items reveal on hover */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                  <div className="mt-3 pt-3 border-t border-[rgba(201,169,97,0.25)]">
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed line-clamp-4">
                      {c.items.slice(0, 6).join(" · ")}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)]">
                      {t("commodities.explore")}
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            variants={staggerItem}
            onClick={scrollToContact}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer border border-dashed border-[rgba(201,169,97,0.3)] hover:border-[var(--primary)] flex flex-col items-center justify-center text-center p-6 transition-colors duration-500 bg-[rgba(201,169,97,0.02)]"
          >
            <div className="w-12 h-12 rounded-full border border-[var(--primary)] flex items-center justify-center text-[var(--primary)] mb-4 transition-all duration-500 group-hover:bg-[var(--primary)] group-hover:text-[#0a1420]">
              <ArrowRight className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg text-white">{t("commodities.viewAll")}</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
