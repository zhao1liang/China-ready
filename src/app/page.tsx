import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PaymentChecklist from "@/components/PaymentChecklist";
import TutorialContent from "@/components/TutorialContent";
import TravelerStory from "@/components/TravelerStory";
import GiscusComments from "@/components/GiscusComments";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PaymentChecklist />
      <TutorialContent />
      <TravelerStory />
      <GiscusComments />
    </main>
  );
}
