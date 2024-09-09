import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { Products } from "@/types";
import ProductCard from "../../Cards/ProductCard";
import Contain from "@/components/Shared/Container/Contain";

const PopularProducts = async () => {
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

  return (
    <div className="relative py-56">
      <div
        className="absolute  inset-0 bg-gray-200"
        style={{
          clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
        }}
      ></div>
      <Contain>
        <div className="relative space-y-6 z-10">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl font-bold">Most Popular Product</h1>
              <p className="text-gray-500 mt-9 w-2/4">
                Explore our newest collection of stylish and trendy outfits
                perfect for every occasion. Stay ahead in fashion with our
                exclusive designs and premium quality clothing.
              </p>
            </div>

            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              <Link href="women-wear">View All</Link>
            </Button>
          </div>

          <div className="gap-8 grid grid-cols-2 sm:grid-cols-4 ">
            {products.slice(18, 22).map((product: Products) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </Contain>
    </div>
  );
};

export default PopularProducts;
