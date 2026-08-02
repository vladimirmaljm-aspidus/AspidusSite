"use client";

import React from "react";
import { useI18n } from "./i18n";
import { marqueeItems } from "./data";

export default function Marquee() {
  const { t } = useI18n();
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative border-y border-[rgba(201,169,97,0.14)] bg-[#0a1626] py-6 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0a1626] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0a1626] to-transparent pointer-events-none" />

      <div className="flex items-center gap-3 px-5 sm:px-8 mb-3 max-w-7xl mx-auto">
        <span className="text-xs tracking-[0.25em] uppercase text-[var(--primary)] font-semibold">
          {t("marquee.label")}
        </span>
        <span className="h-px flex-1 bg-[rgba(201,169,97,0.2)]" />
      </div>

      <div className="marquee-track gap-10">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-serif text-lg sm:text-xl text-slate-400 whitespace-nowrap">
              {item}
            </span>
            <span className="text-[var(--primary)] text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
