import Logo from "@/components/logo";
import FooterSection from "@/components/sections/footer-section";
import HeroSection from "@/components/sections/hero-section";
import MainSection from "@/components/sections/main-section";

export default function Home() {
  return (
    <>
      {/* nav */}
      <header className="flex items-end justify-center pt-[clamp(3rem,0.714rem+4.76vw,5rem)]">
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
