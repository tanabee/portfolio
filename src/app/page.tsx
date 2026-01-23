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
      <Experience experience={profile.experience} />
      <Education education={profile.education} />
      <Skills skills={profile.skills} />
    </div>
  );
}
