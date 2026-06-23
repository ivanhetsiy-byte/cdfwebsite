import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";
import FacultySection from "@/components/FacultySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-surface-light">
      <div className="relative min-h-screen w-full">
        <Header />
        <Hero />
        <SocialBar />
      </div>
      <FacultySection />
      <Footer />
    </main>
  );
}
