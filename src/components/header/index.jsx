"use client";

import { bookStoreInfo } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function Header() {
    const searchInputRef = useRef(null);
    const router = useRouter();

    const handleSearch = (event) => {
        const searchValue = searchInputRef.current.value;
        console.log(searchValue);
        searchInputRef.current.value = "";
    };

    const handleKeyDown = (event) => {
        if (event.code === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="w-full h-[120px] flex justify-between items-center shadow-[0_8px_10px_rgba(9,9,55,0.02)] md:px-[60px] gap-2">
            <div>
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={60}
                    height={39}
                    title={bookStoreInfo.name}
                    onClick={() => router.push("/")}
                    className="cursor-pointer min-w-[60px] min-h-[39px]"
                />
            </div>
            <div className="w-[800px] h-[50px] bg-custom-3 relative">
                <Image
                    src="/images/search.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="absolute top-1/2 translate-y-[-50%] left-5"
                />
                <input
                    type="text"
                    name="search"
                    ref={searchInputRef}
                    placeholder="Search"
                    className="w-full h-full bg-transparent ps-[50px] text-xl focus-visible:outline-custom-1"
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex gap-4">
                <div className="w-[50px] h-[50px] bg-custom-3 flex items-center justify-center rounded hover:cursor-pointer">
                    <Image
                        src="/images/user.png"
                        alt="user icon"
                        width={24}
                        height={24}
                        title="my profile"
                    />
                </div>
                <div className="w-[50px] h-[50px] bg-custom-3 flex items-center justify-center rounded hover:cursor-pointer">
                    <Image
                        src="/images/heart.png"
                        alt="heart icon"
                        width={24}
                        height={24}
                        title="liked"
                    />
                </div>
                <div className="w-[50px] h-[50px] bg-custom-3 flex items-center justify-center rounded hover:cursor-pointer">
                    <Image
                        src="/images/shopping_cart.png"
                        alt="shopping cart icon"
                        width={24}
                        height={24}
                        title="my cart"
                    />
                </div>
            </div>
        </div>
    );
}
