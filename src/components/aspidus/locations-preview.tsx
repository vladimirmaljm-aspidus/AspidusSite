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
    <section id="locations" className="relative py-16 sm:py-24 border-t border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Compact header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">{t("locations.tag")}</div>
            <h2 className="h-section max-w-xl">
              {t("locations.title")}{" "}
              <span className="gold-gradient italic">{t("locations.titleAccent")}</span>
            </h2>
          </div>
          <RLink to="/contact" className="btn-ghost-sm group">
            {t("locations.partnership")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </RLink>
        </div>

        {/* Horizontal compact office cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-4"
        >
          {offices.map((office) => (
            <motion.article
              key={office.id}
              variants={staggerItem}
              className="group bg-[var(--card)] border border-[var(--rule)] hover:border-[var(--brass)]/40 transition-colors duration-400 flex flex-col"
            >
              <RLink to={`/office/${office.id}`} className="flex flex-col flex-1">
                {/* Smaller banner image */}
                <div className="relative aspect-[16/7] overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-[var(--background)]/80 backdrop-blur border border-[var(--rule-strong)] text-[0.6rem] font-bold tracking-widest text-[var(--brass)]">
                    {office.flag}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="mono-label text-[var(--brass)] mb-1">{office.legalName}</div>
                  <h3 className="font-serif text-xl text-[var(--parchment)] mb-2">{office.city}</h3>
                  <p className="body-sm line-clamp-2 mb-3">{t(office.descKey)}</p>

                  <div className="mt-auto pt-3 border-t border-[var(--rule)] space-y-1.5 text-xs text-[var(--parchment-dim)]">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3 w-3 text-[var(--brass)] mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed line-clamp-2">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-[var(--brass)] flex-shrink-0" />
                      <span>{office.hoursTz}</span>
                    </div>
                  </div>
                </div>
              </RLink>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
