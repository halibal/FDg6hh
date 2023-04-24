"use client";

import Image from "next/image";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { getCategories } from "@/services/api/category";
import { getProductById } from "@/services/api/product";
import CustomLayout from "@/app/customLayout";

export default async function ProductDetailPage() {
    const router = useRouter();
    const params = useParams();
    const resp = await getProductById(params.productId);
    const { author, description, name, price, cover, category_id } =
        resp.product_by_pk;
    const catResp = await getCategories();
    const categoryName = catResp.category.filter(
        (cat) => cat.id === category_id
    )[0].name;

    const addToCart = () => {};

    return (
        <CustomLayout>
            <div className="max-w-[1320px] mx-auto my-[40px]">
                <div className="flex gap-2.5 mb-[31px]">
                    <Image
                        src="/images/icon/arrow.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                        className="cursor-pointer"
                        onClick={() => router.push(`categories/${category_id}`)}
                    />
                    <h1 className="font-bold text-2xl leading-[33px] capitalize">
                        {categoryName}
                    </h1>
                </div>
                <div className="flex gap-[80px]">
                    <div className="bg-custom-3 h-[570px] p-[60px]">
                        <Image
                            src="/images/book4.png"
                            width={300}
                            height={450}
                            title={name}
                            alt={name}
                        />
                    </div>
                    <div className="flex flex-col gap-[60px] flex-1">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-2.5">
                                <h3 className="text-[40px] leading-[55px] font-semibold capitalize">
                                    {name}
                                </h3>
                                <h4 className="text-[32px] leading-[44px] font-semibold opacity-60 capitalize">
                                    {author}
                                </h4>
                            </div>
                            <div className="bg-custom-3 flex justify-center items-center rounded-full w-[44px] h-[44px]">
                                <Image
                                    src="/images/heart.svg"
                                    width={22}
                                    height={22}
                                    alt="heart icon"
                                    title="Click to Like"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h4 className="text-2xl font-bold">Summary</h4>
                            <article className="text-justify">
                                {description}
                            </article>
                        </div>
                    </div>
                </div>
                <div className="mt-[130px] flex justify-end">
                    <button
                        className="flex justify-between py-2.5 px-5 bg-custom-2 w-[400px] text-white text-xl rounded"
                        title="Add to Cart"
                    >
                        <span className="font-bold">$ {price.toFixed(2)}</span>
                        <span
                            className="font-semibold"
                            onClick={() => addToCart()}
                        >
                            Buy Now
                        </span>
                    </button>
                </div>
            </div>
        </CustomLayout>
    );
}
