import DownloadText from "@/components/download-text";
import { Button } from "@/components/ui/button";
import { imageHero } from "@/assets";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative">
      <Image
        src={imageHero}
        alt="sample chat user"
        className="relative left-1/2 mx-auto w-full min-w-[433px] -translate-x-1/2 overflow-auto"
      />
    </div>
  );
};
const HeroText = () => {
  return (
    <>
      {/* mt-900：72px */}
      <h1 className="typo-heading-xl mt-[clamp(48px,2rem,72px)] text-center text-slate-900">
        Group Chat <br />
        for Everyone
      </h1>
      <p className="typo-button text-center font-medium text-slate-600">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
    </>
  );
};
const HeroCTA = () => {
  return (
    <div>
      <div className="mx-auto w-fit">
        <Button variant="cyan">
          <DownloadText />
        </Button>
      </div>
      <div className="mx-auto mt-200 w-fit">
        <Button variant="purple" asChild className="inline-block">
          <a href="#">What is it?</a>
        </Button>
      </div>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="space-y-300 px-400">
      <HeroText />
      <HeroCTA />
    </div>
  );
};
const HeroSection = () => {
  return (
    <section className="pt-800 pb-400">
      <HeroImage />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
