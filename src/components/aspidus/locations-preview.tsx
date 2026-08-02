"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useI18n } from "./i18n";
import { offices } from "./data";
import { RLink } from "./router";
import { Reveal } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

export default function LocationsPreview() {
  const { t } = useI18n();

  return (
    <section id="locations" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
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
      </div>

      {/* Full-bleed alternating split-screen editorial — no cards */}
      <div className="space-y-2">
        {offices.map((office, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-0 group"
            >
              {/* Image side — full-bleed, no rounded card */}
              <RLink to={`/office/${office.id}`} className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden lg:h-[460px] block ${reversed ? "lg:order-2" : ""}`}>
                <img
                  src={office.image}
                  alt={office.city}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,29,36,0.35)] via-transparent to-transparent" />
                {/* Floating flag badge */}
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[0.6rem] font-bold tracking-widest" style={{ color: "var(--brass-deep)" }}>
                  {office.flag} · {office.legalName.split(" ").slice(-1)[0]}
                </div>
              </RLink>

              {/* Text side — editorial, no card */}
              <div className={`flex flex-col justify-center p-8 sm:p-12 lg:p-16 ${reversed ? "lg:order-1" : ""}`} style={{ background: i === 1 ? "var(--parchment-warm)" : "transparent" }}>
                <span className="font-serif italic text-5xl mb-4" style={{ color: "var(--brass)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] leading-tight mb-3">{office.city}</h3>
                <div className="mono-label mb-4" style={{ color: "var(--brass)" }}>{office.legalName}</div>
                <p className="body-sm max-w-md mb-6">{t(office.descKey)}</p>

                <div className="space-y-3 text-sm text-[var(--ink-soft)]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brass)" }} />
                    <span className="leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 flex-shrink-0" style={{ color: "var(--brass)" }} />
                    <span>{office.hours} · {office.hoursTz}</span>
                  </div>
                </div>

                <div className="mt-7">
                  <RLink to={`/office/${office.id}`} className="btn-outline group">
                    {t("locations.learnMore")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </RLink>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
