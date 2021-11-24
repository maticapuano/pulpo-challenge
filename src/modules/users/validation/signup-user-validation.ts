import * as yup from "yup";

export const signUpUserValidation = yup.object({
  full_name: yup.string().strict().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});
