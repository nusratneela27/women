"use client";

import Contain from "@/components/Shared/Container/Contain";
import SideBar from "@/components/SideBar/SideBar";
import ProductCard from "@/components/UI/Cards/ProductCard";
import { Products } from "@/types";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const metadata = {
  title: "women wear",
};

const ProductPage = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
      if (category) {
        const filtered = products.filter(
          (product: Products) => product.category === category
        );
        setProducts(filtered);
      } else {
        setProducts(products);
      }
    };
    fetchData();
  }, [category]);

  return (
    <Contain>
      <div className="md:my-16 space-y-3">
        <div className="relative min-h-screen  md:flex">
          <SideBar></SideBar>
          <div className="flex-1 md:ml-64 space-y-3">
            <h1 className="text-3xl font-bold">Our Collection Of Products</h1>
            <p className="font-bold">Showing {products.length} Item(s)</p>
            <p className="text-gray-500 mt-3 mb-7">
              Explore our newest collection of stylish and trendy outfits
              perfect for every occasion. Stay ahead in fashion with our
              exclusive designs and premium quality clothing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {products.slice(0, 12).map((product: Products) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center space-y-3 pt-10">
              <p className="font-bold">Showing {products.length} Item(s)</p>
              <Divider className="my-4" />
              <div>
                <Button
                  radius="full"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10 my-10"
                >
                  <Link href="women-wear">Load More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Contain>
  );
};

export default ProductPage;
