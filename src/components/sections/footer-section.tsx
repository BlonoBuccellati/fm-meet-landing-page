import Image from "next/image";

import {
  mobileImageFooter,
  tabletImageFooter,
  desktopImageFooter,
} from "@/assets";
import Number from "@/components/number";

import DownloadText from "../download-text";
import { Button } from "../ui/button";

const SectionHero = () => {
  return (
    <section className="desktop:text-left relative bg-cyan-600/85 text-center text-white">
      {/* fill で親のサイズにピッタリ合わせる */}
      {/* Imageは、デフォルトでabsolute */}
      <picture>
        <source media="(min-width:768px)" srcSet={tabletImageFooter.src} />
        <source media="(min-width:1440px)" srcSet={desktopImageFooter.src} />
        <Image
          src={mobileImageFooter}
          alt=""
          fill
          className="-z-10 object-cover object-center"
        />
      </picture>
      <div className="desktop:flex desktop:justify-around desktop:items-start desktop:m-0 desktop:px-1000 desktop:space-x-400 desktop:space-y-0 desktop:max-w-none mx-auto max-w-[31.5rem] space-y-300 px-400 py-1400">
        <h1 className="typo-heading-lg desktop:max-w-[22.1875rem]">
          Experience more together
        </h1>
        <p className="typo-body-medium desktop:max-w-[22.1875rem]">
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
