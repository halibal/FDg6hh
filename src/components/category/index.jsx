"use client";

import React from "react";
import { BookCard } from "..";
import Link from "next/link";
import { getProductsByCategoryId } from "@/services/api/product";

export default async function Category({ id, name }) {
    const resp = await getProductsByCategoryId(id);
    const books = resp.product.slice(0, 4);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <h2 className="text-custom-4 font-bold text-[32px] leading-[44px] capitalize">
                    {name}
                </h2>
                <Link href={`/categories/${id}`}>
                    <button className="text-custom-2 bg-none font-bold text-xl px-5">
                        View All
                    </button>
                </Link>
            </div>
            <div className="flex gap-5 flex-nowrap">
                {books.map((book) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </div>
        </div>
    );
}
