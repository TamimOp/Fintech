"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.div
        className="relative w-full h-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src="/assets/galleryImageLeft.png"
            alt="Main graphic"
            width={550}
            height={550}
            className="rounded-xl object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Right Side - Text & Accordions */}
      <motion.div
        className="relative z-10 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          IN REAL TIME, SEE WHERE THE COMPANY&apos;S CASH IS SPENT.
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-6 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Just have a business account, credit card, and spend management
          software everything into one hassle free way.
        </motion.p>
        <motion.a
          href="#"
          className="text-[#00F0FF] font-semibold mb-8 inline-block hover:underline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
        >
          Get Start with zyvo →
        </motion.a>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div
                key={index}
                className="bg-[#0C1730] p-4 rounded-xl cursor-pointer border border-[#12304C] hover:border-[#00F0FF]/30 transition-colors"
                onClick={() =>
                  setOpenIndex((prev) => (prev === index ? -1 : index))
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <ChevronUp className="text-[#00F0FF]" size={20} />
                    ) : (
                      <ChevronDown className="text-[#00F0FF]" size={20} />
                    )}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && item.description && (
                    <motion.p
                      className="mt-2 text-sm text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
