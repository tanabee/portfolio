import { Profile } from "@/types";
import { FaGlobe, FaFacebook, FaTwitter, FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import { SiQiita, SiWantedly } from "react-icons/si";

const iconMap: { [key: string]: React.ReactNode } = {
  website: <FaGlobe />,
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  github: <FaGithub />,
  medium: <FaMedium />,
  qiita: <SiQiita />,
  linkedin: <FaLinkedin />,
  wantedly: <SiWantedly />,
};

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="section" style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "#f4b400" }}>
        {profile.name}
      </h1>
      <div style={{ fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: "1.6" }}>
        <div>VPoE at CureApp</div>
        <div>Google Developer Expert (Firebase, Workspace)</div>
      </div>
      <div className="social-links" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", maxWidth: "700px", margin: "0 auto" }}>
        {Object.entries(profile.socials).map(([key, url]) => (
          <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="btn" style={{ gap: "0.5rem" }}>
            {iconMap[key] && <span style={{ fontSize: "1.1em" }}>{iconMap[key]}</span>}
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}
      </div>
    </header>
  );
}
