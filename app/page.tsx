import { Hero } from "@/components/sections/Hero";
import { LandingBody } from "@/components/sections/LandingBody";

export default function Home() {
  return <LandingBody hero={<Hero />} />;
}
