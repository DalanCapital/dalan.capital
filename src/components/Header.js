// * only render on client side
"use client";

// * imports
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Disclosure, Transition, Popover, Menu } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// * react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import logo from "public/images/logo-dark.png";
import logoIcon from "public/images/logo-icon.png";
import UserMenu from "./user/UserMenu";

// * mock data
const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "features" },
  { label: "Solutions", href: "solutions" },
  { label: "Pricing", href: "pricing" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

const more = [
  { label: "Newsroom", href: "blog/newsroom" },
  { label: "Blog", href: "blog" },
  { label: "Documentation", href: "docs" },
  { label: "Open APIs", href: "docs/apis" },
];
// * mock data

// * header component
export function Header() {
  const lang = useParams().lang;
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  function MenuIcon({ open }) {
    return (
      <span
        className={`relative h-3.5 w-4 transform transition duration-500 ease-in-out`}
      >
        <span
          className={clsx(
            open && "top-1.5 left-1/2 w-0",
            "absolute top-0 left-0 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-slate-900"
          )}
        />
        <span
          className={clsx(
            open && "rotate-45",
            "absolute left-0 top-1.5 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900"
          )}
        />
        <span
          className={clsx(
            open && "-rotate-45",
            "absolute left-0 top-1.5 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900"
          )}
        />
        <span
          className={clsx(
            open && "top-1.5 left-1/2 w-0",
            "absolute left-0 top-3 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900"
          )}
        />
      </span>
    );
  }

  function MobileNav() {
    return (
      <Popover>
        <Popover.Button
          className="group relative z-50 flex cursor-pointer items-center justify-center border border-gray-secondary-400/75 bg-gray-secondary-50 p-3 transition duration-300 ease-in-out focus:outline-none md:hidden"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon />}
        </Popover.Button>

        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-20 bg-slate-900 bg-opacity-25 backdrop-blur" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100 "
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100 "
            leaveTo="opacity-0 scale-90"
          >
            <Popover.Panel
              as="div"
              className="absolute inset-x-0 top-0 z-30 overflow-hidden bg-amber-100 px-5 pt-24 pb-8"
            >
              <div>
                <div className="flex flex-col divide-y divide-gray-secondary-400/75">
                  {links.map((link, index) => (
                    <Link
                      legacyBehavior
                      key={`${index}-mobile`}
                      href={`${lang}/${link.href}`}
                    >
                      <a
                        className={
                          "block px-4 pt-4 pb-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900"
                        }
                      >
                        {link.label}
                      </a>
                    </Link>
                  ))}

                  <Disclosure as="div" className="relative">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`group flex w-full items-center justify-between px-4 pb-2 pt-4 font-medium duration-150 ease-in-out ${
                            open
                              ? "bg-amber-50 text-slate-900"
                              : "text-slate-700 hover:bg-amber-50  hover:text-slate-900"
                          }`}
                        >
                          <span>More</span>
                          <ChevronRightIcon
                            className={`ml-2 h-5 w-5 duration-300 ${
                              open
                                ? "rotate-90 text-slate-900"
                                : "text-slate-600/90 group-hover:text-slate-900"
                            }`}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>

                        <Disclosure.Panel className="z-20 space-y-0 px-4">
                          {more.map((subLink) => (
                            <div
                              className="mt-2"
                              key={`${subLink.label}-dropdown-desktop`}
                            >
                              <Link
                                legacyBehavior
                                href={`${lang}/${subLink.href}`}
                              >
                                <a className="block px-3 py-3 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-amber-50 hover:text-slate-900">
                                  {subLink.label}
                                </a>
                              </Link>
                            </div>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="mt-6">
                  <Button
                    size="md"
                    href={`${lang}/contact`}
                    variant="ghost"
                    className="w-full"
                  >
                    +447888872710
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    );
  }

  // * handle if user had token and user menu OBJECT
  function LoggedInMenu() {
    if (
      hydrated &&
      typeof window !== "undefined" &&
      localStorage.getItem("user")
    ) {
      return (
        <>
          <UserMenu lang={lang}/>
        </>
      );
    }
    return (
      <>
        <Button size="md" href={`${lang}/start`}>
          Start Here
        </Button>
      </>
    );
  }

  return (
    <header className="h-24 sticky top-0 z-50 bg-amber-100">
      <ToastContainer theme="colored" />

      <Container className="flex h-full w-full items-center border-b border-gray-secondary-300/60">
        <nav className="relative z-50 flex w-full items-center justify-between ">
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link legacyBehavior href={`${lang}/`} aria-label="Home">
              <a className="flex flex-shrink-0 items-center">
                <Image
                  src={logo}
                  alt="Dalan logo"
                  className="h-7 w-auto sm:h-8 md:hidden lg:block lg:h-9"
                />
                <Image
                  src={logoIcon}
                  alt="Dalan logo"
                  className="hidden h-7 w-auto md:block lg:hidden"
                />
              </a>
            </Link>
            <div className="hidden items-center space-x-3 md:flex lg:space-x-4">
              {links.map((link) => (
                <Link
                  legacyBehavior
                  key={`${link.label}-desktop`}
                  href={`${lang}/${link.href}`}
                >
                  <a
                    className={clsx(
                      pathname == link.href
                        ? "bg-amber-50 text-slate-900"
                        : "text-slate-700 hover:bg-amber-50 hover:text-slate-900",
                      "inline-block px-4 py-2 font-medium"
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}

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
                      <span>More</span>
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
                          <Link legacyBehavior href={`${lang}/${subLink.href}`}>
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
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block">
                <Link legacyBehavior href={`${lang}/contact`}>
                  <a className="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
                    +44 7888 872710
                  </a>
                </Link>
              </div>
              <LoggedInMenu />
            </div>
          </div>
        </nav>
        <div className="ml-4 md:hidden">
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
