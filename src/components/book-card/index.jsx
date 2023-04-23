import { settings } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const getProductCoverImage = async (fileName) => {
    const resp = await fetch(`${settings.baseUrl}/cover_image`, {
        method: "POST",
        body: JSON.stringify({
            fileName: fileName,
        }),
    });
    return resp.json();
};

export default async function BookCard({ author, name, price, cover, id }) {
    const resp = await getProductCoverImage(cover);
    const coverImage = resp.action_product_image.url;

    return (
        <Link href={`/products/${id}`}>
            <div
                className="max-w-[320px] w-[320px] h-[200px] bg-custom-3 rounded flex gap-5 p-2.5 cursor-pointer"
                title={name}
            >
                {/* image url will stay in alternate, endpoint message as follows: "Access denied. Request has expired" — "https://s3.piton.com.tr/assignment/dune.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230423%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230423T144258Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=e37ad10c45b95ca9d98a42f6210462c16df4f390995c719e9825cbf6e3aa6124" */}
                <Image
                    src="/images/5.png"
                    width={120}
                    height={180}
                    className="drop-shadow-[0_4px_8px_rgba(98,81,221,0.2)]"
                    alt={name}
                    title={name}
                />
                <div className="flex flex-col py-2.5 justify-between">
                    <div className="w-[160px]">
                        <h4 className="text-custom-4 text-xl font-semibold leading-[27px] capitalize truncate">
                            {name}
                        </h4>
                        <h5 className="text-custom-4 opacity-60 text-base leading-[22px] font-semibold capitalize truncate">
                            {author}
                        </h5>
                    </div>
                    <h4 className="text-custom-1 font-bold text-2xl leading-33px]">
                        ${price.toFixed(2)}
                    </h4>
                </div>
            </div>
        </Link>
    );
}
