"use client";

import React, { useEffect, useState } from "react";
import { useI18n } from "./i18n";
import { PulseDot } from "./animated-icons";

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
    const id = setInterval(fetchData, 90000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return (
    <div className="bg-[var(--parchment-warm)] border-y border-[var(--rule)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-4 py-2.5">
          <div className="flex-shrink-0 flex items-center gap-2 pr-3 border-r border-[var(--rule-strong)]">
            <PulseDot size={6} color="#9a7b3f" />
            <span className="mono-label" style={{ color: "var(--brass)" }}>{t("ticker.label")}</span>
          </div>
          <div className="flex-1 overflow-hidden">
            {loading ? (
              <span className="mono-label opacity-50">Loading live market data…</span>
            ) : (!data || data.status !== "ok" || data.prices.length === 0) ? (
              <span className="mono-label opacity-50">Live feed temporarily unavailable</span>
            ) : (
              <div className="ticker-track">
                {[...data.prices, ...data.prices].map((p, i) => {
                  const up = (p.change ?? 0) >= 0;
                  return (
                    <span key={i} className="inline-flex items-baseline gap-1.5 text-sm whitespace-nowrap">
                      <span className="font-semibold text-[var(--ink)] tracking-wide">{p.symbol}</span>
                      <span className="font-variant-numeric tabular-nums text-[var(--ink)]">{fmtPrice(p.price)}</span>
                      <span className="text-[0.7rem] text-[var(--muted-foreground)]">{p.currency}</span>
                      <span className={up ? "text-[#3d8b5f]" : "text-[#b04838]"} style={{ fontSize: "0.72rem" }}>
                        {up ? "▲" : "▼"} {p.changePct !== null ? `${Math.abs(p.changePct)}%` : "—"}
                      </span>
                      <span className="text-[var(--rule-strong)] mx-1">·</span>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
          {data && data.status === "ok" && (
            <div className="flex-shrink-0 hidden sm:flex items-center gap-2 pl-3 border-l border-[var(--rule-strong)]">
              <span className="mono-label opacity-50">Updated</span>
              <span className="mono-label text-[var(--ink)]">{timeAgo(data.fetchedAt)}</span>
            </div>
          )}
        </div>
        <div className="pb-1.5 text-[0.65rem] text-[var(--muted-foreground)] opacity-70">
          {data ? data.source : "Yahoo Finance (delayed up to 15 min)"}. Indicative reference values for information only — not a solicitation or offer.
        </div>
      </div>
    </div>
  );
}
