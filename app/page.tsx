import CashTrackingSection from "@/components/CashTracking";
import Expectation from "@/components/Expectation";
import Hero from "@/components/Hero";
import InfoOne from "@/components/InfoOne";
import InfoThree from "@/components/InfoThree";
import InfoTwo from "@/components/InfoTwo";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinancialExperienceSection from "@/components/FinancialExperienceSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoOne />
      <InfoTwo />
      <InfoThree />
      <Expectation />
      <Pricing />
      <WhyChooseUs />
      <CashTrackingSection />
      <FinancialExperienceSection />
    </main>
  );
}
