import Image from "next/image";
import React from "react";

export default function BookCard() {
    return (
        <div
            className="min-w-[320px] bg-custom-3 rounded flex gap-5 p-2.5 cursor-pointer"
            title="book name"
        >
            <Image
                src="/images/book1.png"
                width={120}
                height={180}
                className="drop-shadow-[0_4px_8px_rgba(98,81,221,0.2)]"
                alt="book name"
                title="book name"
            />
            <div className="flex flex-col py-2.5 justify-between">
                <div>
                    <h4 className="text-custom-4 text-xl font-semibold leading-[27px]">
                        Book Name
                    </h4>
                    <h5 className="text-custom-4 opacity-60 text-base leading-[22px] font-semibold">
                        Author Name
                    </h5>
                </div>
                <h4 className="text-custom-1 font-bold text-2xl leading-33px]">
                    $34.99
                </h4>
            </div>
        </div>
    );
}
