import profileData from "@/data/profile.json";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Presentations from "@/components/Presentations";
import { Profile } from "@/types";

export default function Home() {
  const profile = profileData as Profile;

  return (
    <div>
      <Header profile={profile} />
      <Presentations presentations={profile.presentations} />
      <Experience experience={profile.experience} presentDate={new Date().toISOString()} />
      <Education education={profile.education} />
      <Skills skills={profile.skills} />
      {profile.contact && (
        <div className="section" style={{ textAlign: "center", marginTop: "4rem", marginBottom: "4rem" }}>
          <a
            href={profile.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: "var(--primary)",
              color: "#fff",
              borderColor: "var(--primary)",
              padding: "1rem 2rem",
              fontSize: "1.1rem"
            }}
          >
            Contact me
          </a>
        </div>
      )}
    </div>
  );
}
