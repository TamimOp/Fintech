"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { CornerLeftDown } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [selectedCard, setSelectedCard] = useState(1);

  const plans = [
    {
      title: "Starter",
      description: "Essential unbeatable value.",
      price: "$99",
      features: [
        "All Free Trial features",
        "Real-time transaction tracking",
        "Monthly financial reports",
        "In-app customer support",
        "No setup fees",
      ],
    },
    {
      title: "Pro",
      description: "Advanced features for growth.",
      price: "$199",
      features: [
        "All Basic Plan features",
        "Advanced budgeting tools",
        "Investment tracking",
        "Customizable notifications",
        "Unlimited transactions",
      ],
    },
    {
      title: "Enterprise",
      description: "Complete business solution.",
      price: "$299",
      features: [
        "All Pro Plan features included",
        "Priority 24/7 support",
        "Custom integrations",
        "Advanced analytics",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-4 md:px-8 text-white text-center">
      {/* Subtract and Sparkle */}
      <Image
        src="/assets/Subtract.svg"
        alt="Subtract"
        width={49}
        height={49}
        className="absolute top-60 right-38"
      />
      <Image
        src="/assets/InfoOneSparkle.svg"
        alt="Sparkle"
        width={120}
        height={120}
        className="absolute top-60 right-10"
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        CHOOSE YOUR RIGHT PLAN!
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-8">
        Find the right plan for you with flexible options and clear pricing,
        designed to meet your needs without hidden fees.
      </p>

      {/* Toggle */}
      <div className="inline-flex items-center justify-center bg-[#071e62] rounded-full p-2 mb-16">
        <button className="px-3 py-2 text-sm font-medium rounded-full bg-blue-600 transition">
          Monthly Plan
        </button>
        <button className="px-3 py-2 text-sm font-medium rounded-full text-white/80 hover:text-white transition">
          Yearly Plan
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl mx-auto items-end">
        {plans.map((plan, index) => (
          <div key={index} className="relative">
            {selectedCard === index ? (
              /* Selected Card with Blue Container */
              <div className="bg-[#075CD6] rounded-[30px] pt-4 pb-1 px-1 relative">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <CornerLeftDown className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">
                    {index === 0
                      ? "Best Value"
                      : index === 1
                      ? "Popular"
                      : "Premium"}
                  </h3>
                </div>
                <div
                  className="bg-[#051951] rounded-[30px] p-10 flex flex-col items-center shadow-2xl cursor-pointer"
                  onClick={() => setSelectedCard(index)}
                >
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="mb-4 text-white/80">{plan.description}</p>
                  <div className="text-5xl font-bold mb-2">{plan.price}</div>
                  <span className="text-sm mb-6 text-white/60">/PER MONTH</span>
                  <ul className="space-y-4 mb-8 text-left w-full">
                    {plan.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="bg-[#002770] rounded-full p-1">
                          <Check className="text-white w-4 h-4" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-800 rounded-full py-3 hover:scale-105 transition shadow-lg">
                    Get Started
                  </button>
                </div>
              </div>
            ) : (
              /* Regular Card */
              <div
                className="bg-[#082E6461] rounded-[30px] p-10 flex flex-col items-center shadow-2xl cursor-pointer"
                onClick={() => setSelectedCard(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="mb-4 text-white/70">{plan.description}</p>
                <div className="text-5xl font-bold mb-2">{plan.price}</div>
                <span className="text-sm mb-6 text-white/60">/PER MONTH</span>
                <ul className="space-y-4 mb-8 text-left w-full">
                  {plan.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-[#002770] rounded-full p-1">
                        <Check className="text-white w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#0027709C] rounded-full py-3 hover:scale-105 transition">
                  Get Started
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
