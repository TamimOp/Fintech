"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const items = [
  {
    title: "Automated Wallet-Based Payroll",
    description:
      "Set up recurring crypto payments to contributors and employees in under 5 minutes. We handle wallet registration, on-chain compliance, and gas optimization — so you can focus on building, not budgeting.",
  },
  {
    title: "DeFi-Native HR Suite",
    description:
      "A complete human resources toolkit tailored for decentralized teams. Automate onboarding, offboarding, benefits, and document management while staying fully Web3-native.",
  },
  {
    title: "Hire Globally in Crypto",
    description:
      "Easily hire contributors from anywhere in the world with seamless crypto payments, local compliance, and automated KYC/AML processes.",
  },
];

export default function CashTrackingSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-[#050B1C] text-white py-20 px-6 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden">
      {/* Left Side - Combined Image and Floating Cards */}
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src="/assets/galleryImageLeft.png"
          alt="Main graphic"
          width={550}
          height={550}
          className="rounded-xl object-cover"
        />

        {/* Floating Cards */}
        <div className="absolute top-6 right-16 bg-white rounded-md px-3 py-1 text-sm text-black shadow-lg">
          <p className="text-[#0066FF] font-semibold">$2300.55</p>
          <p className="text-xs">Payment Sent</p>
        </div>
      </div>

      {/* Right Side - Text & Accordions */}
      <div className="relative z-10 flex flex-col justify-center">
        <h2 className="text-4xl font-bold leading-tight mb-4">
          IN REAL TIME, SEE WHERE THE COMPANY’S CASH IS SPENT.
        </h2>
        <p className="text-gray-300 mb-6 max-w-lg">
          Just have a business account, credit card, and spend management
          software everything into one hassle free way.
        </p>
        <a
          href="#"
          className="text-[#00F0FF] font-semibold mb-8 inline-block hover:underline"
        >
          Get Start with zyvo →
        </a>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="bg-[#0C1730] p-4 rounded-xl cursor-pointer border border-[#12304C]"
                onClick={() =>
                  setOpenIndex((prev) => (prev === index ? -1 : index))
                }
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {isOpen ? (
                    <ChevronUp className="text-[#00F0FF]" size={20} />
                  ) : (
                    <ChevronDown className="text-[#00F0FF]" size={20} />
                  )}
                </div>
                {isOpen && item.description && (
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
