import Logo from "@/components/logo";
import HeroSection from "@/components/sections/hero-section";
export default function Home() {
  return (
    <main>
      {/* nav */}
      <div className="flex items-end justify-center pt-[48px]">
        <Logo />
      </div>
      {/* hero section */}
      <HeroSection />
    </main>
  );
}
