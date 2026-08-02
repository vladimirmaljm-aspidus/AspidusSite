"use client";

import React, { useEffect, useRef } from "react";
import { Map as MaplibreMap, Marker as MaplibreMarker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "./i18n";
import { RLink } from "./router";
import { Reveal } from "./motion-helpers";
import { AnimatedDivider } from "./animated-icons";

// Aspidus offices (HQ + 2 regional)
const OFFICES = [
  { id: "dubai", name: "Dubai", sub: "HQ · DMCC", lat: 25.2, lng: 55.27, color: "#9a7b3f", hq: true },
  { id: "capetown", name: "Cape Town", sub: "Pty Ltd", lat: -33.92, lng: 18.42, color: "#9a7b3f" },
  { id: "istanbul", name: "Istanbul", sub: "Türkiye", lat: 41.01, lng: 28.97, color: "#9a7b3f" },
];

// Major global trading ports & hubs connected to Aspidus operations
const PORTS = [
  { id: "rotterdam", name: "Rotterdam", lat: 51.95, lng: 4.14 },
  { id: "singapore", name: "Singapore", lat: 1.29, lng: 103.85 },
  { id: "houston", name: "Houston", lat: 29.76, lng: -95.37 },
  { id: "shanghai", name: "Shanghai", lat: 31.23, lng: 121.47 },
  { id: "santos", name: "Santos", lat: -23.96, lng: -46.33 },
  { id: "durban", name: "Durban", lat: -29.88, lng: 31.03 },
  { id: "jebelali", name: "Jebel Ali", lat: 25.01, lng: 55.06 },
  { id: "marmara", name: "Marmara", lat: 40.97, lng: 27.32 },
  { id: "novorossiysk", name: "Novorossiysk", lat: 44.72, lng: 37.78 },
  { id: "mumbai", name: "Mumbai", lat: 19.08, lng: 72.88 },
];

// Trade routes: office-to-office + office-to-port
type Route = { from: string; to: string; label: string; primary?: boolean };
const ROUTES: Route[] = [
  // Office-to-office
  { from: "dubai", to: "istanbul", label: "Metals · Construction", primary: true },
  { from: "dubai", to: "capetown", label: "Energy · Sugar", primary: true },
  { from: "istanbul", to: "capetown", label: "Textiles · Minerals", primary: true },
  // Office-to-port trade flows
  { from: "dubai", to: "jebelali", label: "Export hub" },
  { from: "dubai", to: "singapore", label: "Energy" },
  { from: "dubai", to: "rotterdam", label: "Oil · LNG" },
  { from: "dubai", to: "mumbai", label: "Refined products" },
  { from: "dubai", to: "novorossiysk", label: "Grain" },
  { from: "istanbul", to: "marmara", label: "Industrial" },
  { from: "istanbul", to: "rotterdam", label: "Manufactured" },
  { from: "capetown", to: "durban", label: "Minerals" },
  { from: "capetown", to: "santos", label: "Agriculture" },
  { from: "houston", to: "dubai", label: "LNG · WTI" },
  { from: "shanghai", to: "dubai", label: "Metals" },
];

// Generate great-circle coordinates between two points
// Generate great-circle arc coordinates between two points (for curved routes)
function greatCircle(lat1: number, lng1: number, lat2: number, lng2: number, n = 48): [number, number][] {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const toDeg = (r: number) => (r * 180) / Math.PI;
  const φ1 = toRad(lat1), λ1 = toRad(lng1);
  const φ2 = toRad(lat2), λ2 = toRad(lng2);
  const Δφ = φ2 - φ1, Δλ = λ2 - λ1;
  const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  // For very short distances, just return straight line
  if (d < 0.001) return [[lng1, lat1], [lng2, lat2]];
  const sinD = Math.sin(d);
  const coords: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const A = Math.sin((1 - t) * d) / sinD;
    const B = Math.sin(t * d) / sinD;
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);
    const φ = Math.atan2(z, Math.sqrt(x * x + y * y));
    const λ = Math.atan2(y, x);
    coords.push([toDeg(λ), toDeg(φ)]);
  }
  return coords;
}

