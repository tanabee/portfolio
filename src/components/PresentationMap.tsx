"use client";

import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Presentation } from "@/types";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function PresentationMap({ presentations }: { presentations: Presentation[] }) {
  const [isMounted, setIsMounted] = useState(false);
  const [tooltipContent, setTooltipContent] = useState<{ title: string; date: string } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ width: "100%", height: "400px", marginBottom: "2rem", background: "var(--surface)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }} />;
  }

  return (
    <div style={{ width: "100%", height: "400px", marginBottom: "2rem", background: "var(--surface)", borderRadius: "var(--radius)", border: "1px solid var(--border)", overflow: "hidden", position: "relative" }}>
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 120 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="var(--background)"
                stroke="var(--border)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "var(--border)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {presentations.map((pres, index) => (
          pres.coordinates && (
            <Marker
              key={index}
              coordinates={pres.coordinates}
              onMouseEnter={(e) => {
                setTooltipContent({ title: pres.title, date: pres.date });
                // We'll update position in onMouseMove or just set it here if static
              }}
              onMouseMove={(e) => {
                // Get the bounding rectangle of the container to calculate relative position
                const container = e.currentTarget.closest('div');
                if (container) {
                  const rect = container.getBoundingClientRect();
                  setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }
              }}
              onMouseLeave={() => {
                setTooltipContent(null);
              }}
              style={{
                default: { outline: "none" },
                hover: { outline: "none", cursor: "pointer" },
                pressed: { outline: "none" },
              }}
            >
              <circle r={6} fill="var(--primary)" stroke="#fff" strokeWidth={2} />
            </Marker>
          )
        ))}
      </ComposableMap>
      {tooltipContent && (
        <div style={{
          position: "absolute",
          top: tooltipPos.y - 40,
          left: tooltipPos.x,
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.8)",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          fontSize: "0.8rem",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          zIndex: 10,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
        }}>
          <div style={{ fontWeight: "bold" }}>{tooltipContent.title}</div>
          <div style={{ fontSize: "0.7rem", opacity: 0.8 }}>{tooltipContent.date}</div>
        </div>
      )}
    </div>
  );
}
