"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Products } from "@/types";
import Image from "next/image";

const AllProductsTable = async () => {
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

  return (
    <Table className="m-5 md:my-10 pe-5 md:pe-48">
      <TableHeader>
        <TableColumn>Items</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Ratings</TableColumn>
        <TableColumn>Flash Sale</TableColumn>
      </TableHeader>
      <TableBody>
        {products.map((product: Products) => (
          <TableRow key={product._id} className="border-b-2">
            <TableCell>
              <div className="flex items-center gap-3">
                <Image
                  alt={product._id}
                  src={product.image}
                  width={50}
                  height={20}
                  className="rounded-2xl shadow-lg"
                ></Image>
                <p>{product.title}</p>
              </div>
            </TableCell>
            <TableCell>
              <p>{product.category}</p>
            </TableCell>
            <TableCell>
              <p>{product.price}</p>
            </TableCell>
            <TableCell>
              <p>{product.ratings}</p>
            </TableCell>
            <TableCell className="w-24">
              <p
                className={
                  product.flash_sale
                    ? "bg-red-200 font-bold rounded text-center px-3 py-2"
                    : ""
                }
              >
                {product.flash_sale}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllProductsTable;
