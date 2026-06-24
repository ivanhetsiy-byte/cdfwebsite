import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GroupsPageContent from "@/components/GroupsPageContent";

export const metadata: Metadata = {
  title: "Groups — CDF",
  description: "Explore dance groups at Children's Dance Factory.",
};

export default function GroupsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-surface-light">
      <div className="relative flex flex-1 flex-col">
        <Header />
        <GroupsPageContent />
      </div>
      <Footer />
    </main>
  );
}
