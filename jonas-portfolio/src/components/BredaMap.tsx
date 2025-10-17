"use client";

import { useEffect, useMemo, useRef } from "react";
import type { Map } from "leaflet";

export default function BredaMap() {
  const position = useMemo<[number, number]>(() => [51.5719, 4.7683], []);
  const tiles = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png";
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = await import("leaflet");
      if (cancelled || !ref.current) return;
      const map = L.map(ref.current, {
        center: position,
        zoom: 11,
        scrollWheelZoom: false,
        attributionControl: false,
      });
      mapRef.current = map;
      L.tileLayer(tiles, { attribution: "&copy; OpenStreetMap & CARTO" }).addTo(map);
      L.marker(position).addTo(map);
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [position, tiles]);

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--border)] glass">
      <div ref={ref} style={{ height: 320 }} />
    </div>
  );
}
