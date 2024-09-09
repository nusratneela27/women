"use client";

import Image from "next/image";
import bannerImage from "@/assets/banner.jpg";
import Slider from "./Slider";

const Banner = () => {
  return (
    <>
      <div style={{ position: "relative", height: "800px" }}>
        <Image
          alt="bannerImage"
          src={bannerImage}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="z-0"
        />
        <div className="absolute inset-0 items-center justify-center bg-black bg-opacity-50 z-10 text-center"></div>
        <div className="absolute inset-0 z-20  flex flex-col items-center justify-center text-center space-y-4 p-4">
          <h1 className="text-5xl text-white font-bold mb-4">
            Discover the Latest in Women's Fashion
          </h1>
          <p className="text-lg text-white max-w-lg pb-9">
            Explore our newest collection of stylish and trendy outfits perfect
            for every occasion. Stay ahead in fashion with our exclusive designs
            and premium quality clothing.
          </p>
          <Slider></Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
