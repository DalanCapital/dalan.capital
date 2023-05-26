"use client";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import ServiceTables from "@/components/my/global/ServiceTables";

export default function TeamsList() {
  return (
    <>
      <Header />
      <Container className="my-10">
        <ServiceTables
          endpoint="/my/teams"
          link="/my/teams/add"
          title="Teams"
        />
      </Container>

      <Footer />
    </>
  );
}
