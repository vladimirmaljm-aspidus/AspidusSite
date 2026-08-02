"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useI18n } from "./i18n";
import { offices } from "./data";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

export default function LocationsPreview() {
  const { t } = useI18n();

  return (
    <section id="locations" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">{t("locations.tag")}</div>
            <h2 className="h-section max-w-xl">
              {t("locations.title")}{" "}
              <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("locations.titleAccent")}</span>
            </h2>
            <AnimatedDivider className="mt-4" />
          </div>
          <RLink to="/contact" className="btn-ghost-sm group">
            {t("locations.partnership")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </RLink>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {offices.map((office) => (
            <motion.article
              key={office.id}
              variants={staggerItem}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-[var(--rule)] flex flex-col"
            >
              <RLink to={`/office/${office.id}`} className="flex flex-col flex-1">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.3)] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[0.6rem] font-bold tracking-widest" style={{ color: "var(--brass-deep)" }}>
                    {office.flag}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="mono-label mb-1" style={{ color: "var(--brass)" }}>{office.legalName}</div>
                  <h3 className="font-serif text-xl text-[var(--ink)] mb-2">{office.city}</h3>
                  <p className="body-sm line-clamp-2 mb-4">{t(office.descKey)}</p>

                  <div className="mt-auto pt-3 border-t border-[var(--rule)] space-y-1.5 text-xs text-[var(--muted-foreground)]">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" style={{ color: "var(--brass)" }} />
                      <span className="leading-relaxed line-clamp-2">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 flex-shrink-0" style={{ color: "var(--brass)" }} />
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
