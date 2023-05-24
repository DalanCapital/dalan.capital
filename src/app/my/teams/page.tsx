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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function TeamsList() {
  const [list, setList] = useState([]);

  const router = useRouter();
  const changeRoute = (uuid: string) => {
    router.push(`/my/teams/${uuid}`);
  };

  const deleteItem = (uuid: string) => {
    apiService(`/my/teams/${uuid}`, { method: "delete" })
      .then(() => {
        toast.success("Item Deleted Successfully");
        fetchTeamsList();
      })
      .catch((res) => {
        toast.error(res.toString());
      });
  };

  const fetchTeamsList = () => {
    apiService("/my/teams")
      .then((res) => {
        setList(res.results);
      })
      .catch(() => {
        toast.error("Something went wrong, please try again");
      });
  };

  // * get list
  useEffect(() => {
    fetchTeamsList();
  }, []);

  function DeleteModal({ uuid }: { uuid: string }) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }

    return (
      <>
        <Button size="sm" className="px-2 py-1" onClick={openModal}>
          Delete
        </Button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-none bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Are you sure you want to delete this item?
                    </Dialog.Title>

                    <div className="mt-4 space-x-2">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-none border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          deleteItem(uuid);
                        }}
                      >
                        Yes, Delete
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-none border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      >
                        No, Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }

  return (
    <>
      <Header />
      <Container className="my-10">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-semibold">Teams</h1>
          <Link href="/my/teams/add">
            <Button size="md">Add +</Button>
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {list.length > 0
                  ? Object.keys(list[0]).map((singleHeader, headerIndex) => (
                      <th
                        key={`header-${headerIndex}`}
                        scope="col"
                        className="px-6 py-3"
                      >
                        {singleHeader}
                      </th>
                    ))
                  : ""}
                {list.length > 0 ? (
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            <tbody>
              {list.map((singleItem: any, singleIndex) => (
                <tr
                  className="bg-white border-b hover:bg-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                  key={singleIndex}
                >
                  {Object.values(singleItem).map(
                    (singleTD: any, singleTDIdx) => (
                      <td key={`item-${singleTDIdx}`} className="px-6 py-4">
                        {typeof singleTD === "boolean"
                          ? singleTD
                            ? "Yes"
                            : "No"
                          : singleTD}
                      </td>
                    )
                  )}
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="px-2 py-1"
                        onClick={() => {
                          changeRoute(singleItem.uuid);
                        }}
                      >
                        Edit
                      </Button>
                      <DeleteModal uuid={singleItem.uuid} />
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
