import Head from "next/head";

import { HomeHero } from "@/components/HomeHero/Contract";
import { FeatureBlocks } from "@/components/FeatureBlocks/Contract";
import { FeaturesGrid } from "@/components/FeaturesGrid/Contract";
import { Process } from "@/components/Process/HedgeFunds";
import { Faqs } from "@/components/Faqs";
import { CallToAction } from "@/components/CallToAction";
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
      <Footer />
    </>
  );
}
