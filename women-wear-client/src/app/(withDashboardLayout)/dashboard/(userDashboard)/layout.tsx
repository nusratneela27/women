import type { Metadata } from "next";
import UserLayout from "./layout/userLayout";

export const metadata: Metadata = {
  title: "User Dashboard",
};

export default function DashboardUserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UserLayout>{children}</UserLayout>
    </div>
  );
}
