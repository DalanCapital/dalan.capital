import * as yup from "yup";

export const startSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("Your Email is not valid"),
});

export const addDeskSchema = yup.object().shape({
  title: yup.string().required("This field is required"),
  description: yup.string().notRequired(),
  is_public: yup.boolean().notRequired(),
  // logo: yup
  //   .mixed()
  //   .test("FILE_SIZE", "File too big!", (val: any) => val && val.size <= 50000)
  //   .test(
  //     "FILE_Type",
  //     "Invalid file type",
  //     (val: any) => val && ["image/png", "image.jpeg"].includes(val.type)
  //   ),
});
