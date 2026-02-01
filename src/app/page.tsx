import HomeClient from "@/components/HomeClient";

export default function Home() {
  const presentDate = new Date().toISOString();
  return <HomeClient presentDate={presentDate} />;
}
