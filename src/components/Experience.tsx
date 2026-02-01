"use client";

import { Experience as ExperienceType } from "@/types";
import { useState } from "react";

export default function Experience({ experience, presentDate = new Date().toISOString() }: { experience: ExperienceType[], presentDate?: string }) {
  const [hoveredExp, setHoveredExp] = useState<ExperienceType | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Use the passed presentDate to ensure consistency between server and client
  const now = new Date(presentDate);

  // Helper to parse "YYYY-MM" or "present"
  const parseDate = (dateStr: string) => {
    if (dateStr.toLowerCase() === "present") return now;
    return new Date(dateStr);
  };

  // Process experience data for Gantt chart
  const ganttData = experience.map(exp => {
    const [startStr, endStr] = exp.period.split(" - ");
    return {
      ...exp,
      startDate: parseDate(startStr),
      endDate: parseDate(endStr),
    };
  });

  // Calculate global range
  const minDate = new Date(Math.min(...ganttData.map(d => d.startDate.getTime())));
  const maxDate = now; // Use stable "now"
  const totalDuration = maxDate.getTime() - minDate.getTime();

  // Generate year markers
  const startYear = minDate.getFullYear();
  const endYear = maxDate.getFullYear();
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  const handleMouseEnter = (e: React.MouseEvent, exp: ExperienceType) => {
    setHoveredExp(exp);
    updateTooltipPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updateTooltipPosition(e);
  };

  const handleMouseLeave = () => {
    setHoveredExp(null);
  };

  const updateTooltipPosition = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="section">
      <h2>Experience</h2>

      {/* Gantt Chart Visualization */}
      <div style={{ marginBottom: "4rem", overflowX: "auto" }}>
        <div style={{ position: "relative", height: `${experience.length * 40 + 30}px`, minWidth: "600px" }}>
          {/* Year Grid Lines */}
          {years.map(year => {
            const date = new Date(`${year}-01-01`);
            const left = ((date.getTime() - minDate.getTime()) / totalDuration) * 100;
            if (left < 0 || left > 100) return null;
            return (
              <div key={year} style={{ position: "absolute", left: `${left}%`, top: 0, bottom: 0, borderLeft: "1px dashed var(--border)" }}>
                <span style={{ position: "absolute", top: "-1.5rem", left: "-1rem", fontSize: "0.8rem", color: "var(--text-secondary)" }}>{year}</span>
              </div>
            );
          })}

          {/* Bars */}
          {ganttData.map((exp, index) => {
            const left = ((exp.startDate.getTime() - minDate.getTime()) / totalDuration) * 100;
            const width = ((exp.endDate.getTime() - exp.startDate.getTime()) / totalDuration) * 100;

            // Distinguish Google-related community/mentor roles
            const isCommunityRole = exp.title.includes("Google Developer Experts") || exp.title.includes("Google for Startups");
            const color = isCommunityRole ? "#f4b400" : "var(--primary)";

            return (
              <div
                key={index}
                onMouseEnter={(e) => handleMouseEnter(e, exp)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: "absolute",
                  left: `${left}%`,
                  top: `${index * 40}px`,
                  width: `${Math.max(width, 0.5)}%`,
                  height: "24px",
                  background: color,
                  borderRadius: "4px",
                  opacity: 0.9,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "0.5rem",
                  whiteSpace: "nowrap",
                  color: "#fff",
                  fontSize: "0.75rem",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  zIndex: 1,
                  cursor: "pointer"
                }}
              >
                <span style={{ overflow: "visible", textShadow: "0 0 2px rgba(0,0,0,0.5)" }}>
                  {exp.company || exp.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tooltip Portal/Overlay */}
      {hoveredExp && (
        <div style={{
          position: "fixed",
          left: tooltipPos.x + 10,
          top: tooltipPos.y + 10,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          padding: "0.75rem",
          borderRadius: "8px",
          boxShadow: "var(--shadow-md)",
          zIndex: 1000,
          pointerEvents: "none",
          maxWidth: "300px"
        }}>
          <div style={{ fontWeight: "600", color: "var(--primary)", marginBottom: "0.25rem" }}>{hoveredExp.title}</div>
          {hoveredExp.company && <div style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}>{hoveredExp.company}</div>}
          <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{hoveredExp.period}</div>
        </div>
      )}

      <div>
        {experience.map((exp, index) => {
          const isCommunityRole = exp.title.includes("Google Developer Experts") || exp.title.includes("Google for Startups");
          const color = isCommunityRole ? "#f4b400" : "var(--primary)";

          return (
            <div key={index} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <h3 style={{ fontSize: "1.4rem", color: color, margin: 0 }}>{exp.title}</h3>
                <span className="meta" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: "500" }}>{exp.period}</span>
              </div>

              {exp.company && (
                <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem", color: "var(--text-primary)" }}>
                  {exp.company}
                </div>
              )}

              {exp.details && (
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {exp.details.map((detail, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
