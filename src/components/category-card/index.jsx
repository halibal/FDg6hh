"use client;";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function CategoryCard({ author, name, price, id }) {
    const router = useRouter();
    return (
        <div
            className="max-w-[300px] w-[300px] h-[433px] bg-custom-3 p-5 cursor-pointer flex flex-col justify-between items-center gap-5 rounded border-2 border-[rgba(9, 9, 55, 0.1)"
            onClick={() => router.push(`/products/${id}`)}
        >
            <Image
                src="/images/3.png"
                width={200}
                height={300}
                alt={name}
                title={name}
                className="min-h-[300px]"
            />
            <div className="w-full flex py-2.5 justify-between h-[75px]">
                <div className="flex flex-col gap-1 w-[150px]">
                    <h4 className="text-custom-4 text-xl font-semibold leading-[27px] capitalize truncate">
                        {name}
                    </h4>
                    <h5 className="text-custom-4 opacity-60 text-base leading-[22px] font-semibold capitalize truncate">
                        {author}
                    </h5>
                </div>
                <h4 className="text-custom-1 font-bold text-2xl leading-33px] self-end">
                    ${price.toFixed(2)}
                </h4>
            </div>
        </div>
    );
}
