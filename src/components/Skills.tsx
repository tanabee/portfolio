import { Skills as SkillsType } from "@/types";

export default function Skills({ skills }: { skills: SkillsType }) {
  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Licenses & Certificates</h3>
          <ul style={{ listStyle: "none", marginLeft: 0 }}>
            {skills.licenses.map((license, index) => (
              <li key={index} style={{ marginBottom: "0.75rem" }}>
                {license.url ? (
                  <a href={license.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)" }}></span>
                    {license.name}
                  </a>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text-secondary)" }}></span>
                    {license.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Tech Stack</h3>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Languages</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.languages.map((lang, i) => (
                <span key={i} style={{ background: "var(--background)", padding: "0.25rem 0.75rem", borderRadius: "4px", fontSize: "0.85rem", border: "1px solid var(--border)" }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Databases</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.databases.map((db, i) => (
                <span key={i} style={{ background: "var(--background)", padding: "0.25rem 0.75rem", borderRadius: "4px", fontSize: "0.85rem", border: "1px solid var(--border)" }}>
                  {db}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Others</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.others.map((other, i) => (
                <span key={i} style={{ background: "var(--background)", padding: "0.25rem 0.75rem", borderRadius: "4px", fontSize: "0.85rem", border: "1px solid var(--border)" }}>
                  {other}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
