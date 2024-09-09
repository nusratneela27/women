import SingleProductDetails from "@/components/UI/SingleProductDetails/SingleProductDetails";
import { ProductId, Products } from "@/types";

export const metadata = {
  title: "Product details",
};

// SSG
export const generateStaticParams = async () => {
  // const res = await fetch(
  //   "https://assignment-8-server-coral.vercel.app/women-wear"
  // );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/women-wear`
  );

  const products = await res.json();
  return products.slice(0, 10).map((product: Products) => ({
    productId: product._id,
  }));
};

// SSR
const ProductDetails = async ({ params }: ProductId) => {
  // const res = await fetch(
  //   `https://assignment-8-server-coral.vercel.app/women-wear/${params.productId}`,
  //   {
  //     cache: "no-store",
  //   }
  // );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/women-wear/${params.productId}`,
    {
      cache: "no-store",
    }
  );

  const product = await res.json();

  return (
    <div>
      <SingleProductDetails product={product}></SingleProductDetails>
    </div>
  );
};

export default ProductDetails;
