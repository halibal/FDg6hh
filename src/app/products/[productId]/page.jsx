import Image from "next/image";
import React from "react";

export default function ProductDetailPage() {
    return (
        <div className="max-w-[1320px] mx-auto my-[40px]">
            <div className="flex gap-2.5 mb-[31px]">
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
            <div className="flex gap-[80px]">
                <div className="bg-custom-3 h-[570px] p-[60px]">
                    <Image
                        src="/images/book4.png"
                        width={300}
                        height={450}
                        title="Book Name"
                        alt="Book Name"
                    />
                </div>
                <div className="flex flex-col gap-[60px] flex-1">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2.5">
                            <h3 className="text-[40px] leading-[55px] font-semibold">
                                Book Name
                            </h3>
                            <h4 className="text-[32px] leading-[44px] font-semibold opacity-60">
                                Author Name
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ratione est officiis minima tempore, ipsum
                            cumque odio totam similique deleniti cum, delectus
                            modi commodi blanditiis voluptatum dolorum.
                            Cupiditate sit esse nemo consequuntur sed! Voluptas,
                            debitis corporis atque velit totam ipsum delectus
                            quod minima laudantium doloribus suscipit eligendi
                            quia vero illum reprehenderit a quas cumque deleniti
                            ullam corrupti ex, vel voluptate! Tempora laboriosam
                            quibusdam eaque aspernatur iste itaque repellendus
                            voluptatum, velit fugiat illum odit similique
                            voluptas tempore fuga aliquam. Iusto nesciunt
                            dignissimos, maiores quas facilis esse voluptatem
                            optio error natus tempore perferendis fuga nostrum.
                            Cupiditate deserunt quia mollitia? Quam, deleniti
                            quod incidunt similique illum deserunt, libero odit
                            placeat rerum, iste explicabo corrupti nihil
                            reiciendis. Quod accusantium iste sapiente maxime
                            quaerat necessitatibus vel quis provident beatae
                            magnam praesentium earum voluptatum expedita, at id,
                            fugiat non commodi deleniti officia eligendi
                            reiciendis tempore. Odio et rerum placeat, illum
                            doloremque officia quibusdam excepturi optio id
                            sunt! Harum, dolorum. Animi facere quibusdam,
                            aperiam, non laborum nesciunt tenetur, pariatur
                            natus suscipit dignissimos officiis in repellat.
                        </article>
                    </div>
                </div>
            </div>
            <div className="mt-[130px] flex justify-end">
                <button
                    className="flex justify-between py-2.5 px-5 bg-custom-2 w-[400px] text-white text-xl rounded"
                    title="Add to Cart"
                >
                    <span className="font-bold">$ 89.99</span>
                    <span className="font-semibold">Buy Now</span>
                </button>
            </div>
        </div>
    );
}
