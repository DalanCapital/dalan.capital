"use client";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const more = [
  { label: "Sign out", href: "#" },
  // { label: "Blog", href: "/blog" },
  // { label: "Documentation", href: "/docs" },
  // { label: "Open APIs", href: "/docs/apis" },
];

function UserMenu() {
  const pathname = usePathname();
  const [userData, setUserData] = useState({});
  return (
    <>
      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            <Menu.Button
              className={`group flex items-center px-4  py-2  font-medium duration-150 ease-in-out ${
                open
                  ? "bg-amber-50 text-slate-900"
                  : "text-slate-700 hover:bg-amber-50  hover:text-slate-900"
              }`}
            >
              <UserCircleIcon className="w-8" />
              <ChevronDownIcon
                className={`ml-2 h-5 w-5 duration-300 ${
                  open
                    ? "rotate-180 text-slate-900"
                    : "text-slate-600/90 group-hover:text-slate-900"
                }`}
                aria-hidden="true"
              />
            </Menu.Button>

            <Menu.Items className="absolute right-0 z-20 mt-3 w-52 space-y-1 bg-gray-secondary-50 p-2.5 drop-shadow filter">
              {more.map((subLink, i) => (
                <Menu.Item key={`${subLink.label}-dropdown-desktop`}>
                  <Link legacyBehavior href={subLink.href}>
                    <a
                      className={`block py-3.5 px-5 font-medium ${
                        pathname == subLink.href
                          ? "bg-gray-secondary-100/60 text-slate-900"
                          : "text-slate-700 transition duration-300 ease-in-out hover:bg-gray-secondary-100/60 hover:text-slate-900"
                      }`}
                    >
                      {subLink.label}
                    </a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </>
        )}
      </Menu>
    </>
  );
}

export default UserMenu;
