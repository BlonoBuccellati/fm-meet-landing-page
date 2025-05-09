import Image from "next/image";

import { mobileImageFooter } from "@/assets";
import Number from "@/components/number";
import { cn } from "@/lib/utils";

import DownloadText from "../download-text";
import { Button } from "../ui/button";

const SectionHero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "relative bg-cyan-600/85 text-center text-white",
        className,
      )}
    >
      {/* fill で親のサイズにピッタリ合わせる */}
      <Image
        src={mobileImageFooter}
        alt=""
        fill
        className="-z-10 object-cover object-center"
      />
      <div className="space-y-300 px-400 py-800">
        <h1 className="typo-heading-lg">Experience more together</h1>
        <p className="typo-button font-medium">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <Button variant="purple">
          <DownloadText />
        </Button>
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer>
      <Number num={2} className="relative z-10 mx-auto -mb-400 w-fit" />
      <SectionHero />
    </footer>
  );
};

export default FooterSection;
