import { LoginForm } from "@/components";
import { bookStoreInfo } from "@/constants";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
    return (
        <div className="h-screen flex">
            <div className="flex-1 relative hidden lg:block">
                <Image
                    src="/images/auth_banner.jpg"
                    alt="auth banner"
                    title={bookStoreInfo.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="auth-form flex-1 flex justify-center items-center">
                <div className="text-custom-4 w-100 sm:w-[400px]">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={120}
                        height={78}
                        className="m-auto mb-20"
                        title={bookStoreInfo.name}
                    />
                    <div className="my-28">
                        <h3 className="text-2xl opacity-60 font-semibold">
                            Welcome back!
                        </h3>
                        <h1 className="font-bold text-[32px] ">
                            Login to your account
                        </h1>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
