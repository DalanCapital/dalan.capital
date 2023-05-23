"use client";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";

// * react toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// * formik
import { useFormik } from "formik";
import { apiService } from "@/composables/apiService";
import { addDeskSchema } from "@/composables/form-validations";
import { useState } from "react";

export default function AddTeam() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  // * formik and form submition
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        is_public: 0,
      },
      validationSchema: addDeskSchema,
      onSubmit(formValues) {
        setLoading(true);
        // @ts-ignore
        formValues.is_public = formValues.is_public === "1" ? true : false;
        apiService("/my/teams", {
          method: "post",
          body: JSON.stringify(formValues),
        })
          .then((res) => {
            toast.success("Item added successfully");
            setTimeout(() => {
              router.push("/my/teams");
            }, 1500);
          })
          .catch(() => {
            setLoading(false);
            toast.error("Something went wrong please try again");
          });
      },
    });

  return (
    <>
      <Header />
      <Container className="my-10">
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a new Item
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="team title here"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="mt-2 text-sm text-red-600">
                    {errors.title && touched.title ? errors.title : ""}
                  </span>
                </div>
                <div>
                  <label
                    htmlFor="privacy"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Privacy
                  </label>
                  <select
                    id="privacy"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="is_public"
                  >
                    <option>Select category</option>
                    <option value={0}>Private</option>
                    <option value={1}>Public</option>
                  </select>
                </div>
              </div>
              <Button
                disabled={loading}
                size="md"
                type="submit"
                className="mt-5"
              >
                Submit
              </Button>
            </form>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
