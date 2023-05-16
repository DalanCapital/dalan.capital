import Head from "next/head";

import { HomeHero } from "@/components/HomeHero";
import { LogosRow } from "@/components/LogosRow";
import { FeatureBlocks } from "@/components/FeatureBlocks";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Process } from "@/components/Process";
import { TestimonialsSlide } from "@/components/TestimonialsSlide";
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
      <LogosRow />
      <FeatureBlocks />
      <FeaturesGrid />
      <Process />
      <TestimonialsSlide />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
