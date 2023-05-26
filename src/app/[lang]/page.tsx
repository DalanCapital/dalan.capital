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
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Home({ params: { lang } }: any) {
  const dict = await getDictionary(lang); // en

  return (
    <>
      <Head>
        <title>Dalan Capital - Connect Market</title>
        <meta
          name="description"
          content="Dalan Capital is a platform that connects investors with traders."
        />
      </Head>
      <Header />
      <HomeHero dict={dict} />
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
