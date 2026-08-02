"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useI18n } from "./i18n";
import { offices } from "./data";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

export default function LocationsPreview() {
  const { t } = useI18n();

  return (
    <section id="locations" className="relative py-20 sm:py-28 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="eyebrow mb-4">{t("locations.tag")}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mono-label mb-4">07 / Offices</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section max-w-2xl">
                {t("locations.title")}{" "}
                <span className="gold-gradient italic">{t("locations.titleAccent")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lead mt-5 max-w-xl">{t("locations.desc")}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Reveal delay={0.15}>
              <RLink to="/contact" className="btn-outline group">
                {t("locations.partnership")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </RLink>
            </Reveal>
          </div>
        </div>

        {/* Location cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]"
        >
          {offices.map((office) => (
            <motion.article
              key={office.id}
              variants={staggerItem}
              className="group bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-400 flex flex-col"
            >
              <RLink to={`/office/${office.id}`} className="flex flex-col flex-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-2 py-0.5 bg-[var(--background)]/80 backdrop-blur border border-[var(--rule-strong)] text-[0.6rem] font-bold tracking-widest text-[var(--brass)]">
                    {office.flag}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mono-label text-[var(--brass)] mb-1">{office.legalName}</div>
                  <h3 className="h-card text-xl mb-3">{office.city}</h3>
                  <p className="body-sm line-clamp-2 mb-4">{t(office.descKey)}</p>

                  <div className="mt-auto pt-4 border-t border-[var(--rule)] space-y-2 text-xs text-[var(--parchment-dim)]">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[var(--brass)] mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed line-clamp-2">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-[var(--brass)] flex-shrink-0" />
                      <span>{office.hours} ({office.hoursTz})</span>
                    </div>
                  </div>

                  <span className="btn-ghost-sm mt-4">
                    {t("locations.learnMore")}
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </RLink>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
