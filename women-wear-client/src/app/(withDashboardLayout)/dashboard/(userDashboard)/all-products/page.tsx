import AllProductsTable from "@/app/(withDashboardLayout)/components/DashboardTable/AllProductsTable";
import Contain from "@/components/Shared/Container/Contain";
import React from "react";

const AllProducts = () => {
  return (
    <Contain>
      <h1 className="text-3xl font-bold mt-10">All Products</h1>
      <AllProductsTable></AllProductsTable>
    </Contain>
  );
};

export default AllProducts;
