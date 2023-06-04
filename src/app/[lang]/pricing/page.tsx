import { PricingCards } from "@/components/PricingCards";
import { PlanFeatures } from "@/components/PlanFeatures";
import { FeaturedTestimonials } from "@/components/FeaturedTestimonials";
import { PlansTable } from "@/components/PlansTable";
import { Faqs } from "@/components/Faqs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import GooglePayButton from '@google-pay/button-react';

export default function Pricing() {
  const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0
  };
  const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      'gateway': 'example',
      'gatewayMerchantId': 'exampleGatewayMerchantId'
    }
  };
  const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];
  const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
  const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: allowedCardAuthMethods,
      allowedCardNetworks: allowedCardNetworks
    }
  };
  const cardPaymentMethod = Object.assign(
    {tokenizationSpecification: tokenizationSpecification},
    baseCardPaymentMethod
  );
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
