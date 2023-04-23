import { bookStoreInfo } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Header() {
    return (
        <div className="w-full h-[120px] flex justify-between items-center shadow-[0_8px_10px_rgba(9,9,55,0.02)] px-[60px]">
            <div>
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={60}
                    height={39}
                    title={bookStoreInfo.name}
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
                    placeholder="Search"
                    className="w-full h-full bg-transparent ps-[50px] text-xl focus-visible:outline-custom-1"
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
                        title="like"
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
