"use client";

import { CategoryCard } from "@/components";
import Image from "next/image";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { getCategories } from "@/services/api/category";
import { getProductsByCategoryId } from "@/services/api/product";

export default async function CategoryPage() {
    const router = useRouter();
    const params = useParams();
    const resp = await getProductsByCategoryId(params.categoryId);
    const books = resp.product;
    const catResp = await getCategories();
    const categoryName = catResp.category.filter(
        (cat) => cat.id === +params.categoryId
    )[0].name;

    return (
        <div className="max-w-[1320px] mx-auto my-[40px] flex flex-col flex-wrap gap-[31px]">
            <div className="flex gap-2.5">
                <Image
                    src="/images/icon/arrow.svg"
                    width={20}
                    height={20}
                    alt="arrow"
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />
                <h1 className="font-bold text-2xl leading-[33px] capitalize">
                    {categoryName}
                </h1>
            </div>
            <div className="flex flex-wrap gap-[40px]">
                {books.map((book) => (
                    <CategoryCard key={book.id} {...book} />
                ))}
            </div>
        </div>
    );
}
