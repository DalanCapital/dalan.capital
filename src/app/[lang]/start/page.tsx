"use client";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import logo from "public/images/logo-icon.png";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useState } from "react";
import { authService } from "@/composables/authService";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { startSchema } from "@/composables/form-validations";
import { getDictionary } from "@/app/[lang]/dictionaries";


export default function Signin({ params: { lang } }: any) {
  const dict = getDictionary(lang); // en
  // Variables
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);

  // * formik
  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: startSchema,
      onSubmit(formValues) {
        requestOTP(formValues.email);
      },
    });

  // router
  const router = useRouter();

  // * request otp with werify
  const requestOTP = async (email: string) => {
    setLoading(true);
    const { auth } = await authService();
    auth.requestOTP(email, "/account/request-otp").then((res) => {
      if (res.succeed) {
        setLoading(false);
        localStorage.setItem("OTPPayload", JSON.stringify(res.results));
        router.push(lang+"/confirm");
      }
    });
  };

  // * component here
  return (
    <>
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
              <Image alt="Dalan Capital" src={logo} className="h-auto w-12" />
            </Link>
            <h1 className="mt-10 text-center text-4xl font-semibold text-slate-900">
              Welcome back
            </h1>
            <p className="mt-4 text-center leading-relaxed text-slate-600">
              Don’t have an account yet?
              <span
                className="block text-center font-medium text-slate-800 underline duration-150 hover:text-slate-900 sm:ml-1.5 sm:inline-block sm:text-left">
                Enter your email address
              </span>
              .
            </p>
            <div className="mt-10 w-full">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <div className="relative mt-1.5">
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="For example, mtrader@gmail.com"
                      className="block w-full appearance-none border border-gray-secondary-400/60 bg-gray-secondary-50 py-2.5 pl-12 pr-8 text-slate-800 placeholder-slate-500/75 outline-none duration-150 hover:bg-vanilla focus:border-gray-secondary-200 focus:bg-vanilla focus:outline-none focus:ring-gray-secondary-200"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <EnvelopeIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  </div>
                  <span className="text-red-600 text-sm">
                    {errors.email && touched.email ? errors.email : ""}
                  </span>
                </div>

                <Button
                  className="mt-8 w-full sm:mt-10 "
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Get Verify Code"}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
