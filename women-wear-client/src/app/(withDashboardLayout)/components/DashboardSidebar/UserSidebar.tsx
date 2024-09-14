"use client";

// icons
import { BiHome, BiPurchaseTag } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaBox } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

// import { useSidebarContext } from "../../layout/layout-context";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";


import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import Image from "next/image";
import logoIcon from "@/assets/logo.png";
import { removeUser } from "@/services/auth.services";
import { Button } from "@nextui-org/react";

export const UserSidebarWrapper = () => {
  const pathname = usePathname();
  const router = useRouter();
  //   const { collapsed } = useSidebarContext();

  const handleLogout = () => {
    removeUser();
    router.push("/")
  };

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {/* {collapsed ? <div className={Sidebar.Overlay()} /> : null} */}
      <div
        className={Sidebar({
          //   collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          {" "}
          <Link href="/">
            <Image alt="logo" src={logoIcon} height={150} width={150} />
          </Link>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<IoHomeOutline />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/all-products"}
                title="My Products"
                icon={<FaBox />}
                href="/dashboard/all-products"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/payments"}
                title="Payments"
                icon={<MdOutlinePayment />}
              />
              <CollapseItems
                icon={<BiPurchaseTag />}
                items={["Banks Accounts", "Credit Cards"]}
                title="Purchase history"
              />
            </SidebarMenu>

            <Button
              onClick={handleLogout}
              className="bg-gradient-to-tr from-pink-200 to-yellow-200 shadow-lg"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
