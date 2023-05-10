import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import featureImage1 from '@/images/stock/feature-image-01.jpg'
import featureImage2 from '@/images/stock/feature-image-02.jpg'

export function FeatureBlocks() {
  return (
    <section className="relative overflow-hidden bg-vanilla pt-32 pb-20 lg:pt-24 lg:pb-28">
      <Container>
        <div className="relative mx-auto w-full max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
          <div className="left-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
            <Image src={featureImage1} className="h-auto w-full" />
            <div className="absolute right-0 top-0 w-64 -translate-y-24 bg-gray-secondary-100/95 p-6 backdrop-blur-sm sm:py-7 lg:left-0 lg:top-[unset] lg:bottom-0 lg:translate-y-24 2xl:-translate-x-16">
              <p className="text-4xl font-semibold text-slate-900 xl:text-5xl">
                1000+
              </p>
              <p className="mt-5 text-slate-700">
                Podcasters use Waves to power their podcast
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:ml-auto lg:w-7/12 lg:py-32 lg:pl-28 xl:pl-36 xl:pr-20">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
              Never worry about sound quality again
            </h2>
            <p className="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">
              Lorem ipsum dolor sit amet orci aliquam porta adipiscing elementum
              purus netus laoreet pulvinar. Vestibulum platea iaculis eu ac
              netus lobortis porta sodales urna mollis ac. Elit viverra magna
              euismod aenean diam ullamcorper eu nec venenatis. Eleifend lacinia
              luctus sagittis hendrerit habitasse cras dapibus.
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

        <div className="relative mx-auto mt-48 w-full max-w-lg sm:max-w-xl lg:mx-0 lg:mt-32 lg:max-w-none">
          <div className="right-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
            <Image src={featureImage2} className="h-auto w-full" />
            <div className="absolute left-0 top-0 w-64 -translate-y-24 bg-gray-secondary-100/95 p-6 backdrop-blur-sm sm:py-7 lg:right-0 lg:top-[unset] lg:left-[unset] lg:bottom-0 lg:translate-y-24 2xl:translate-x-16">
              <p className="text-4xl font-semibold text-slate-900 xl:text-5xl">
                3M+
              </p>
              <p className="mt-5 text-slate-700">
                Listeners across podcasts using Waves
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:w-7/12 lg:py-32 lg:pr-28 xl:pl-16 xl:pr-36 ">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
              Quick and easy podcasting setups
            </h2>
            <p className="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">
              Lorem ipsum dolor sit amet orci aliquam porta adipiscing elementum
              purus netus laoreet pulvinar. Vestibulum platea iaculis eu ac
              netus lobortis porta sodales urna mollis ac. Elit viverra magna
              euismod aenean diam ullamcorper eu nec venenatis. Eleifend lacinia
              luctus sagittis hendrerit habitasse cras dapibus.
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
  )
}
