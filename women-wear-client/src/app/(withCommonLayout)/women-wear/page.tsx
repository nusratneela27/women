import ProductPage from "@/components/UI/ProductPage/ProductPage";
import { Suspense } from "react";
import Image from "next/image";
import banner from "../../../assets/background.jpg";

export const metadata = {
  title: "Women Wear",
};

const womenWear = () => {
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
            Home - Categories
          </h1>
        </div>
      </div>
      <Suspense>
        <ProductPage></ProductPage>
      </Suspense>
    </div>
  );
};

export default womenWear;
