import { NextResponse } from "next/server";

/**
 * GET /api/market-prices
 *
 * Fetches REAL, live commodity prices from Yahoo Finance's public chart API.
 * No API key required. Prices are delayed up to ~15 min (exchange rules).
 *
 * Returns an array of instruments with: symbol, name, price, prevClose,
 * change (abs + pct), currency, exchange, fetchedAt (unix s).
 *
 * If Yahoo is unreachable or a symbol fails, that instrument is omitted
 * (we never fabricate prices). If all fail, returns { prices: [], status: "unavailable" }.
 */

type Instrument = {
  yahoo: string;
  symbol: string;
  name: string;
  unit: string;
  sector: string;
};

const INSTRUMENTS: Instrument[] = [
  // Energy
  { yahoo: "CL=F", symbol: "WTI", name: "Crude Oil (WTI)", unit: "USD/bbl", sector: "Energy" },
  { yahoo: "BZ=F", symbol: "BRENT", name: "Crude Oil (Brent)", unit: "USD/bbl", sector: "Energy" },
  { yahoo: "NG=F", symbol: "NATGAS", name: "Natural Gas", unit: "USD/MMBtu", sector: "Energy" },
  // Metals
  { yahoo: "GC=F", symbol: "GOLD", name: "Gold", unit: "USD/oz", sector: "Metals" },
  { yahoo: "SI=F", symbol: "SILVER", name: "Silver", unit: "USD/oz", sector: "Metals" },
  { yahoo: "HG=F", symbol: "COPPER", name: "Copper", unit: "USD/lb", sector: "Metals" },
  // Agriculture
  { yahoo: "ZW=F", symbol: "WHEAT", name: "Wheat", unit: "USD/bu", sector: "Agriculture" },
  { yahoo: "KC=F", symbol: "COFFEE", name: "Coffee", unit: "USD/lb", sector: "Agriculture" },
];

type PriceItem = {
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

export const revalidate = 60;
export const dynamic = "force-dynamic";

export async function GET() {
  const fetchedAt = Math.floor(Date.now() / 1000);
  const results: PriceItem[] = [];

  // Sequential fetch with small delay — Yahoo rate-limits parallel requests
  for (const inst of INSTRUMENTS) {
    const item: PriceItem = {
      symbol: inst.symbol,
      name: inst.name,
      unit: inst.unit,
      sector: inst.sector,
      price: null,
      prevClose: null,
      change: null,
      changePct: null,
      currency: "USD",
      exchange: null,
      marketTime: null,
    };
    try {
      const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
        inst.yahoo
      )}?interval=1d&range=1d`;
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
        signal: AbortSignal.timeout(10000),
        cache: "no-store",
        redirect: "follow",
      });
      if (res.ok) {
        const json = await res.json();
        const meta = json?.chart?.result?.[0]?.meta;
        if (meta) {
          let price = typeof meta.regularMarketPrice === "number" ? meta.regularMarketPrice : null;
          let prev = typeof meta.chartPreviousClose === "number" ? meta.chartPreviousClose : null;
          const ccy = meta.currency || "USD";
          if (ccy === "USX") {
            if (price !== null) price = price / 100;
            if (prev !== null) prev = prev / 100;
          }
          item.price = price;
          item.prevClose = prev;
          item.currency = "USD";
          item.exchange = meta.exchangeName || null;
          item.marketTime = typeof meta.regularMarketTime === "number" ? meta.regularMarketTime : null;
          if (price !== null && prev !== null && prev !== 0) {
            item.change = Number((price - prev).toFixed(4));
            item.changePct = Number(((price - prev) / prev * 100).toFixed(2));
          }
          results.push(item);
        }
      }
    } catch {
      // skip — do not fabricate
    }
    // delay between requests to avoid rate limiting
    await new Promise((r) => setTimeout(r, 800));
  }

  const status = results.length > 0 ? "ok" : "unavailable";

  return NextResponse.json(
    {
      status,
      source: "Yahoo Finance (delayed up to 15 min)",
      fetchedAt,
      count: results.length,
      prices: results,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    }
  );
}
