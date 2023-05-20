import * as yup from "yup";

export const startSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("Your Email is not valid"),
});
