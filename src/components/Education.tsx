import { Education as EducationType } from "@/types";

export default function Education({ education }: { education: EducationType[] }) {
  return (
    <section className="section">
      <h2>Education</h2>
      <div>
        {education.map((edu, index) => (
          <div key={index} className="card">
            <div className="meta">{edu.period}</div>
            <h3 style={{ marginBottom: "0.5rem" }}>{edu.degree}</h3>
            <div style={{ color: "var(--text-secondary)" }}>{edu.school}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
