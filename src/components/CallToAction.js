import Image from "next/image";

import { Container } from "@/components/Container";
import ctaImage1 from "public/images/stock/cta-image-01.jpg";
import ctaImage2 from "public/images/stock/cta-image-02.jpg";
import { Button } from "@/components/Button";

export function CallToAction() {
  return (
    <section className="overflow-hidden bg-amber-100 py-20 md:py-28 lg:py-32">
      <Container className="relative items-center md:grid md:grid-cols-12 md:gap-12">
        <div className="mx-auto max-w-lg md:col-span-6 md:mx-0 lg:pr-12">
          <h2 className="text-center text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight md:text-left">
            Make a decision, Enter the Market.
          </h2>
          <p className="mt-6 text-center text-[17px] leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed md:text-left ">
            Dalan is here to help you make the right decision. We introduce you to right persons, teams, and companies to make the right decision, and the right time to enter the market.
          </p>
          <div className="mt-10 flex w-full justify-center md:justify-start">
            <Button href="/start">Get Started</Button>
            <Button className="ml-5 " href="/contact">Contact Us</Button>
          </div>
        </div>
        <div className="col-span-6 hidden grid-cols-12 md:grid">
          <Image
            src={ctaImage2}
            className="col-span-5 my-auto ml-px h-auto w-full"
            alt="call to action"
          />
          <Image
            src={ctaImage1}
            className="col-span-7 h-auto w-full"
            alt="call to action"
          />
        </div>
      </Container>
    </section>
  );
}
