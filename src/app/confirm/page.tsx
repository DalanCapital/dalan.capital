"use client";
import Head from "next/head";
import Link from "next/link";
// import { UserIcon } from "@heroicons/react/24/outline";
// import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import logo from "public/images/logo-icon.png";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useState } from "react";
import { authService } from "@/composables/authService";
import { IVerifyOTPPayload } from "@werify/id-ts/dist/modules/public/verifyOTP/interfaces/IVerifyOTP";

// * react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  let [code, setCode] = useState("");
  let [loading, setLoading] = useState(false);

  const verifyOTP = async () => {
    setLoading(true);
    const { auth } = await authService();

    // Otp payload
    let OTPPayload = JSON.parse(
      localStorage.getItem("OTPPayload") as string
    ) as IVerifyOTPPayload;
    OTPPayload.otp = code;

    auth.verifyOTP(OTPPayload, "/account/verify-otp").then((res) => {
      if (res.succeed) {
        toast.success("Welcome to Dalan");
        localStorage.removeItem("OTPPayload");
        localStorage.setItem("user", JSON.stringify(res.results));
        setTimeout(() => {
          location.replace("/");
          setLoading(false);
        }, 2000);
      } else {
        setLoading(false);
        toast.error("Something went wrong please try again");
      }
    });
  };
  return (
    <>
      <Head>
        <title>Dalan Capital - Confirm</title>
      </Head>

      <ToastContainer theme="colored" />

      <section className="relative flex min-h-screen items-center justify-center bg-amber-100 py-16 sm:py-20">
        <Link
          href="/"
          className="group absolute right-8 top-8 hidden cursor-pointer items-center justify-center border border-gray-secondary-400/60 bg-gray-secondary-50 p-2 transition duration-150 ease-in-out hover:bg-vanilla focus:outline-none sm:flex lg:top-12 lg:right-12"
        >
          <XMarkIcon className="h-5 w-5 text-slate-800" />
        </Link>
        <Container className="w-full">
          <div className="mx-auto flex max-w-lg flex-col items-center">
            <Link href="/" aria-label="Home" className="flex flex-shrink-0">
              <Image alt="logo" src={logo} className="h-auto w-12 " />
            </Link>
            <h1 className="mt-10 text-center text-4xl font-semibold text-slate-900">
              Verify your identity
            </h1>
            <div className="mt-10 w-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-slate-700"
                >
                  Code
                </label>
                <div className="relative mt-1.5">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={6}
                    placeholder="For Example, 413850"
                    className="block w-full appearance-none border border-gray-secondary-400/60 bg-gray-secondary-50 py-2.5 pl-12 pr-8 text-slate-800 placeholder-slate-500/75 outline-none duration-150 hover:bg-vanilla focus:border-gray-secondary-200 focus:bg-vanilla focus:outline-none  focus:ring-gray-secondary-200"
                    value={code}
                    onInput={(e: any) => {
                      setCode(e.target.value);
                    }}
                  />
                  <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
              <Button
                className="mt-8 w-full sm:mt-10"
                disabled={loading && code.length <= 6}
                onClick={verifyOTP}
              >
                Confirm Code
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
