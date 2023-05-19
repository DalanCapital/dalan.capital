import Image from "next/image";

import { Container } from "@/components/Container";
import logoBriofy from "public/images/logos/briofy.svg";
import logoTrader4 from "public/images/logos/trader4.svg";
import logoEntrepreneur from "public/images/logos/entrepreneur-dark.svg";
import logoQuartz from "public/images/logos/quartz-dark.svg";

const companies = [
  { name: "Briofy", logo: logoBriofy },
  { name: "Trader4", logo: logoTrader4 },
  { name: "Entrepreneur", logo: logoEntrepreneur },
  { name: "Quartz", logo: logoQuartz },
];

export function LogosGrid() {
  return (
    <section className="relative overflow-hidden bg-vanilla py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
          <h1 className="text-center text-4xl font-semibold leading-snug text-slate-900 sm:text-5xl sm:leading-snug">
            The investors behind Dalan
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-slate-700 sm:mt-6">
            Our platform is backed by a group of experienced and well-respected financiers who share our vision of providing a reliable and profitable market.
          </p>
          <ul className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {companies.map((company) => (
              <li
                key={company.name}
                className={
                  "flex items-center justify-center bg-gray-secondary-50 py-10"
                }
              >
                <Image width="auto" height="50" className="px-5" src={company.logo} alt={company.name} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
