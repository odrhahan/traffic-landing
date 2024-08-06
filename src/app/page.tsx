import CommunitySection from "@/components/CommunitySection";
import EasyMoneySection from "@/components/EasyMoneySection";
import HeroSection from "@/components/HeroSection";
import MakingMoneySteps from "@/components/MakingMoneySteps";
import RelatingChanels from "@/components/RelatingChanels";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EasyMoneySection />
      <MakingMoneySteps />
      <RelatingChanels />
      <CommunitySection />
    </main>
  );
}
