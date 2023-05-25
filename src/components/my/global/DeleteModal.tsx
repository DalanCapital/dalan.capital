"use client";
import { Button } from "@/components/Button";
import { apiService } from "@/composables/apiService";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { toast } from "react-toastify";

export interface IDeleteModal {
  endpoint: string;
  uuid: string;
  onDelete?: any;
}

export default function DeleteModal(props: IDeleteModal) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const deleteItem = () => {
    apiService(`${props.endpoint}/${props.uuid}`, { method: "delete" })
      .then(() => {
        toast.success("Item Deleted Successfully");
        closeModal();
        props.onDelete(props.uuid);
      })
      .catch((err) => {
        toast.error(err.toString());
      });
  };

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
                        deleteItem();
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
