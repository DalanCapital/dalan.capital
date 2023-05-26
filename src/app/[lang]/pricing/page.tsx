import { PricingCards } from "@/components/PricingCards";
import { PlanFeatures } from "@/components/PlanFeatures";
import { FeaturedTestimonials } from "@/components/FeaturedTestimonials";
import { PlansTable } from "@/components/PlansTable";
import { Faqs } from "@/components/Faqs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Pricing() {
  return (
    <>
      <Header />
      {/*<PricingCards />*/}
      {/*<PlanFeatures />*/}
      {/*<FeaturedTestimonials />*/}
      <PlansTable />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
