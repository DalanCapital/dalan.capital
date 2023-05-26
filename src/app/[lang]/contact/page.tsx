import Head from "next/head";

import { ContactHeader } from "@/components/ContactHeader";
import { ContactInfo } from "@/components/ContactInfo";
import { Map } from "@/components/Map";
import { FaqCTA } from "@/components/FaqCTA";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <ContactHeader />
      <ContactInfo />
      <Map />
      <FaqCTA />
      <CallToAction />
      <Footer />
    </>
  );
}
