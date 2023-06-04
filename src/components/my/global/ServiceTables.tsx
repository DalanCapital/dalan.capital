"use client";

import { Button } from "@/components/Button";
import { apiService } from "@/composables/apiService";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";

// * prop types
export interface IServiceTableProps {
  endpoint: string;
  title: string;
  link: string;
}

export interface IStatus {
  loading: boolean;
  error: boolean;
  empty: boolean;
}
export default function ServiceTables(props: IServiceTableProps) {
  const lang = useParams().lang;
  // * variables
  const [list, setList] = useState([]);
  const [status, setStatus] = useState<IStatus>({} as IStatus);

  // * get list
  const fetchList = () => {
    setStatus({ loading: true, error: false, empty: false });
    apiService(props.endpoint)
      .then((res) => {
        setStatus({ loading: true, error: false, empty: false });
        if (res.succeed){
          if(res.results.length > 0){
            setList(res.results);
            setStatus({ loading: false, error: false, empty: false });
          }else{
            setStatus({ loading: false, error: false, empty: true });
          }
        } else {
          setStatus({ loading: false, error: true, empty: false });
          toast.error("Something went wrong!");
        }
      })
      .catch((err) => {
        setStatus({ loading: false, error: true, empty: false });
        toast.error(err.toString());
      });
  };

  // * change route and go to single
  const router = useRouter();
  const changeRoute = (uuid: string) => {
    router.push(lang+`${props.endpoint}/${uuid}`);
  };

  const deleteItem = (uuid: string) => {
    console.log("Delete Called");
    const findedIndex = list.findIndex((x: any) => {
      return x.uuid === uuid;
    });
    if (list.length >= 2) {
      setList((list) => list.filter((item, idx) => idx !== findedIndex));
    } else {
      setStatus({ empty: true, loading: false, error: false });
    }
  };

  // * get list in useEffect
  useEffect(() => {
    fetchList();
  }, []);

  function TableTitle() {
    return (
      <>
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-semibold">{props.title}</h1>
          <Link href={props.link}>
            <Button size="md">Add +</Button>
          </Link>
        </div>
      </>
    );
  }

  if (status.loading) {
    return (
      <>
        <TableTitle />

        <div
          role="status"
          className="p-4 space-y-4 divide-y divide-gray-200 rounded-none shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
  }

  if (status.error) {
    return (
      <>
        <TableTitle />
        <div className="text-center text-red-500 text-xl">Error</div>
      </>
    );
  }

  if (status.empty) {
    return (
      <>
        <TableTitle />
        <div className="text-center text-xl">No Data Found!</div>
      </>
    );
  }

  if (status.loading === false && list.length !== 0) {
    return (
      <>
        <TableTitle />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {Object.keys(list[0]).map((singleHeader, headerIndex) => (
                  <th
                    key={`header-${headerIndex}`}
                    scope="col"
                    className="px-6 py-3"
                  >
                    {singleHeader}
                  </th>
                ))}
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((singleItem: any, singleIndex) => (
                <tr
                  className="bg-white border-b hover:bg-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                  key={singleItem.uuid}
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
                      <DeleteModal
                        endpoint={props.endpoint}
                        uuid={singleItem.uuid}
                        onDelete={(uuid: string) => {
                          deleteItem(uuid);
                        }}
                      />
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

  return (
    <>
      <TableTitle />
      <div className="text-center text-xl">No Data Found!</div>
    </>
  );
}
