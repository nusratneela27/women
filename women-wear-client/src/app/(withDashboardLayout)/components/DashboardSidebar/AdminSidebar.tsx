"use client";

// icons
import { BiHome, BiPurchaseTag } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaBox } from "react-icons/fa6";
import { MdOutlinePayment, MdReport } from "react-icons/md";

// import { useSidebarContext } from "../../layout/layout-context";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoIcon from "@/assets/logo.png";

export const AdminSidebarWrapper = () => {
  const pathname = usePathname();
  //   const { collapsed } = useSidebarContext();

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
                title="All Products"
                icon={<FaBox />}
                href="/dashboard/all-products"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/payments"}
                title="Users"
                icon={<MdOutlinePayment />}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Reports"
                icon={<MdReport />}
              />
              <CollapseItems
                icon={<BiPurchaseTag />}
                items={["Banks Accounts", "Credit Cards"]}
                title="Purchase history"
              />
            </SidebarMenu>

            <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<BiHome />}
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
