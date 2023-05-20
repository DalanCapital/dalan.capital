"use client";
import Image from "next/image";
import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";

import { Container } from "@/components/Container";
import faqImage from "public/images/stock/faq-image.jpg";

const faqs = [
  {
    question: "Do I need specific skill and/or document to apply?",
    answer:
      "No, We are welcome to all people around the world, We belive in people. However trading statements, trading forecasts/analytics, and trading certificates can effect on your application.",
  },
  {
    question: "Which payment methods supported?",
    answer:
      "We accept Paypal, Visa, MasterCard, American Express, and Discover. You can also pay with Apple Pay and Google Pay. Also, We accept payments in cryptocurrencies.",
  },
  {
    question: "Is Dalan regulated company?",
    answer:
      "Yes, We registered in UAE, Dubai as technology company that produce platform to connect traders and investors.",
  },
  {
    question: "Which countries allowed to apply?",
    answer:
      "We are welcome to all countries, except Cuba, North Korea, Iran, Syria, based on U.S. Department of Commerce restrictions.",
  },
  {
    question: "What documents is required to verification?",
    answer:
      "We need your ID card or passport, and proof of address. You can upload them in your profile.",
  },
  {
    question: "What happened if I brake rules?",
    answer:
      "No worries, You can get another trading account to max redemption(3 trading accounts), If you lose your 3rd trading account, You will be banned from Dalan platform, and you will not be able to apply again for next six months.",
  },
  {
    question: "Which withdrawals methods supported?",
    answer:
      "We support cryptocurrencies, Paypal, bank wire, and Deel platform. You can choose your preferred method in your profile.",
  },
  {
    question: "How long it will take to get account?",
    answer:
      "It depends on your application, It can take from 1 day to 1 week. We will send you an email when your application is approved.",
  },
  {
    question: "How long it will take to withdrawal processed?",
    answer:
      "It depends on your withdrawal method, It can take from 1 day to 21 days(for SWIFT transfer in some cases). We will send you an email when your withdrawal request is approved.",
  },
];

export function Faqs() {
  return (
    <section className="overflow-hidden bg-vanilla pb-64 md:pt-24 md:pb-32">
      <Container className="relative">
        <Image
          src={faqImage}
          className="absolute left-0 right-0 h-80 w-full object-cover object-center md:right-6 md:left-[unset] md:h-auto md:w-1/2 lg:right-8"
          alt="FAQ"
        />
        <div className="relative z-10 translate-y-48 md:w-4/5 md:translate-y-12 lg:w-2/3">
          <div className="border border-gray-secondary-400/60 bg-gray-secondary-50 px-8 py-12 sm:py-16 sm:px-12 lg:px-16 lg:py-20">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight">
              Frequently asked questions
            </h2>
            <ul className="mt-12 space-y-8 divide-y divide-gray-secondary-400/75 sm:mt-16">
              {faqs.map((faq, index) => (
                <Disclosure
                  key={index}
                  as="li"
                  className={clsx(index > 0 && "pt-8", "")}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between">
                        <p className="text-left text-lg font-semibold text-slate-900 sm:text-xl">
                          {faq.question}
                        </p>
                        <span
                          className={clsx(
                            open
                              ? "rotate-0 before:w-0"
                              : "rotate-180 before:w-4 sm:before:w-[18px]",
                            "relative ml-4 flex h-4 w-4 duration-300 before:absolute before:bottom-1/2 before:h-0.5 before:-translate-y-1/2 before:rotate-90 before:bg-slate-800 before:transition-[width] before:content-[''] after:absolute after:bottom-1/2 after:h-0.5 after:w-4 after:-translate-y-1/2 after:bg-slate-800 after:content-[''] sm:h-[18px] sm:w-[18px] sm:after:w-[18px]"
                          )}
                        ></span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-1 pt-5 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed">
                          {faq.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
