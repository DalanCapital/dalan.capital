import { Fragment } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure, Transition, Popover, Menu } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import logo from '@/images/logo-dark.png'
import logoIcon from '@/images/logo-icon.png'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Sign in', href: '/signin' },
  { label: 'Sign up', href: '/signup' },
  { label: 'Password reset', href: '/password-reset' },
  { label: '404', href: '/404' },
]

export function Header() {
  const router = useRouter()

  function MenuIcon({ open }) {
    return (
      <span
        className={`relative h-3.5 w-4 transform transition duration-500 ease-in-out`}
      >
        <span
          className={clsx(
            open && 'top-1.5 left-1/2 w-0',
            'absolute top-0 left-0 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-slate-900'
          )}
        />
        <span
          className={clsx(
            open && 'rotate-45',
            'absolute left-0 top-1.5 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900'
          )}
        />
        <span
          className={clsx(
            open && '-rotate-45',
            'absolute left-0 top-1.5 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900'
          )}
        />
        <span
          className={clsx(
            open && 'top-1.5 left-1/2 w-0',
            'absolute left-0 top-3 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900'
          )}
        />
      </span>
    )
  }

  function MobileNav() {
    return (
      <Popover>
        <Popover.Button
          className="relative z-50 flex items-center justify-center p-3 transition duration-300 ease-in-out border cursor-pointer group border-gray-secondary-400/75 bg-gray-secondary-50 focus:outline-none md:hidden"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon open={open} />}
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
            <Popover.Overlay className="fixed inset-0 z-20 bg-opacity-25 bg-slate-900 backdrop-blur" />
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
              className="absolute inset-x-0 top-0 z-30 px-5 pt-24 pb-8 overflow-hidden bg-amber-100"
            >
              <div>
                <div className="flex flex-col divide-y divide-gray-secondary-400/75">
                  {links.map((link) => (
                    <Link key={`${link.name}-mobile`} href={link.href}>
                      <a
                        className={
                          'block px-4 pt-4 pb-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900'
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
                              ? 'bg-amber-50 text-slate-900'
                              : 'text-slate-700 hover:bg-amber-50  hover:text-slate-900'
                          }`}
                        >
                          <span>Pages</span>
                          <ChevronRightIcon
                            className={`ml-2 h-5 w-5 duration-300 ${
                              open
                                ? 'rotate-90 text-slate-900'
                                : 'text-slate-600/90 group-hover:text-slate-900'
                            }`}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>

                        <Disclosure.Panel className="z-20 px-4 space-y-0">
                          {pages.map((subLink) => (
                            <div
                              className="mt-2"
                              key={`${subLink.label}-dropdown-desktop`}
                            >
                              <Link href={subLink.href}>
                                <a className="block px-3 py-3 font-medium transition duration-300 ease-in-out text-slate-700 hover:bg-amber-50 hover:text-slate-900">
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
                    href="/signin"
                    variant="ghost"
                    className="w-full"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    )
  }

  return (
    <header className="h-24 bg-amber-100">
      <Container className="flex items-center w-full h-full border-b border-gray-secondary-300/60">
        <nav className="relative z-50 flex items-center justify-between w-full ">
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link href="/" aria-label="Home">
              <a className="flex items-center flex-shrink-0">
                <Image
                  src={logo}
                  className="w-auto h-7 sm:h-8 md:hidden lg:block lg:h-9"
                />
                <Image
                  src={logoIcon}
                  className="hidden w-auto h-7 md:block lg:hidden"
                />
              </a>
            </Link>
            <div className="items-center hidden space-x-3 md:flex lg:space-x-4">
              {links.map((link) => (
                <Link key={`${link.label}-desktop`} href={link.href}>
                  <a
                    className={clsx(
                      router.pathname == link.href
                        ? 'bg-amber-50 text-slate-900'
                        : 'text-slate-700 hover:bg-amber-50 hover:text-slate-900',
                      'inline-block px-4 py-2 font-medium'
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
                          ? 'bg-amber-50 text-slate-900'
                          : 'text-slate-700 hover:bg-amber-50  hover:text-slate-900'
                      }`}
                    >
                      <span>Pages</span>
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 duration-300 ${
                          open
                            ? 'rotate-180 text-slate-900'
                            : 'text-slate-600/90 group-hover:text-slate-900'
                        }`}
                        aria-hidden="true"
                      />
                    </Menu.Button>

                    <Menu.Items className="absolute right-0 z-20 mt-3 w-52 space-y-1 bg-gray-secondary-50 p-2.5 drop-shadow filter">
                      {pages.map((subLink, i) => (
                        <Menu.Item key={`${subLink.label}-dropdown-desktop`}>
                          <Link href={subLink.href}>
                            <a
                              className={`block py-3.5 px-5 font-medium ${
                                router.pathname == subLink.href
                                  ? 'bg-gray-secondary-100/60 text-slate-900'
                                  : 'text-slate-700 transition duration-300 ease-in-out hover:bg-gray-secondary-100/60 hover:text-slate-900'
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
                <Link href="/signin">
                  <a className="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
                    Sign in
                  </a>
                </Link>
              </div>
              <Button size="md" href="/signup">
                Sign up free
              </Button>
            </div>
          </div>
        </nav>
        <div className="ml-4 md:hidden">
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
