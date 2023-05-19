import Head from "next/head";

import { AboutHero } from "@/components/AboutHero";
import { StoryWithStats } from "@/components/StoryWithStats";
import { FeaturesGridDark } from "@/components/FeaturesGridDark";
import { Team } from "@/components/Team";
import { LogosGrid } from "@/components/LogosGrid";
import { CareersCTA } from "@/components/CareersCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <StoryWithStats />
      <FeaturesGridDark />
      {/*<Team />*/}
      <LogosGrid />
      <CareersCTA />
      <Footer />
    </>
  );
}
