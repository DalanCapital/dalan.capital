"use client";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { apiService } from "@/composables/apiService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// * react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const tableHeaders = [
  "uuid",
  "title",
  "description",
  "content",
  "logo",
  "cover",
  "aum_amount",
  "aum_currency",
  "is_public",
  "status",
  "synced_at",
];

function desk() {
  const [deskList, setDeskList] = useState([]);

  const router = useRouter();
  const changeRoute = (uuid: string) => {
    router.push(`/my/desk/${uuid}`);
  };

  const deleteItem = (uuid: string) => {
    apiService(`/my/desks/${uuid}`, { method: "delete" })
      .then((res) => {
        console.log(res);

        toast.success("Item Deleted Successfully");
        fetchDeskList();
      })
      .catch((err) => {
        console.log(err, "sss");

        toast.error("Something went wrong");
      });
  };

  const fetchDeskList = () => {
    apiService("/my/desks")
      .then((res) => {
        setDeskList(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // * get list
  useEffect(() => {
    fetchDeskList();
  }, []);
  return (
    <>
      <Header />
      <ToastContainer theme="colored" />
      <Container className="my-10">
        <div className="flex justify-end mb-5">
          <Link href="/my/desk/add">
            <Button size="md">Add new Desk +</Button>
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {tableHeaders.map((singleHeader, headerIndex) => (
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
              {deskList.map((singleItem, singleIndex) => (
                <tr
                  className="bg-white border-b hover:bg-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                  key={singleIndex}
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
                    <div className="flex space-x-2">
                      <Button size="sm" className="px-2 py-1">
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        className="px-2 py-1"
                        onClick={() => {
                          deleteItem(singleItem.uuid);
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        size="sm"
                        className="px-2 py-1"
                        onClick={() => {
                          changeRoute(singleItem.uuid);
                        }}
                      >
                        Details
                      </Button>
                    </div>
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
