"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Tooltip,
} from "@nextui-org/react";
import Logo from "./Logo";
import Link from "next/link";
import { MenuItem } from "@/types";
import { signOut } from "next-auth/react";
import { getUserInfo, isLogin, removeUser } from "@/services/auth.services";
import { useRouter } from "next/navigation";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Header = ({ session }: { session: UserProps | null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Home");

  const userInfo = getUserInfo();
  const router = useRouter();
  // console.log(isLogin());

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "Women Products", href: "/women-wear" },
    { label: "Flash Sale", href: "/flash-sale" },
    ...(session?.user ? [{ label: "Dashboard", href: "/dashboard" }] : []),
  ];

  const handleMenuItemClick = (label: string) => {
    setActiveItem(label);
    setIsMenuOpen(false);
  };

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link href={item.href}>
              <span
                className={`${
                  item.label === activeItem
                    ? "bg-amber-300 px-2 py-1 rounded-lg shadow-md"
                    : ""
                } hover:text-amber-700 cursor-pointer`}
                onClick={() => handleMenuItemClick(item.label)}
              >
                {item.label}
              </span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {userInfo ? (
          <NavbarItem>
            <Button
              onClick={handleLogout}
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              href="/login"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* <NavbarContent justify="end">
        {session?.user ? (
          <>
            <NavbarItem>
              <Tooltip content={session?.user?.email}>
                <img
                  src={session?.user?.image ?? undefined}
                  alt="User Photo"
                  className="rounded-full w-8 h-8"
                />
              </Tooltip>
            </NavbarItem>
            <NavbarItem>
              <Button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                Logout
              </Button>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              href="/login"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link href={item.href}>
              <span
                style={{
                  color: item.label === activeItem ? "blue" : "black",
                  cursor: "pointer",
                }}
                onClick={() => handleMenuItemClick(item.label)}
              >
                {item.label}
              </span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
