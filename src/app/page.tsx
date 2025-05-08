import Logo from "@/components/logo";
import HeroSection from "@/components/sections/hero-section";
import MainSection from "@/components/sections/main-section";
export default function Home() {
  return (
    <main>
      {/* nav */}
      <div className="flex items-end justify-center pt-[48px]">
        <Logo />
      </div>
      {/* hero section */}
      <HeroSection />
      <MainSection />
    </main>
  );
}
