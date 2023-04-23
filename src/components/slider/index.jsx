"use client";
import React, { useEffect, useState } from "react";

const slides = [
    {
        url: "/images/home_banner.jpg",
        title: "paulo_coelho",
        content: "25% discount",
        description: "all Paulo Coelho books!",
    },
    {
        url: "/images/auth_banner.jpg",
        title: "paulo_coelho",
        content: "25% discount",
        description: "all Paulo Coelho books!",
    },
    {
        url: "/images/book_coffee.jpg",
        title: "paulo_coelho",
        content: "25% discount",
        description: "all Paulo Coelho books!",
    },
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="w-full m-auto rounded-lg">
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                }}
                className="w-full h-[400px] border-[1px] rounded-lg bg-center bg-cover duration-500 relative"
            >
                <div className="absolute inset-0 bg-gradient-to-l from-custom-5 to-custom-6 px-[60px] py-[86px] rounded-lg">
                    <h1 className="max-w-[426px] leading-[76px] text-[56px] font-semibold text-[#FFFFFF]">
                        <span className="font-extrabold text-[#F0B861]">
                            {slides[currentIndex].content}
                        </span>
                        <br />
                        {slides[currentIndex].description}
                    </h1>
                </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
                {slides.map((slide, slideIndex) => {
                    return (
                        <div
                            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                                slideIndex === currentIndex
                                    ? "bg-custom-2"
                                    : "bg-custom-4 opacity-60 "
                            }`}
                            key={slideIndex}
                            onClick={() => setCurrentIndex(slideIndex)}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}
