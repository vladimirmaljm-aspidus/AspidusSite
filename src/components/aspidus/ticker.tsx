"use client";

import React from "react";
import { useI18n } from "./i18n";

type Tick = { sym: string; val: string; chg: string; dir: "up" | "dn" };

const TICKS: Tick[] = [
  { sym: "BRENT", val: "82.40", chg: "+0.8%", dir: "up" },
  { sym: "WTI", val: "78.15", chg: "+0.6%", dir: "up" },
  { sym: "GOLD", val: "2,418.30", chg: "+1.2%", dir: "up" },
  { sym: "SILVER", val: "31.85", chg: "-0.3%", dir: "dn" },
  { sym: "COPPER", val: "9,840", chg: "+0.4%", dir: "up" },
  { sym: "ALUMINIUM", val: "2,510", chg: "-0.2%", dir: "dn" },
  { sym: "WHEAT", val: "612.25", chg: "+0.9%", dir: "up" },
  { sym: "CORN", val: "458.50", chg: "-0.5%", dir: "dn" },
  { sym: "SOYBEANS", val: "1,184.00", chg: "+0.3%", dir: "up" },
  { sym: "SUGAR", val: "19.84", chg: "+1.1%", dir: "up" },
  { sym: "COFFEE", val: "238.60", chg: "+2.4%", dir: "up" },
  { sym: "COCOA", val: "7,420", chg: "-0.8%", dir: "dn" },
  { sym: "COTTON", val: "72.30", chg: "+0.5%", dir: "up" },
  { sym: "UREA", val: "318.00", chg: "-0.4%", dir: "dn" },
  { sym: "NICKEL", val: "17,840", chg: "+0.7%", dir: "up" },
  { sym: "ZINC", val: "2,798", chg: "+0.2%", dir: "up" },
];

export default function Ticker() {
  const { t } = useI18n();
  const items = [...TICKS, ...TICKS];

  return (
    <div className="ticker-wrap">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center">
        <div className="flex-shrink-0 pr-4 border-r border-[var(--rule)] py-2.5 hidden sm:block">
          <span className="mono-label">{t("ticker.label")}</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-track">
            {items.map((tick, i) => (
              <span key={i} className="ticker-item">
                <span className="sym">{tick.sym}</span>
                <span className="val">{tick.val}</span>
                <span className={tick.dir === "up" ? "chg-up" : "chg-dn"}>
                  {tick.dir === "up" ? "▲" : "▼"} {tick.chg}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
