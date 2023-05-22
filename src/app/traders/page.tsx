import Head from "next/head";

import { HomeHero } from "@/components/HomeHero/Traders";
import { FeatureBlocks } from "@/components/FeatureBlocks/Traders";
import { FeaturesGrid } from "@/components/FeaturesGrid/Traders";
import { Process } from "@/components/Process/Traders";
import { Faqs } from "@/components/Faqs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {FBlocks} from "@/components/FBlocks";

const levels = [
    {id: 1, title: "Level 1",},
    {id: 2, title: "Level 2",},
]

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
        {levels.map((level) => (
            <FBlocks key={level.id} {...level} />
        ))}
      <FeatureBlocks />
      <FeaturesGrid />     
      <Process />
      <Footer />
    </>
  );
}
