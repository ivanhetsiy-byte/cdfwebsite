import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";
import FacultySection from "@/components/FacultySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-[2529px] w-full min-w-[1440px] max-w-[1440px] bg-surface-light">
      <Header />
      <div className="relative">
        <Hero />
        <SocialBar />
      </div>
      <FacultySection />
      <Footer />
    </main>
  );
}
