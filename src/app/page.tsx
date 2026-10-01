import Banner from "@/components/home/Banner";
import AboutSection from "@/components/home/AboutSection";
import JournalSection from "@/components/home/JournalSection";
import LibrarySection from "@/components/home/LibrarySection";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <JournalSection />
      <LibrarySection />
    </div>
  );
}
