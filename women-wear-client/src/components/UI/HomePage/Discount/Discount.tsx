import Image from "next/image";
import React from "react";
import discount from "@/assets/saleimg.jpg";
import { Input } from "@nextui-org/react";

const Discount = () => {
  return (
    <>
      <div style={{ position: "relative", height: "800px" }}>
        <Image
          alt="discount"
          src={discount}
          fill
          sizes="60vw"
          style={{
            objectFit: "cover",
          }}
          className="z-0"
        />
        <div className="absolute inset-0 items-center justify-center bg-black bg-opacity-50 z-10 text-center"></div>
        <div className="absolute inset-0 z-20  flex flex-col items-center justify-center text-center space-y-4 p-4">
          <h1 className="text-6xl text-white font-medium italic mb-4">
            Subscribe to get 30% discount!
          </h1>
          <div className="w-1/2">
            <Input type="email" label="Email" placeholder="Enter your email" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
