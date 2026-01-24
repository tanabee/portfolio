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
    <header className="section" style={{ padding: "4rem 0", display: "flex", alignItems: "center", gap: "2rem", position: "relative" }}>
      {profile.contact && (
        <a
          href={profile.contact}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            gap: "0.5rem",
            background: "transparent",
            color: "var(--text-secondary)",
            border: "1px solid var(--border)",
            padding: "0.5rem 1rem",
            fontSize: "0.9rem"
          }}
        >
          Contact me
        </a>
      )}
      {profile.image && (
        <img
          src={profile.image}
          alt={profile.name}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid var(--border)",
            display: "block",
            flexShrink: 0
          }}
        />
      )}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem", color: "#f4b400", lineHeight: 1.1 }}>
          {profile.name}
        </h1>
        <div style={{ fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
          <div>VPoE at CureApp</div>
          <div>Google Developer Expert (Firebase, Workspace)</div>
        </div>
        <div className="social-links" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {Object.entries(profile.socials).map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="btn" style={{ gap: "0.5rem" }}>
              {iconMap[key] && <span style={{ fontSize: "1.1em" }}>{iconMap[key]}</span>}
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
