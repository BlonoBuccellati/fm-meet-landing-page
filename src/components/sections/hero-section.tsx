import Image from "next/image";

import { imageHero } from "@/assets";
import { desktopImageHeroLeft, desktopImageHeroRight } from "@/assets/";
import DownloadText from "@/components/download-text";
import { Button } from "@/components/ui/button";

const HeroText = () => {
  return (
    <>
      {/* mt-900：72px */}
      <h1 className="typo-heading-xl mt-[clamp(48px,2rem,72px)] text-center text-slate-900">
        Group Chat <br />
        for Everyone
      </h1>
      <p className="typo-body-medium mx-auto max-w-[28rem] text-center text-slate-600">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
    </>
  );
};
const HeroCTA = () => {
  return (
    <div className="tablet:flex-row tablet:items-center tablet:flex tablet:gap-200 mx-auto w-fit">
      <div className="tablet:mb-[0] mx-auto mb-200 w-fit">
        <Button variant="cyan">
          <DownloadText />
        </Button>
      </div>
      <div className="mx-auto w-fit">
        <Button variant="purple" asChild className="inline-block">
          <a href="#">What is it?</a>
        </Button>
      </div>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="desktop:space-y-400 space-y-300 px-400">
      <HeroText />
      <HeroCTA />
    </div>
  );
};
const HeroSection = () => {
  return (
    <section className="overflow-x-hidden pt-800 pb-400">
      <div className="desktop:flex desktop:justify-evenly desktop:gap-400 desktop:w-[113vw] relative left-1/2 w-[107vw] max-w-[1700px] -translate-x-1/2">
        <Image
          src={imageHero}
          alt="sample chat user"
          className="desktop:hidden relative left-1/2 mx-auto w-full min-w-[433px] -translate-x-1/2"
        />
        <Image
          src={desktopImageHeroLeft}
          alt="sample chat user"
          className="desktop:inline desktop:order-first hidden w-full max-w-[394px] self-start"
        />
        <Image
          src={desktopImageHeroRight}
          alt=""
          className="desktop:inline desktop:order-last hidden w-full max-w-[394px] self-end"
        />
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
