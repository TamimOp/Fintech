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
    <main className="relative">
      <div className="relative">
        <Hero />
        <div
          className="absolute -left-100 pointer-events-none z-10"
          style={{
            bottom: "-450px",
            width: "656px",
            height: "628px",
            borderRadius: "656px",
            background: "rgba(0, 149, 255, 0.58)",
            filter: "blur(166.85px)",
            flexShrink: 0,
          }}
        />
      </div>
      <div className="relative z-10">
        <div className="relative">
          <InfoOne />
          <div
            className="absolute -right-100 pointer-events-none z-0"
            style={{
              bottom: "-450px",
              width: "656px",
              height: "628px",
              borderRadius: "656px",
              background: "rgba(0, 149, 255, 0.58)",
              filter: "blur(166.85px)",
              flexShrink: 0,
            }}
          />
        </div>
        <InfoTwo />
        <div className="relative">
          <InfoThree />
          <div
            className="absolute -left-100 pointer-events-none z-0"
            style={{
              bottom: "-450px",
              width: "656px",
              height: "628px",
              borderRadius: "656px",
              background: "rgba(0, 149, 255, 0.58)",
              filter: "blur(166.85px)",
              flexShrink: 0,
            }}
          />
        </div>
        <Expectation />
        <Pricing />
        <WhyChooseUs />
        <CashTrackingSection />
        <FinancialExperienceSection />
      </div>
    </main>
  );
}
