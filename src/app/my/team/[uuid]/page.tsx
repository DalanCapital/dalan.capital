"use client";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { apiService } from "@/composables/apiService";
import { useParams } from "next/navigation";

const mockData = {
  uuid: "9920f1a1-b372-4f55-bfad-ee6065134687",
  title: "My First Desk",
  description: null,
  content: null,
  logo: null,
  cover: null,
  aum_amount: null,
  aum_currency: null,
  is_public: false,
  status: 10000,
  synced_at: null,
};

export default function singleDesk() {
  const param = useParams();
  console.log(param.uuid);
  apiService(`/my/teams/${param.uuid}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <Header />
      <Container className="my-10"></Container>
      <Footer />
    </>
  );
}
