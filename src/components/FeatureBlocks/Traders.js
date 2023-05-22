import Image from "next/image";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import featureImage1 from "public/images/stock/feature-image-01.jpg";
import featureImage2 from "public/images/stock/feature-image-02.jpg";

export function FeatureBlocks() {
  return (
    <section className="relative overflow-hidden bg-vanilla pt-32 pb-20 lg:pt-24 lg:pb-28">
      <Container>
        <div className="relative mx-auto w-full max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
          <div className="left-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
            <Image
              src={featureImage1}
              className="h-auto w-full"
              alt="feature image"
            />
            <div className="absolute right-0 top-0 w-64 -translate-y-24 bg-gray-secondary-100/95 p-6 backdrop-blur-sm sm:py-7 lg:left-0 lg:top-[unset] lg:bottom-0 lg:translate-y-24 2xl:-translate-x-16">
              <p className="text-4xl font-semibold text-slate-900 xl:text-5xl">
                1000+
              </p>
              <p className="mt-5 text-slate-700">
                Traders use Dalan to ease their Trading
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:ml-auto lg:w-7/12 lg:py-32 lg:pl-28 xl:pl-36 xl:pr-20">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
            Start Your Trading Journey with Level 1 Program
            </h2>
            <p className="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">
            Our Level 1 program is an excellent place to start! No verification process is required, making trading accessible to everyone.
             With our 10% return target and the guidance of our team of professionals, striving for success is not only challenging but 
             achievable. Plus, with an AUM range of $1,000 to $10,000 and a manageable daily lot size, beginners can practice their skills 
             without undue risk. While Level 1 traders do not have access to our Pro Account or dedicated health insurance, our team is 
             committed to helping all traders, regardless of their level. Join now and begin your journey to trading success!
            </p>
            <Button
              href="#"
              variant="ghost"
              size="md"
              className="mt-10 sm:mt-12"
            >
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
