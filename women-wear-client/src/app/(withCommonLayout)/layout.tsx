import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import React from "react";

const CommonLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
