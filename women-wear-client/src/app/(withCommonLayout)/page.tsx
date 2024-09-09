import Banner from "@/components/UI/HomePage/Banner/Banner";
import FlashSale from "@/components/UI/HomePage/FlashSale/FlashSale";
import Contain from "@/components/Shared/Container/Contain";
import Category from "@/components/UI/HomePage/Category/Category";
import PopularProducts from "@/components/UI/HomePage/PopularProducts/PopularProducts";
import Discount from "@/components/UI/HomePage/Discount/Discount";
import VideoBanner from "@/components/UI/HomePage/VideoBanner/VideoBanner";

export const metadata = {
  title: "Home Page",
};

const page = () => {
  return (
    <>
      <Banner></Banner>
      <Contain>
        <FlashSale></FlashSale>
      </Contain>
      <Discount></Discount>
      <Contain>
        <Category></Category>
      </Contain>
      <VideoBanner></VideoBanner>
      <PopularProducts></PopularProducts>
    </>
  );
};

export default page;
