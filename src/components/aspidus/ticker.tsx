"use client";

import React, { useEffect, useState } from "react";
import { useI18n } from "./i18n";

type Price = {
  symbol: string;
  name: string;
  unit: string;
  sector: string;
  price: number | null;
  prevClose: number | null;
  change: number | null;
  changePct: number | null;
  currency: string;
  exchange: string | null;
  marketTime: number | null;
};

type ApiResponse = {
  status: string;
  source: string;
  fetchedAt: number;
  count: number;
  prices: Price[];
};

function fmtPrice(p: number | null): string {
  if (p === null) return "—";
  if (p >= 1000) return p.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (p >= 10) return p.toFixed(2);
  return p.toFixed(3);
}

function timeAgo(unix: number | null): string {
  if (!unix) return "";
  const diff = Math.floor(Date.now() / 1000) - unix;
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function Ticker() {
  const { t } = useI18n();
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch("/api/market-prices", { cache: "no-store" });
        if (!res.ok) throw new Error("bad response");
        const json = await res.json();
        if (mounted) {
          setData(json);
          setLoading(false);
        }
      } catch {
        if (mounted) {
          setData(null);
          setLoading(false);
        }
      }
    };
    fetchData();
    // refresh every 90s
    const id = setInterval(fetchData, 90000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="ticker-wrap">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-center py-3">
          <span className="mono-label opacity-50">Loading live market data…</span>
        </div>
      </div>
    );
  }

  // Unavailable — honest fallback, never fabricate
  if (!data || data.status !== "ok" || data.prices.length === 0) {
    return (
      <div className="ticker-wrap">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between py-3">
          <span className="mono-label text-[var(--brass)]">{t("ticker.label")}</span>
          <span className="mono-label opacity-50">Live feed temporarily unavailable</span>
        </div>
      </div>
    );
  }

  const prices = data.prices;
  const items = [...prices, ...prices]; // duplicate for seamless loop

  return (
    <div className="ticker-wrap">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-4 py-2">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a9d75] animate-pulse" />
            <span className="mono-label text-[var(--brass)]">{t("ticker.label")}</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track">
              {items.map((p, i) => {
                const up = (p.change ?? 0) >= 0;
                return (
                  <span key={i} className="ticker-item">
                    <span className="sym">{p.symbol}</span>
                    <span className="val">{fmtPrice(p.price)}</span>
                    <span className="text-[var(--parchment-dim)] text-[0.7rem]">{p.currency}</span>
                    <span className={up ? "chg-up" : "chg-dn"}>
                      {up ? "▲" : "▼"} {p.changePct !== null ? `${Math.abs(p.changePct)}%` : "—"}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex-shrink-0 hidden sm:flex items-center gap-2 pl-3 border-l border-[var(--rule)]">
            <span className="mono-label opacity-50">Updated</span>
            <span className="mono-label text-[var(--parchment)]">{timeAgo(data.fetchedAt)}</span>
          </div>
        </div>
        <div className="pb-1.5 text-[0.65rem] text-[var(--parchment-dim)] opacity-60">
          {data.source}. Indicative reference values for information only — not a solicitation or offer.
        </div>
      </div>
    </div>
  );
}
