import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function FaqCTA() {
  return (
    <section className="relative overflow-hidden bg-purple-light py-16 sm:py-20">
      <Container>
        <h1 className="text-center text-4xl font-semibold leading-snug text-slate-900 sm:text-5xl sm:leading-snug">
          See our FAQs
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-slate-700">
<<<<<<< HEAD
        Find out what you need to know with our FAQs. From account setup to our features, we`ve got you covered. 
=======
        Find out what you need to know with our FAQs. From account setup to our features, we`ve got you covered.
>>>>>>> 1683f8db896b0f8c492c8430911ab375d0947f55
        </p>
        <div className="mt-10 flex w-full justify-center sm:mt-12">
          <Button href="/start" variant="ghost">
            Go to FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
