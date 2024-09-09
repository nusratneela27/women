import Image from "next/image";
import React from "react";
import shefinds from "../../../assets/FooterUp/shefinds-logo 1.png";
import healthline from "../../../assets/FooterUp/Healthline-img 1.png";
import yahoo from "../../../assets/FooterUp/Frame 171.png";
import msn from "../../../assets/FooterUp/MSN-logo 1.png";
import yeahooNews from "../../../assets/FooterUp/yahoo-news-img 3.png";

const images = [
  { src: shefinds, alt: "She Finds Logo" },
  { src: yeahooNews, alt: "Yahoo News Logo" },
  { src: healthline, alt: "Healthline Logo" },
  { src: yahoo, alt: "Yahoo Logo" },
  { src: yeahooNews, alt: "Yahoo News Logo" },
  { src: msn, alt: "MSN Logo" },
  { src: yeahooNews, alt: "Yahoo News Logo" },
];

const FooterUp = () => {
  return (
    <div className="h-28 bg-gray-200 flex justify-center items-center">
      <div className="flex justify-between items-center mx-auto container">
        {images.map((image, index) => (
          <div key={index} className="p-3 md:p-0">
            <Image alt={image.alt} src={image.src} width={80} height={80} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterUp;
