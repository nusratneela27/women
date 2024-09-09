import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Products } from "@/types";
import ProductCard from "../../Cards/ProductCard";
import FlashSaleCountdown from "@/components/Countdown/Countdown";

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
    <div className="py-16 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Flash sale</h1>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          <Link href="flash-sale">View All</Link>
        </Button>
      </div>
      <div className="my-4">
        <FlashSaleCountdown endDate={flashSaleEndDate} />
      </div>
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-4">
        {flashSaleProducts.slice(0, 4).map((product: Products) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
