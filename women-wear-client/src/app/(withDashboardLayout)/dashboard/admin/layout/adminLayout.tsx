import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/DashboardNavbar/dashboardNavbar";
import { AdminSidebarWrapper } from "@/app/(withDashboardLayout)/components/dashboardSidebar/AdminSidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <AdminSidebarWrapper></AdminSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
