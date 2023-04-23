import React from "react";
import { BookCard } from "..";

export default function Category() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <h2 className="text-custom-4 font-bold text-[32px] leading-[44px]">
                    Category Name
                </h2>
                <button className="text-custom-2 bg-none font-bold text-xl px-5">
                    View All
                </button>
            </div>
            <div className="flex gap-5 flex-nowrap">
                {/* map over category and get first 4 items */}
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    );
}
