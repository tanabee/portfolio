import { Experience as ExperienceType } from "@/types";

export default function Experience({ experience }: { experience: ExperienceType[] }) {
  return (
    <section className="section">
      <h2>Experience</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {experience.map((exp, index) => (
          <div key={index} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--primary)" }}>{exp.title}</h3>
              <span className="meta">{exp.period}</span>
            </div>
            {exp.company && (
              <div style={{ fontSize: "1.1rem", fontWeight: "500", marginBottom: "1rem" }}>
                {exp.company}
              </div>
            )}
            {exp.details && (
              <ul style={{ paddingLeft: "1.2rem" }}>
                {exp.details.map((detail, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem", lineHeight: "1.6" }}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
