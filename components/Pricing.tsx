"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { CornerLeftDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <section
      className="relative overflow-hidden py-24 px-4 md:px-8 text-white text-center"
      id="pricing"
    >
      {/* Middle background blur */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          width: "468px",
          height: "449px",
          borderRadius: "468px",
          background: "rgba(0, 149, 255, 0.58)",
          filter: "blur(169.3px)",
        }}
      />

      {/* Subtract and Sparkle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-0 right-30 md:top-60 md:right-38 z-10"
      >
        <Image
          src="/assets/Subtract.svg"
          alt="Subtract"
          width={49}
          height={49}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-0 right-0 md:top-60 md:right-10 z-10"
      >
        <Image
          src="/assets/InfoOneSparkle.svg"
          alt="Sparkle"
          width={120}
          height={120}
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        CHOOSE YOUR RIGHT PLAN!
      </motion.h2>
      <motion.p
        className="text-white/70 max-w-2xl mx-auto mb-8 text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Find the right plan for you with flexible options and clear pricing,
        designed to meet your needs without hidden fees.
      </motion.p>

      {/* Toggle */}
      <motion.div
        className="inline-flex items-center justify-center bg-[#071e62] rounded-full p-2 mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <button className="px-3 py-2 text-sm font-medium rounded-full bg-blue-600 transition">
          Monthly Plan
        </button>
        <button className="px-3 py-2 text-sm font-medium rounded-full text-white/80 hover:text-white transition">
          Yearly Plan
        </button>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl mx-auto items-end">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            {selectedCard === index ? (
              /* Selected Card with Blue Container */
              <motion.div
                className="bg-[#075CD6] rounded-[30px] pt-4 pb-1 px-1 relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center justify-center gap-2 mb-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CornerLeftDown className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">
                    {index === 0
                      ? "Best Value"
                      : index === 1
                      ? "Popular"
                      : "Premium"}
                  </h3>
                </motion.div>
                <div
                  className="bg-[#051951] rounded-[30px] p-10 flex flex-col items-center shadow-2xl cursor-pointer"
                  onClick={() => setSelectedCard(index)}
                >
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="mb-4 text-white/80">{plan.description}</p>
                  <motion.div
                    className="text-5xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  >
                    {plan.price}
                  </motion.div>
                  <span className="text-sm mb-6 text-white/60">/PER MONTH</span>
                  <ul className="space-y-4 mb-8 text-left w-full">
                    {plan.features.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      >
                        <div className="bg-[#002770] rounded-full p-1">
                          <Check className="text-white w-4 h-4" />
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    className="w-full bg-blue-800 rounded-full py-3 hover:scale-105 transition shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              /* Regular Card */
              <div
                className="bg-[#082E6461] rounded-[30px] p-10 flex flex-col items-center shadow-2xl cursor-pointer hover:bg-[#082E6480] transition-colors"
                onClick={() => setSelectedCard(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="mb-4 text-white/70">{plan.description}</p>
                <motion.div
                  className="text-5xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {plan.price}
                </motion.div>
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
                <motion.button
                  className="w-full bg-[#0027709C] rounded-full py-3 hover:scale-105 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
