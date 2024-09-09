"use client";

import Contain from "@/components/Shared/Container/Contain";
import { Card } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "@/assets/Products/imgBottoms2.jpeg";
import img2 from "@/assets/Products/imgCasual2.jpg";
import img3 from "@/assets/Products/imgFormal2.jpeg";
import img4 from "@/assets/Products/imgGown2.jpeg";
import img5 from "@/assets/Products/imgBottoms3.jpeg";
import img6 from "@/assets/Products/imgCasual3.jpeg";
import img7 from "@/assets/Products/imgOuter3.jpg";
import img8 from "@/assets/Products/imgBottoms1.jpeg";
import img9 from "@/assets/Products/imgCasual4.jpeg";
import img10 from "@/assets/Products/imgGown4.jpeg";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const list = [
    { title: "Boho Chic Dress", img: img1 },
    { title: "Boho Chic Dress", img: img2 },
    { title: "Boho Chic Dress", img: img3 },
    { title: "Boho Chic Dress", img: img4 },
    { title: "Boho Chic Dress", img: img5 },
    { title: "Boho Chic Dress", img: img6 },
    { title: "Boho Chic Dress", img: img7 },
    { title: "Boho Chic Dress", img: img8 },
    { title: "Boho Chic Dress", img: img9 },
    { title: "Boho Chic Dress", img: img10 },
  ];

  return (
    <Contain>
      <div className="relative">
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev custom-swiper-button-prev bg-white bg-opacity-50 rounded-full p-7 absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer shadow-md">
          <FaChevronLeft className="text-black" />
        </div>
        <div className="swiper-button-next custom-swiper-button-next bg-white bg-opacity-50 rounded-full p-7 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer shadow-md">
          <FaChevronRight className="text-black" />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Navigation, Pagination]}
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="w-[250px] h-[250px]">
                <Image
                  alt={item.title}
                  src={item.img}
                  className="w-[250px] h-[250px] object-cover"
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Contain>
  );
};

export default Slider;

//=============================================================

// // swiper
// "use client";
// import Contain from "@/components/Shared/Container/Contain";
// import { Card } from "@nextui-org/react";
// import { FaQuoteLeft } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";

// import img1 from "@/assets/Products/imgBottoms2.jpeg";
// import img2 from "@/assets/Products/imgCasual2.jpg";
// import img3 from "@/assets/Products/imgFormal2.jpeg";
// import img4 from "@/assets/Products/imgGown2.jpeg";
// import img5 from "@/assets/Products/imgBottoms3.jpeg";
// import img6 from "@/assets/Products/imgCasual3.jpeg";
// import img7 from "@/assets/Products/imgOuter3.jpg";
// import img8 from "@/assets/Products/imgBottoms1.jpeg";
// import img9 from "@/assets/Products/imgCasual4.jpeg";
// import img10 from "@/assets/Products/imgGown4.jpeg";
// import Image from "next/image";

// const Slider = () => {
//   const list = [
//     {
//       title: "Boho Chic Dress",
//       img: img1,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img2,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img3,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img4,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img5,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img6,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img7,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img8,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img9,
//     },
//     {
//       title: "Boho Chic Dress",
//       img: img10,
//     },
//   ];

//   return (
//     <Contain>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 5 },
//         }}
//       >
//         {list.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Card className="w-[250px] h-[250px]">
//               <Image
//                 alt={item.title}
//                 src={item.img}
//                 className="w-[250px] h-[250px] object-cover"
//               />
//             </Card>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Contain>
//   );
// };

// export default Slider;
