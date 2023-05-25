"use client";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ServiceTables from "@/components/my/global/ServiceTables";

export default function DeskList() {
  return (
    <>
      <Header />
      <Container className="my-10">
        <ServiceTables
          endpoint="/my/desks"
          link="/my/desks/add"
          title="Desks"
        />
      </Container>

      <Footer />
    </>
  );
}
