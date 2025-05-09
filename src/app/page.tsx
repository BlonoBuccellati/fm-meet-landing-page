import Logo from "@/components/logo";
import FooterSection from "@/components/sections/footer-section";
import HeroSection from "@/components/sections/hero-section";
import MainSection from "@/components/sections/main-section";

export default function Home() {
  return (
    <>
      {/* nav */}
      <header className="flex items-end justify-center pt-[48px]">
        <Logo />
      </header>
      <main>
        {/* hero section */}
        <HeroSection />
        <MainSection />
      </main>
      <FooterSection />
    </>
  );
}
