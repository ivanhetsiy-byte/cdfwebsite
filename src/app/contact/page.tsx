import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Get In Touch — CDF",
  description: "Contact Children's Dance Factory to register your child.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-surface-light">
      <div className="relative flex flex-1 flex-col">
        <Header />

        <div className="flex flex-col items-center px-4 pb-[120px] pt-28 sm:pt-[160px]">
          <ContactPageContent />
        </div>
      </div>

      <Footer />
    </main>
  );
}
