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
});