export default function Operations() {
  const { t } = useI18n();
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MaplibreMap | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new MaplibreMap({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          "osm-tiles": {
            type: "raster",
            tiles: [
              "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
              "https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
              "https://c.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors © CARTO",
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm-tiles",
            paint: {
              "raster-opacity": 0.85,
              "raster-saturation": -0.4,
              "raster-contrast": 0.05,
            },
          },
        ],
      },
      center: [25, 15],
      zoom: 1.4,
      minZoom: 1,
      maxZoom: 6,
      interactive: true,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: false,
    });
    mapRef.current = map;

    const addMapData = () => {
      if (!map.loaded()) {
        setTimeout(addMapData, 100);
        return;
      }
      // Add port markers (smaller, subtle)
      PORTS.forEach((port) => {
        const el = document.createElement("div");
        el.style.cssText = `
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(45,74,62,0.55);
          border: 1.5px solid #fff;
          box-shadow: 0 0 0 1px rgba(45,74,62,0.2);
        `;
        new MaplibreMarker(el).setLngLat([port.lng, port.lat]).addTo(map);
        // label
        const lbl = document.createElement("div");
        lbl.textContent = port.name;
        lbl.style.cssText = `
          font: 600 9px/1 Inter, sans-serif;
          color: rgba(26,29,36,0.65);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transform: translate(8px, -6px);
          white-space: nowrap;
          pointer-events: none;
        `;
        new MaplibreMarker(lbl).setLngLat([port.lng, port.lat]).addTo(map);
      });

      // Add office markers (bigger, gold)
      OFFICES.forEach((office) => {
        const size = office.hq ? 14 : 11;
        const el = document.createElement("div");
        el.style.cssText = `
          width: ${size}px; height: ${size}px;
          border-radius: 50%;
          background: ${office.color};
          border: 2.5px solid #fff;
          box-shadow: 0 0 0 2px ${office.color}40, 0 4px 12px rgba(26,29,36,0.25);
          cursor: pointer;
        `;
        // pulse ring for HQ
        if (office.hq) {
          const ring = document.createElement("div");
          ring.style.cssText = `
            position: absolute; top: 50%; left: 50%;
            width: ${size}px; height: ${size}px;
            border-radius: 50%;
            border: 2px solid ${office.color};
            transform: translate(-50%, -50%);
            animation: mappulse 2.4s ease-out infinite;
          `;
          el.appendChild(ring);
        }
        new MaplibreMarker(el).setLngLat([office.lng, office.lat]).addTo(map);
        // label
        const lbl = document.createElement("div");
        lbl.innerHTML = `<div style="font:600 11px/1.2 Inter,sans-serif;color:#1a1d24;letter-spacing:0.02em">${office.name}</div><div style="font:500 8px/1 Inter,sans-serif;color:#9a7b3f;letter-spacing:0.1em;text-transform:uppercase;margin-top:2px">${office.sub}</div>`;
        lbl.style.cssText = `
          transform: translate(10px, -14px);
          white-space: nowrap;
          pointer-events: none;
        `;
        new MaplibreMarker(lbl).setLngLat([office.lng, office.lat]).addTo(map);
      });

      // Add route lines (straight lines for reliability)
      const allPoints = [...OFFICES, ...PORTS];
      const getById = (id: string) => allPoints.find((p) => p.id === id);

      const makeLine = (fromId: string, toId: string): [number, number][] => {
        const a = getById(fromId)!;
        const b = getById(toId)!;
        return [[a.lng, a.lat], [b.lng, b.lat]];
      };

      const primaryFeatures = ROUTES.filter((r) => r.primary).map((r) => ({
        type: "Feature" as const,
        geometry: { type: "LineString" as const, coordinates: makeLine(r.from, r.to) },
        properties: { id: `${r.from}-${r.to}`, label: r.label },
      }));
      const secondaryFeatures = ROUTES.filter((r) => !r.primary).map((r) => ({
        type: "Feature" as const,
        geometry: { type: "LineString" as const, coordinates: makeLine(r.from, r.to) },
        properties: { id: `${r.from}-${r.to}`, label: r.label },
      }));

      map.addSource("routes-secondary", {
        type: "geojson",
        data: { type: "FeatureCollection", features: secondaryFeatures },
      });
      map.addLayer({
        id: "routes-secondary-line",
        type: "line",
        source: "routes-secondary",
        layout: { "line-cap": "round" },
        paint: {
          "line-color": "#2d4a3e",
          "line-width": 2,
          "line-opacity": 0.6,
          "line-dasharray": [3, 2],
        },
      });

      map.addSource("routes-primary", {
        type: "geojson",
        data: { type: "FeatureCollection", features: primaryFeatures },
      });
      // Dark outline for contrast against light map
      map.addLayer({
        id: "routes-primary-outline",
        type: "line",
        source: "routes-primary",
        layout: { "line-cap": "round" },
        paint: {
          "line-color": "#1a1d24",
          "line-width": 5,
          "line-opacity": 0.25,
          "line-blur": 1,
        },
      });
      map.addLayer({
        id: "routes-primary-line",
        type: "line",
        source: "routes-primary",
        layout: { "line-cap": "round" },
        paint: {
          "line-color": "#9a7b3f",
          "line-width": 3,
          "line-opacity": 1,
        },
      });
      // animated white dash overlay on primary routes
      map.addLayer({
        id: "routes-primary-dash",
        type: "line",
        source: "routes-primary",
        layout: { "line-cap": "round" },
        paint: {
          "line-color": "#ffffff",
          "line-width": 2,
          "line-opacity": 0.9,
          "line-dasharray": [0.5, 3],
        },
      });

      // animate the dash — moving dots effect along primary routes
      let dashOffset = 0;
      const animate = () => {
        dashOffset = (dashOffset + 0.08) % 3.5;
        map.setPaintProperty("routes-primary-dash", "line-dasharray", [0.5, 3, 0.5, -dashOffset + 3.5]);
        requestAnimationFrame(animate);
      };
      animate();
    };

    // Wait for map to be fully loaded before adding data
    addMapData();

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section id="operations" className="relative py-16 sm:py-24 mesh-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">{t("operations.eyebrow")}</div>
            <h2 className="h-section max-w-xl">
              {t("operations.title")}{" "}
              <span className="italic" style={{ color: "var(--brass-deep)" }}>{t("operations.titleAccent")}</span>
            </h2>
            <AnimatedDivider className="mt-4" />
          </div>
          <p className="body-sm max-w-sm">{t("operations.desc")}</p>
        </div>

        {/* Map */}
        <Reveal delay={0.05}>
          <div className="relative bg-white rounded-3xl shadow-md border border-[var(--rule)] overflow-hidden">
            <div
              ref={mapContainer}
              className="w-full h-[480px] sm:h-[560px]"
              style={{ background: "#f5f2ea" }}
            />
            {/* Legend overlay */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-xl border border-[var(--rule)] px-4 py-3 shadow-sm pointer-events-none">
              <div className="mono-label mb-2 text-[0.55rem]">Legend</div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--brass)" }} />
                <span className="text-[0.7rem] text-[var(--ink)]">Aspidus office</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(45,74,62,0.6)" }} />
                <span className="text-[0.7rem] text-[var(--ink)]">Trading port</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="block w-4 h-px" style={{ background: "var(--brass)" }} />
                <span className="text-[0.7rem] text-[var(--ink)]">Primary route</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="block w-4 h-px border-t border-dashed" style={{ borderColor: "rgba(45,74,62,0.5)" }} />
                <span className="text-[0.7rem] text-[var(--ink)]">Trade flow</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Office strip below map */}
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {OFFICES.map((office) => (
            <RLink
              key={office.id}
              to={`/office/${office.id}`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex items-center justify-between gap-3 border border-[var(--rule)]"
            >
              <div className="flex-1 min-w-0">
                <div className="mono-label text-[0.6rem]">{office.sub}</div>
                <h3 className="font-serif text-base text-[var(--ink)] mt-0.5">{office.name}</h3>
                <div className="text-[0.7rem] text-[var(--muted-foreground)] mt-1">
                  {office.lat.toFixed(2)}°, {office.lng.toFixed(2)}°
                </div>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-[var(--brass)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </RLink>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes mappulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(3.5); opacity: 0; }
        }
        .maplibregl-ctrl-bottom-right { display: none; }
        .maplibregl-ctrl-attrib { display: none; }
      `}</style>
    </section>
  );
}
