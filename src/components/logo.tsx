import LogoIcon from "@/assets";
import Image from "next/image";

interface LogoProps {
  className?: string;
}
const Logo = ({ className }: LogoProps) => {
  return <Image src={LogoIcon} alt="meet" className={className} />;
};

export default Logo;
