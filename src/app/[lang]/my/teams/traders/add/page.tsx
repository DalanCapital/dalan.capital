"use client";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";

// * react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// * formik
import { useFormik } from "formik";
import { apiService } from "@/composables/apiService";
import { addDeskSchema } from "@/composables/form-validations";

export default function AddTrader() {
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
        // @ts-ignore
        formValues.is_public = formValues.is_public === "1" ? true : false;
        apiService("/my/teams/traders", {
          method: "post",
          body: JSON.stringify(formValues),
        })
          .then((res) => {
            router.push("/my/teams/traders");
            // toast.success(res.message);
          })
          .catch(() => {
            toast.error("Something went wrong please try again");
          });
      },
    });

  return (
    <>
      <Header />
      <ToastContainer theme="colored" />
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
                    htmlFor="brand"
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
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Privacy
                  </label>
                  <select
                    id="category"
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

                {/* <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={8}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                    value={values.description}
                    onChange={handleChange}
                  ></textarea>
                </div> */}
              </div>
              <Button size="md" type="submit" className="mt-5">
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
