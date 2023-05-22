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
              Collaborate and Achieve More with Dalan`s Team
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:ml-auto lg:w-7/12 lg:py-32 lg:pl-28 xl:pl-36 xl:pr-20">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
            Collaborate and Achieve More with Dalan`s Team
            </h2>
            <p className="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">
            We`re excited to announce our latest feature - Team, designed to help traders trade together, communicate better, and achieve more.
            Team is a feature that connects traders on our platform in a unique and powerful way. Our goal is to create a sense of community and collaboration, 
            allowing traders to work together and achieve more than they could on their own. 
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
