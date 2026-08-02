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

  if (loading) {
    return (
      <div className="ticker-wrap">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-center py-3">
          <span className="mono-label" style={{ color: "rgba(245,242,234,0.6)" }}>Loading live market data…</span>
        </div>
      </div>
    );
  }

  if (!data || data.status !== "ok" || data.prices.length === 0) {
    return (
      <div className="ticker-wrap">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between py-3">
          <span className="mono-label" style={{ color: "var(--brass-soft)" }}>{t("ticker.label")}</span>
          <span className="mono-label" style={{ color: "rgba(245,242,234,0.5)" }}>Live feed temporarily unavailable</span>
        </div>
      </div>
    );
  }

  const prices = data.prices;
  const items = [...prices, ...prices];

  return (
    <div className="ticker-wrap">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-4 py-2">
          <div className="flex-shrink-0 flex items-center gap-2">
            <PulseDot size={6} color="#6dbd8e" />
            <span className="mono-label" style={{ color: "var(--brass-soft)" }}>{t("ticker.label")}</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track">
              {items.map((p, i) => {
                const up = (p.change ?? 0) >= 0;
                return (
                  <span key={i} className="ticker-item">
                    <span className="sym">{p.symbol}</span>
                    <span className="val">{fmtPrice(p.price)}</span>
                    <span style={{ color: "rgba(245,242,234,0.5)", fontSize: "0.7rem" }}>{p.currency}</span>
                    <span className={up ? "chg-up" : "chg-dn"}>
                      {up ? "▲" : "▼"} {p.changePct !== null ? `${Math.abs(p.changePct)}%` : "—"}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex-shrink-0 hidden sm:flex items-center gap-2 pl-3" style={{ borderLeft: "1px solid rgba(245,242,234,0.12)" }}>
            <span className="mono-label" style={{ color: "rgba(245,242,234,0.5)" }}>Updated</span>
            <span className="mono-label" style={{ color: "var(--parchment)" }}>{timeAgo(data.fetchedAt)}</span>
          </div>
        </div>
        <div className="pb-1.5" style={{ color: "rgba(245,242,234,0.4)", fontSize: "0.65rem" }}>
          {data.source}. Indicative reference values for information only — not a solicitation or offer.
        </div>
      </div>
    </div>
  );
}
