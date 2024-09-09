"use client";

import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Button, Checkbox } from "@nextui-org/react";
import {
  Option,
  categoryOptions,
  priceRangeOptions,
  ratingOptions,
} from "../UI/ProductPage/checkboxData";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const params = useSearchParams();
  const router = useRouter();
  const selectedCategory = params.get("category");

  const [isActive, setActive] = useState<boolean>(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleClick = (option: Option) => {
    const currentQuery = { ...queryString.parse(params.toString()) };

    currentQuery["category"] = option.value;
    const url = queryString.stringifyUrl(
      {
        url: `/women-wear`,
        query: currentQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="flex justify-between md:hidden">
        <div className="p-4"></div>
        <Button onClick={handleToggle}>
          <AiOutlineBars className="h-5 w-5" />
        </Button>
      </div>

      <div
        className={`z-10 flex flex-col justify-between w-64 absolute ${
          isActive && "-translate-x-full"
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="space-y-5 md:pe-10">
          <div className="border rounded-lg shadow-md p-5 bg-amber-50">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl border-s-3 border-stone-950">
                <span className="ps-5">Price Range</span>
              </h1>
              {priceRangeOptions.map((option: Option) => (
                <Checkbox key={option.value} color="secondary">
                  {option.label}
                </Checkbox>
              ))}
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-5 bg-amber-50">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl border-s-3 border-stone-950">
                <span className="ps-5">Categories</span>
              </h1>
              {categoryOptions.map((option: Option) => (
                <p
                  key={option.value}
                  onClick={() => handleClick(option)}
                  color="secondary"
                  className={`p-3 rounded cursor-pointer ${
                    option.value === selectedCategory
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {option.label}
                </p>
              ))}
            </div>
          </div>
          <div className="border rounded-lg shadow-md p-5 bg-amber-50">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl border-s-3 border-stone-950">
                <span className="ps-5">Ratings</span>
              </h1>
              {ratingOptions.map((option: Option) => (
                <Checkbox key={option.value} color="secondary">
                  {option.label}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
