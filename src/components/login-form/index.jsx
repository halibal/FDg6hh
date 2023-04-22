"use client";

import { useFormik } from "formik";
import React, { useState } from "react";
import { validationSchema } from "@/utils/loginValidation";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";
import { userLogin } from "@/services/api/user";

export default function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [initialValues, setInitialValues] = useState({
        email: getCookie("email") ? getCookie("email") : "",
        password: getCookie("password") ? getCookie("password") : "",
        remember: getCookie("password") ? ["remember"] : [],
    });

    const onSubmit = async (values) => {
        try {
            const { action_login } = await userLogin(values);
            const nextUrl = searchParams.get("next");
            router.push(nextUrl ? nextUrl : "/");
            setCookie("token", action_login.token);
            if (values.remember.includes("remember")) {
                setCookie("email", values.email);
                setCookie("password", values.password);
            } else {
                deleteCookie("email");
                deleteCookie("password");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const tClassInput =
        "bg-custom-3 ps-4 h-input-1 placeholder:opacity-40 placeholder:text-custom-4 placeholder:text-xl rounded";

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-2 my-10">
                <label htmlFor="email" className="font-semibold text-xl">
                    E-mail
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="john@mail.com"
                    className={`${tClassInput} ${
                        formik.errors.email
                            ? "focus-visible:outline-red-400"
                            : "focus-visible:outline-custom-1"
                    } ${
                        formik.errors.email && formik.touched.email
                            ? "border-2 border-red-400"
                            : ""
                    }`}
                    autoComplete="email"
                />
                {formik.errors.email && formik.touched.email ? (
                    <div className="text-red-400">*{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="flex flex-col gap-2 my-10">
                <label htmlFor="password" className="font-semibold text-xl">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="••••••••"
                    className={`${tClassInput} ${
                        formik.errors.password
                            ? "focus-visible:outline-red-400"
                            : "focus-visible:outline-custom-1"
                    } ${
                        formik.errors.password && formik.touched.password
                            ? "border-2 border-red-400"
                            : ""
                    }`}
                    autoComplete="current-password"
                />
                {formik.errors.password && formik.touched.password ? (
                    <div className="text-red-400">
                        *{formik.errors.password}
                    </div>
                ) : null}
            </div>
            <div className="mt-2 flex items-center gap-1">
                <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="remember"
                    checked={formik.values.remember.includes("remember")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border-4 border-custom-1  h-4 w-4"
                />
                <label
                    htmlFor="remember"
                    className="text-custom-1 font-bold pl-[0.15rem] hover:cursor-pointer"
                >
                    Remember me
                </label>
            </div>
            <div className="flex flex-col gap-2 mt-40">
                <button
                    type="submit"
                    className="bg-custom-2 text-white font-semibold h-input-1 text-2xl rounded hover:opacity-95"
                >
                    Login
                </button>
                <button
                    type="button"
                    className="text-custom-1 font-semibold border-2 border-custom-1 h-input-1 text-2xl rounded"
                    onClick={() => router.push("/register")}
                >
                    Register
                </button>
            </div>
        </form>
    );
}
