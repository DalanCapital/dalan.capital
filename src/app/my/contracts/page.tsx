"use client";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import ServiceTables from "@/components/my/global/ServiceTables";

export default function AccountsList() {
  return (
    <>
      <Header />
      <Container className="my-10">
        <ServiceTables
          endpoint="/my/contracts"
          link="/my/contracts/add"
          title="Contracts"
        />
      </Container>

      <Footer />
    </>
  );
}
