"use client";
import { getUserInfo } from "@/services/auth.services";
import { Input, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { LuSearchCheck } from "react-icons/lu";
// import { useSidebarContext } from "../../layout/layout-context";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  //   const { collapsed, setCollapsed } = useSidebarContext();
  //   console.log(collapsed);
  const userInfo = getUserInfo();

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          {/* {collapsed ? (
            <ChevronLeft onClick={setCollapsed}></ChevronLeft>
          ) : (
            <Menu onClick={setCollapsed}></Menu>
          )} */}
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          <Input
            startContent={<LuSearchCheck />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search Products..."
          />
        </NavbarContent>
        <NavbarContent justify="end">
          <p>Email: {userInfo.email}</p>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
