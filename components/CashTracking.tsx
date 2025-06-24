"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
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
      {/* Left Side - Dynamic Image Layout */}
      <motion.div
        className="relative w-full h-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative">
          {/* Main Large Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative pl-[49px] pr-[42px] pb-[46px] pt-[2px]"
            style={{ width: "585px", height: "725px" }}
          >
            <Image
              src="/assets/galleryImageLeft1.jpg"
              alt="Main graphic"
              width={585}
              height={725}
              className="rounded-xl object-cover w-full h-full"
            />
          </motion.div>

          {/* Bottom Left Small Image */}
          <motion.div
            className="absolute bottom-20 -left-10 z-10 border-3 border-[#1E69F4] rounded-xl"
            style={{ width: "186px", height: "195px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Image
              src="/assets/galleryImageLeft2.jpg"
              alt="Bottom left graphic"
              width={186}
              height={195}
              className="rounded-lg object-cover w-full h-full shadow-lg"
            />
          </motion.div>

          {/* Bottom Right Small Image */}
          <motion.div
            className="absolute -bottom-8 -right-4 border-3 border-[#1E69F4] rounded-xl z-10"
            style={{ width: "174px", height: "186px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Image
              src="/assets/galleryImageLeft3.jpg"
              alt="Bottom right graphic"
              width={174}
              height={186}
              className="rounded-lg object-cover w-full h-full shadow-lg"
            />
          </motion.div>

          {/* Floating Notification Card 1 - Above Bottom Left Image */}
          <motion.div
            className="absolute bottom-25 left-4 z-20"
            style={{
              display: "flex",
              width: "160px",
              height: "59px",
              padding: "6px 11px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
              flexShrink: 0,
              borderRadius: "4px",
              background: "#075CD6",
              boxShadow: "5px 5px 11.8px 0px rgba(0, 59, 255, 0.49)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* First Line - Status with check mark */}
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <Check size={12} className="text-[#0067FF]" strokeWidth={2} />
              </div>
              <span className="text-white text-xs font-medium">
                Green | Coffee
              </span>
            </div>

            {/* Second Line - Payment Info */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <span className="text-white text-xs font-medium">
                  Jons miran
                </span>
                <span className="text-white/80 text-[10px]">
                  Payment Received
                </span>
              </div>
              <span className="text-white text-xs font-bold">$1300.99</span>
            </div>
          </motion.div>

          {/* Floating Notification Card 2 - Above Bottom Right Image */}
          <motion.div
            className="absolute -bottom-8 right-12 z-20"
            style={{
              display: "flex",
              width: "160px",
              height: "59px",
              padding: "6px 11px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
              flexShrink: 0,
              borderRadius: "4px",
              background: "#075CD6",
              boxShadow: "5px 5px 11.8px 0px rgba(0, 59, 255, 0.49)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* First Line - Status with check mark */}
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <Check size={12} className="text-[#0067FF]" strokeWidth={2} />
              </div>
              <span className="text-white text-xs font-medium">
                Tech | Software
              </span>
            </div>

            {/* Second Line - Payment Info */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <span className="text-white text-xs font-medium">
                  Sarah Kim
                </span>
                <span className="text-white/80 text-[10px]">Payment Sent</span>
              </div>
              <span className="text-white text-xs font-bold">$850.00</span>
            </div>
          </motion.div>
        </div>
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
          className="text-5xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          IN REAL TIME, SEE WHERE THE COMPANY&apos;S CASH IS SPENT.
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-6 max-w-lg text-xl"
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
          className="text-[#00F0FF] font-semibold mb-8 inline-block hover:underline text-xl"
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
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
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
