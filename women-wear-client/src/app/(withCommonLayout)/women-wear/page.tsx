import ProductPage from "@/components/UI/ProductPage/ProductPage";
import { Suspense } from "react";

export const metadata = {
  title: "Women Wear",
};

const womenWear = () => {
  return (
    <div>
      <Suspense>
        <ProductPage></ProductPage>
      </Suspense>
    </div>
  );
};

export default womenWear;
