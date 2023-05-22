import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import homeHeroImg from "public/images/stock/home-hero.jpg";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-amber-100 pt-16 md:pt-20 xl:pt-32">
      <Container>
        <div className="mx-auto max-w-lg pb-14 md:mx-0 md:max-w-none md:pb-48 lg:pb-52 xl:max-w-xl xl:pb-14">
          <h1 className="text-5xl font-semibold leading-tighter text-slate-900 md:mx-auto md:max-w-2xl md:text-center xl:mx-0 xl:text-left xl:text-6xl xl:leading-tighter">
          Maximize Your Trading Experience  
          </h1>
          <ul className="mt-6 flex flex-col space-y-4 md:mx-auto md:mt-8 md:max-w-3xl md:flex-row md:space-y-0 md:space-x-2 lg:space-x-4 xl:mx-0 xl:flex-col xl:space-y-4 xl:space-x-0">
            <li className="flex items-center md:items-start xl:items-center">
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-slate-800 md:h-6 md:w-6 xl:h-5 xl:w-5" />
              <p className="ml-3 text-slate-700 lg:ml-4 xl:ml-5 xl:text-lg">
              <span className="font-medium text-slate-900">
                Smarter
                </span>
               Trades, Better Profits. {" "}
              </p>
            </li>
            <li className="flex items-center md:items-start xl:items-center">
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-slate-800 md:h-6 md:w-6 xl:h-5 xl:w-5" />
              <p className="ml-3 text-slate-700 lg:ml-4 xl:ml-5 xl:text-lg">
              <span className="font-medium text-slate-900">Empower</span>
                {" "}  your trading strategy.
              </p>
            </li>
            <li className="flex items-center md:items-start xl:items-center">
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-slate-800 md:h-6 md:w-6 xl:h-5 xl:w-5" />
              <p className="ml-3 text-slate-700 lg:ml-4 xl:ml-5 xl:text-lg">
              <span className="font-medium text-slate-900">Maximize</span>
              {" "}  your trading potential. 
              </p>
            </li>
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-5 md:mt-12 md:justify-center xl:justify-start">
            <Button href="/start" className="w-full sm:w-auto">
              Get Start
            </Button>
            <Button
              href="/signin"
              variant="ghost"
              className="mt-3.5 w-full sm:mt-0 sm:w-auto"
            >
              See our solutions
            </Button>
          </div>
          <p className="mt-4 flex text-md text-slate-600/90 md:justify-center xl:justify-start xl:text-base">
            ?
          </p>
        </div>
      </Container>

      <div className="bg-gradient-to-r from-vanilla via-amber-50 to-amber-100">
        <Container className="relative">
          <div className="mx-auto max-w-lg pt-20 pb-8 pl-4 md:mx-0 md:max-w-md lg:max-w-lg lg:pt-28 lg:pb-16 xl:max-w-xl xl:py-12 xl:pl-14 2xl:pl-0">
            <blockquote>
              <div className="relative leading-relaxed text-slate-700 xl:text-lg">
                </div>
            </blockquote>
          </div>
          <div className="absolute bottom-0 right-6 hidden w-1/3 bg-gray-secondary-100 md:block lg:right-12 xl:-right-0 xl:w-full xl:max-w-xl 2xl:-right-32 2xl:max-w-[640px]">
            <Image
              src={homeHeroImg}
              className="h-auto w-full object-cover"
              priority
              alt="hero image"
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
