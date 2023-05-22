"use client";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { apiService } from "@/composables/apiService";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const mockData = [
  {
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
  },
  {
    uuid: "9920f1a1-b372-4f55-bfad-ee6065134687",
    title: "My First Desk222",
    description: null,
    content: null,
    logo: null,
    cover: null,
    aum_amount: null,
    aum_currency: null,
    is_public: false,
    status: 10000,
    synced_at: null,
  },
  {
    uuid: "9920f1a1-b372-4f55-bfad-ee6065134687",
    title: "My First Desk222",
    description: null,
    content: null,
    logo: null,
    cover: null,
    aum_amount: null,
    aum_currency: null,
    is_public: false,
    status: 10000,
    synced_at: null,
  },
];

const mockHeaders = ["uuid", "title", "actions"];

function desk() {
  const router = useRouter();

  const changeRoute = (uuid: string) => {
    router.push(`/my/teams/${uuid}`);
  };

  apiService("/my/teams")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <Header />
      <Container className="my-10">
        <div className="flex justify-end mb-5">
          <Link href="/my/team/add">
            <Button size="md">Add new Desk +</Button>
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {Object.keys(mockData[0]).map((singleHeader, headerIndex) => (
                  <th
                    key={`header-${headerIndex}`}
                    scope="col"
                    className="px-6 py-3"
                  >
                    {singleHeader}
                  </th>
                ))}
                <th scope="col" className="px-6 py-3">
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((singleItem, singleIndex) => (
                <tr
                  className="bg-white border-b hover:bg-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                  key={singleIndex}
                  onClick={() => {
                    changeRoute(singleItem.uuid);
                  }}
                >
                  {/* <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {singleItem.title}
                  </th> */}
                  {Object.values(singleItem).map((singleTD, singleTDIdx) => (
                    <td key={`item-${singleTDIdx}`} className="px-6 py-4">
                      {singleTD}
                    </td>
                  ))}
                  <td className="px-6 py-4">
                    <Dropdown label inline>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default desk;
