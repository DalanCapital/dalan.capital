import Head from "next/head";
import { HomeHero } from "@/components/HomeHero/Team";
import { FeatureBlocks } from "@/components/FeatureBlocks/Team";
import { FeaturesGrid } from "@/components/FeaturesGrid/Team";
import { Process } from "@/components/Process/Team";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dalan Capital - Connect Market</title>
        <meta name="description"
          content="Dalan Capital is a platform that connects investors with traders."
        />
      </Head>
      <Header />
      <HomeHero />
      <FeatureBlocks />
      <FeaturesGrid />
      <Process />
      <Footer />
    </>
  );
}
