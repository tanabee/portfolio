import { Presentation } from "@/types";
import PresentationMap from "./PresentationMap";

export default function Presentations({ presentations }: { presentations: Presentation[] }) {
  return (
    <section className="section">
      <h2>Presentations</h2>
      <PresentationMap presentations={presentations} />
      <div className="card">
        {presentations.map((pres, index) => (
          <div key={index} style={{
            display: "flex",
            gap: "1.5rem",
            padding: "1rem 0",
            borderBottom: index !== presentations.length - 1 ? "1px solid var(--border)" : "none",
            alignItems: "center"
          }}>
            <div style={{ minWidth: "120px", color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: "500" }}>
              {pres.date}
            </div>
            <div style={{ fontWeight: "500" }}>{pres.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
