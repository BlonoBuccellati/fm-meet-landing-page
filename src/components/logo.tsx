import Image from "next/image";

import LogoIcon from "@/assets";

interface LogoProps {
  className?: string;
}
const Logo = ({ className }: LogoProps) => {
  return <Image src={LogoIcon} alt="meet" className={className} />;
};

export default Logo;
