import { Button } from "@/components/ui/button";
import DownloadText from "@/components/download-text";
import Logo from "@/components/logo";
import Number from "@/components/number";

export default function Home() {
  return (
    <div>
      <Button variant="purple" className="">
        <DownloadText />
      </Button>
      <Logo />
      <div className="m-700">
        <Number num={1} />
      </div>
    </div>
  );
}
