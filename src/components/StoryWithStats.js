import Image from "next/image";

import TeamImage from "public/images/stock/team.jpg";
import { Container } from "@/components/Container";

export function StoryWithStats() {
  return (
    <section className="relative overflow-hidden bg-vanilla pt-16 pb-[532px] sm:pb-[500px] sm:pt-24 md:pb-64">
      <Container>
        <div className="flex flex-col sm:items-center">
          <p className="flex items-center space-x-3.5 text-xl font-medium text-amber-900/70">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={3}
              viewBox="0 0 28 3"
              fill="none"
            >
              <line
                y1="1.5"
                x2={28}
                y2="1.5"
                stroke="currentColor"
                strokeOpacity="0.65"
                strokeWidth={3}
              />
            </svg>

            <span>Our story</span>
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-snug text-slate-900 sm:max-w-xl sm:text-center sm:text-5xl sm:leading-snug md:mx-auto xl:mx-0">
            Empowering traders and investors since 2019
          </h1>
        </div>
        <div className="mt-12 flex flex-col md:mt-8 md:flex-row md:divide-x md:divide-gray-secondary-400/60">
          <div className="mt-12 flex flex-col md:mt-8 md:flex-row md:divide-x md:divide-gray-secondary-400/60">
            <div className="md:w-1/2 md:py-8 md:pr-6 lg:pr-16">
              <p className="text-lg leading-relaxed text-slate-700">
                Welcome to Dalan - a platform that aims to revolutionize the world of trading and investments! Our objective is to provide a product that creates an opportunity for traders to trade using funded accounts, while also giving investors an avenue for earning returns on their investments.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-slate-700">
                Our story began with a vision to change the way traders and investors work together - to create a platform that benefits both parties equally. We wanted to create a product that would encourage skilled traders to trade and help investors earn returns, while providing security and reliability for all.
              </p>
            </div>
            <div className="mt-8 sm:mt-0 md:w-1/2 md:py-8 md:pl-6 lg:pl-16">
              <p className="text-lg leading-relaxed text-slate-700">
                As we delved deeper into the world of trading and investments, we realized that there was a significant gap between traders and investors. Our team worked tirelessly to design and build a platform that would enable traders to trade using funded accounts and investors to support skilled traders and earn returns on their investment.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-slate-700">
                Dalan the platform that addresses the needs of both traders and investors, providing them with easy and accessible ways to achieve their goals. From the beginning, we`ve kept our users at the center of everything we do - from designing features that cater to their specific needs to ensuring the highest level of security for all transactions.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-16 sm:mt-20">
          <div className="aspect-w-2 aspect-h-1">
            <Image
              className="object-cover object-center"
              src={TeamImage}
              alt="Team"
            />
          </div>
          <div className="absolute top-full left-6 right-6 flex max-w-4xl -translate-y-12 flex-col divide-y divide-gray-secondary-400/60 bg-amber-100 px-10 py-10 md:left-[unset] md:top-[unset] md:right-0 md:-bottom-1/4 md:w-full md:flex-row md:divide-y-0 md:divide-x md:px-8 lg:p-12">
            <div className="pb-10 md:w-1/3 md:pb-0 md:pr-10 lg:pr-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                5+
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Years working on empowering traders and investors
              </p>
            </div>
            <div className="py-10 md:w-1/3 md:py-0 md:px-10 lg:px-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                $5.7M
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Capital raised by our investors
              </p>
            </div>
            <div className="pt-10 md:w-1/3 md:pt-0 md:pl-10 lg:pl-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                120+
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Traders working on Dalan accounts
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
