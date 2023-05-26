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
          endpoint="/my/desks/accounts"
          link="/my/desks/accounts/add"
          title="Accounts"
        />
      </Container>

      <Footer />
    </>
  );
}
