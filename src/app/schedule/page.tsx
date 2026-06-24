import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Schedule — CDF",
  description: "Class schedule for Children's Dance Factory.",
};

export default function SchedulePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-surface-light">
      <div className="relative flex flex-1 flex-col">
        <Header />
      </div>
      <Footer />
    </main>
  );
}
