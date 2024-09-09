import Contain from "@/components/Shared/Container/Contain";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Products } from "@/types";
import Image from "next/image";
import { Button, Card } from "@nextui-org/react";

const SingleProductDetails = ({ product }: { product: Products }) => {
  return (
    <div className="bg-red-50">
      <Contain>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-16">
          <Image
            alt={product.title}
            src={product.image}
            width={500}
            height={500}
            className="w-[500px] h-[500px] rounded-lg shadow-2xl"
          />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl">{product.title}</h1>
              <Button isIconOnly color="danger" aria-label="Like">
                <FaRegHeart className="h-8 w-8" />
              </Button>
            </div>
            <p className="text-2xl">Price : $ {product.price}</p>
            <p className="pt-4">Category : {product.category}</p>
            <p>{product.description.slice(0, 500)}</p>
            <div className="flex items-center gap-3 pt-1">
              <MdOutlineLocalShipping className="h-6 w-6" />
              <p className="text-small">
                Free worldwide shipping on all orders over $100
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaBox className="h-6 w-6" />
              <p className="text-small">
                Delivers in: 3-7 Working Days Shipping & Return
              </p>
            </div>
          </div>
        </div>
      </Contain>
      <div className="bg-gray-100 p-16">
        <div className="mx-auto container space-y-3">
          <h1 className="font-bold text-2xl">Description</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
