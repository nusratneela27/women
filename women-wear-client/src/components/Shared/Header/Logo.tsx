import Image from "next/image";
import logoIcon from "@/assets/logo.png";

const Logo = () => {
  return (
    <>
      <Image alt="logo" src={logoIcon} height={150} width={150} />
    </>
  );
};

export default Logo;
