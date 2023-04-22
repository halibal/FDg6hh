"use client";

import { useFormik } from "formik";
import React, { useState } from "react";
import { validationSchema } from "@/utils/registerValidation";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [initialValues, setInitialValues] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const onSubmit = (values) => {
        try {
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
                <label htmlFor="fullName" className="font-semibold text-xl">
                    Name
                </label>
                <input
                    type="fullName"
                    name="fullName"
                    id="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="John Doe"
                    className={`${tClassInput} ${
                        formik.errors.fullName
                            ? "focus-visible:outline-red-400"
                            : "focus-visible:outline-custom-1"
                    } ${
                        formik.errors.fullName && formik.touched.fullName
                            ? "border-2 border-red-400"
                            : ""
                    }`}
                    autoComplete="full-name"
                />
                {formik.errors.fullName && formik.touched.fullName ? (
                    <div className="text-red-400">
                        *{formik.errors.fullName}
                    </div>
                ) : null}
            </div>
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
            <div className="flex flex-col gap-2 mt-40">
                <button
                    type="submit"
                    className="bg-custom-2 text-white font-semibold h-input-1 text-2xl rounded hover:opacity-95"
                >
                    Register
                </button>
                <button
                    type="button"
                    className="text-custom-1 font-semibold border-2 border-custom-1 h-input-1 text-2xl rounded"
                    onClick={() => router.push("/login")}
                >
                    Login
                </button>
            </div>
        </form>
    );
}
