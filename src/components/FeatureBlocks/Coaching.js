import Image from "next/image";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import featureImage1 from "public/images/stock/feature-image-01.jpg";

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
                100+
              </p>
              <p className="mt-5 text-slate-700">
              Connect with Experienced Coaches
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:ml-auto lg:w-7/12 lg:py-32 lg:pl-28 xl:pl-36 xl:pr-20">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
            Connect with Experienced Coaches
            </h2>
            <p className="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">
            We`re excited to introduce our latest feature - Coaching, designed to help traders like you take their trading to the next level.
            Coaching is a feature that provides traders with access to expert coaches who give direction and guidance on how to maximize their trading potential. 
            Our coaches are experienced traders who understand the trading world, and they are committed to providing you with practical advice and guidance that will improve your performance. 
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
