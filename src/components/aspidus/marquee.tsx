"use client";

import React from "react";
import { useI18n } from "./i18n";
import { marqueeItems } from "./data";

export default function Marquee() {
  const { t } = useI18n();
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative bg-[var(--parchment)] border-y border-[var(--rule)] py-5 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--parchment)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--parchment)] to-transparent pointer-events-none" />
      <div className="flex items-center gap-3 px-5 sm:px-8 mb-2 max-w-7xl mx-auto">
        <span className="mono-label" style={{ color: "var(--brass)" }}>{t("marquee.label")}</span>
        <span className="h-px flex-1 bg-[var(--rule)]" />
      </div>
      <div className="marquee-track gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <span className="font-serif text-base text-[var(--ink-soft)] whitespace-nowrap">{item}</span>
            <span className="text-[var(--brass)] text-xs opacity-50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
