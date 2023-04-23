import Image from "next/image";
import React from "react";

export default function CategoryCard() {
    return (
        <div className="min-w-[300px] h-[433px] bg-custom-3 p-5 cursor-pointer flex flex-col items-center gap-5 rounded border-2 border-[rgba(9, 9, 55, 0.1)">
            <Image
                src="/images/book2.png"
                width={200}
                height={300}
                alt="book name"
                title="book name"
            />
            <div className="w-full flex py-2.5 justify-between">
                <div className="flex flex-col gap-1">
                    <h4 className="text-custom-4 text-xl font-semibold leading-[27px]">
                        Book Name
                    </h4>
                    <h5 className="text-custom-4 opacity-60 text-base leading-[22px] font-semibold">
                        Author Name
                    </h5>
                </div>
                <h4 className="text-custom-1 font-bold text-2xl leading-33px] self-end">
                    $34.99
                </h4>
            </div>
        </div>
    );
}
