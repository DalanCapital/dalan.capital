"use client";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import ServiceTables from "@/components/my/global/ServiceTables";

export default function TradersList() {
  return (
    <>
      <Header />
      <Container className="my-10">
        <ServiceTables
          endpoint="/my/teams/traders"
          link="/my/teams/traders/add"
          title="Traders"
        />
      </Container>

      <Footer />
    </>
  );
}
