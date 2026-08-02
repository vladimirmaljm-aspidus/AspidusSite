"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Sparkles } from "lucide-react";
import { useI18n } from "./i18n";
import { offices } from "./data";
import { RLink } from "./router";
import { Reveal, staggerContainer, staggerItem } from "./motion-helpers";

export default function LocationsPreview() {
  const { t } = useI18n();

  return (
    <section id="locations" className="relative py-24 sm:py-32">
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/12 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <Reveal>
            <div className="section-tag mb-5">{t("locations.tag")}</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--parchment)] leading-tight tracking-tight">
              {t("locations.title")}{" "}
              <span className="gold-gradient italic">{t("locations.titleAccent")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-5 h-px w-16 bg-[var(--primary)]" />
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-6 text-base sm:text-lg text-[var(--parchment-dim)] leading-relaxed">
              {t("locations.desc")}
            </p>
          </Reveal>
        </div>

        {/* Location cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6"
        >
          {offices.map((office) => (
            <motion.article
              key={office.id}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-sm border border-[rgba(201,165,92,0.14)] bg-[#0b1626] hover:border-[var(--primary)]/45 transition-colors duration-500 flex flex-col"
            >
              <RLink to={`/office/${office.id}`} className="block flex flex-col flex-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-[#0b1626]/20 to-transparent" />
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-sm bg-[#060d18]/80 backdrop-blur-sm border border-[rgba(201,165,92,0.3)] text-[0.65rem] font-bold tracking-widest text-[var(--primary)]">
                    {office.flag}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--primary)] font-semibold">
                    {office.legalName}
                  </div>
                  <h3 className="mt-1.5 font-serif text-2xl text-[var(--parchment)]">{office.city}</h3>

                  <p className="mt-3 text-sm text-[var(--parchment-dim)] leading-relaxed">
                    {t(office.descKey)}
                  </p>

                  <div className="mt-4 flex items-start gap-2 text-xs text-[var(--parchment-dim)]">
                    <Sparkles className="h-3.5 w-3.5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                    <span>{office.specialties}</span>
                  </div>

                  <div className="mt-5 pt-5 border-t border-[rgba(201,165,92,0.12)] space-y-2.5 text-xs text-[var(--parchment-dim)]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="h-4 w-4 text-[var(--primary)] flex-shrink-0" />
                      <span>
                        {office.hours} ({office.hoursTz})
                      </span>
                    </div>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] group-hover:gap-3 transition-all duration-300">
                    {t("locations.learnMore")}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </RLink>
            </motion.article>
          ))}
        </motion.div>

        {/* Partnership CTA */}
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <RLink to="/contact" className="btn-primary group">
              {t("locations.partnership")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </RLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
