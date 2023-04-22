import * as Yup from "yup";

export const validationSchema = Yup.object({
    fullName: Yup.string().required("Name cannot be empty"),
    email: Yup.string().email().required("Email cannot be empty"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters")
        .matches(/^[a-zA-Z0-9]*$/, "Password must only include alphanumeric characters")
        .required("Password field cannot be empty"),
});