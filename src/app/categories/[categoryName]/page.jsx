import { CategoryCard } from "@/components";
import Image from "next/image";
import React from "react";

export default function CategoryPage() {
    return (
        <div className="max-w-[1320px] mx-auto my-[40px] flex flex-col flex-wrap gap-[31px]">
            <div className="flex gap-2.5">
                <Image
                    src="/images/icon/arrow.svg"
                    width={20}
                    height={20}
                    title="Earlier Page Name"
                    alt="Earlier Page Name"
                    className="cursor-pointer"
                />
                <h1 className="font-bold text-2xl leading-[33px]">
                    Best Seller
                </h1>
            </div>
            <div className="flex flex-wrap gap-[40px]">
                {/* map over related category array */}
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    );
}
