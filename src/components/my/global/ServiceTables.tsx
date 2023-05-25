"use client";

import { Button } from "@/components/Button";
import { apiService } from "@/composables/apiService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";

// * prop types
export interface IServiceTableProps {
  endpoint: string;
  title: string;
  link: string;
}
export default function ServiceTables(props: IServiceTableProps) {
  // * variables
  const [list, setList] = useState([]);

  // * get list
  const fetchList = () => {
    apiService(props.endpoint)
      .then((res) => {
        setList(res.results);
      })
      .catch(() => {
        toast.error("Something went wrong, please try again");
      });
  };

  // * change route and go to single
  const router = useRouter();
  const changeRoute = (uuid: string) => {
    router.push(`/my/desks/accounts/${uuid}`);
  };

  // * get list in useEffect
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-semibold">{props.title}</h1>
        <Link href={props.link}>
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
                {Object.values(singleItem).map((singleTD: any, singleTDIdx) => (
                  <td key={`item-${singleTDIdx}`} className="px-6 py-4">
                    {typeof singleTD === "boolean"
                      ? singleTD
                        ? "Yes"
                        : "No"
                      : singleTD}
                  </td>
                ))}
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
                    <DeleteModal
                      endpoint={props.endpoint}
                      uuid={singleItem.uuid}
                    />
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
    </>
  );
}
