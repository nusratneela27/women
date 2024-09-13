import FlashSaleCountdown from "@/components/Countdown/Countdown";
import Contain from "@/components/Shared/Container/Contain";
import ProductCard from "@/components/UI/Cards/ProductCard";
import { Products } from "@/types";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import banner from "../../../assets/background.jpg";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Flash-Sale",
};

const FlashSale = async () => {
  // const res = await fetch("http://localhost:5000/women-wear", {
  //   next: {
  //     revalidate: 30,
  //   },
  // });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/women-wear`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const products = await res.json();

  const flashSaleProducts = products.filter(
    (product: Products) => product.flash_sale
  );

  const flashSaleEndDate = new Date("2024-10-26T00:00:00");

  return (
    <div>
      <div className="relative h-[300px] overflow-hidden">
        <Image
          alt="banner"
          src={banner}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 items-center justify-center bg-black bg-opacity-50 z-10 text-center"></div>
        <div className="absolute inset-0 z-20  flex flex-col items-center justify-center text-center space-y-4 p-4">
          <h1 className="text-3xl text-white font-bold mb-4">
            Home - Flash Sale
          </h1>
        </div>
      </div>
      <Contain>
        <div className="my-16 space-y-3">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Flash Sale</h1>
            <div>
              <FlashSaleCountdown endDate={flashSaleEndDate} />
            </div>
          </div>
          <p className="font-bold">
            Showing {flashSaleProducts.length} Item(s)
          </p>
          <p className="text-gray-500 mt-3">
            Explore our newest collection of stylish and trendy outfits perfect
            for every occasion. Stay ahead in fashion with our exclusive designs
            and premium quality clothing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {flashSaleProducts.slice(0, 12).map((product: Products) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center space-y-3 pt-10">
            <p className="font-bold">
              Showing {flashSaleProducts.length} Item(s)
            </p>
            <div>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10"
              >
                <Link href="/flash-sale">Load More</Link>
              </Button>
            </div>
          </div>
        </div>
      </Contain>
    </div>
  );
};

export default FlashSale;
