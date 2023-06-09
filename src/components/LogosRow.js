import Image from "next/image";
import clsx from "clsx";

import { Container } from "@/components/Container";
import logoBriofy from "public/images/logos/briofy.svg";
import logoTrader4 from "public/images/logos/trader4.svg";
import logoEntrepreneur from "public/images/logos/entrepreneur.svg";
import logoQuartz from "public/images/logos/quartz.svg";
import logoWired from "public/images/logos/wired.svg";

const companies = [
  { name: "Briofy", logo: logoBriofy },
  { name: "Trader4", logo: logoTrader4 },
  { name: "Entrepreneur", logo: logoEntrepreneur },
  { name: "Quartz", logo: logoQuartz },
];

export function LogosRow() {
  return (
    <section className="relative overflow-hidden bg-vanilla py-20 lg:pt-24">
      <Container>
        <p className="text-center text-base font-semibold uppercase tracking-widest text-slate-500">
          As featured in
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-12 lg:grid-cols-4">
          {companies.map((company, index) => (
            <li
              key={company.name}
              className={clsx(
                index <= 2 ? "sm:col-span-2" : "sm:col-span-3",
                "flex justify-center sm:col-span-2 lg:col-span-1"
              )}
            >
                <Image width="auto" height="50" className="px-5" src={company.logo} alt={company.name} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
