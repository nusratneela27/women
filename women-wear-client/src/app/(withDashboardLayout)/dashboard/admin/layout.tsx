import type { Metadata } from "next";
import AdminLayout from "./layout/adminLayout";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function DashboardAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
}
