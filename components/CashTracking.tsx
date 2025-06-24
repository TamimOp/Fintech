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
    <section className="relative bg-[#050B1C] text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 overflow-hidden">
      {/* Left Side - Dynamic Image Layout */}
      <motion.div
        className="relative w-full h-full flex justify-center items-center order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative w-full max-w-[585px]">
          {/* Main Large Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-[585/725] max-w-[585px] mx-auto"
            style={{
              paddingLeft: "min(49px, 8.4%)",
              paddingRight: "min(42px, 7.2%)",
              paddingBottom: "min(46px, 6.3%)",
              paddingTop: "min(2px, 0.3%)",
            }}
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
            className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-20 left-2 sm:left-4 md:left-6 lg:-left-10 z-10 border-2 sm:border-3 border-[#1E69F4] rounded-lg sm:rounded-xl w-[120px] sm:w-[140px] md:w-[160px] lg:w-[186px] aspect-[186/195]"
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
            className="absolute bottom-0 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 right-2 sm:right-0 md:right-2 lg:-right-4 border-2 sm:border-3 border-[#1E69F4] rounded-lg sm:rounded-xl z-10 w-[110px] sm:w-[130px] md:w-[150px] lg:w-[174px] aspect-[174/186]"
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
            className="absolute bottom-32 sm:bottom-40 md:bottom-48 lg:bottom-25 left-0 sm:left-2 md:left-3 lg:left-4 z-20 w-[130px] sm:w-[140px] md:w-[150px] lg:w-[160px]"
            style={{
              display: "flex",
              height: "min(59px, 12vw)",
              padding: "min(6px, 1.2vw) min(11px, 2.2vw)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
              flexShrink: 0,
              borderRadius: "4px",
              background: "#075CD6",
              boxShadow: "3px 3px 8px 0px rgba(0, 59, 255, 0.49)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* First Line - Status with check mark */}
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full flex items-center justify-center">
                <Check
                  size={8}
                  className="sm:size-3 text-[#0067FF]"
                  strokeWidth={2}
                />
              </div>
              <span className="text-white text-[10px] sm:text-xs font-medium truncate">
                Green | Coffee
              </span>
            </div>

            {/* Second Line - Payment Info */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col min-w-0">
                <span className="text-white text-[10px] sm:text-xs font-medium truncate">
                  Jons miran
                </span>
                <span className="text-white/80 text-[8px] sm:text-[10px] truncate">
                  Payment Received
                </span>
              </div>
              <span className="text-white text-[10px] sm:text-xs font-bold ml-1">
                $1300.99
              </span>
            </div>
          </motion.div>

          {/* Floating Notification Card 2 - Above Bottom Right Image */}
          <motion.div
            className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:-bottom-8 right-8 sm:right-10 md:right-11 lg:right-12 z-20 w-[130px] sm:w-[140px] md:w-[150px] lg:w-[160px]"
            style={{
              display: "flex",
              height: "min(59px, 12vw)",
              padding: "min(6px, 1.2vw) min(11px, 2.2vw)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
              flexShrink: 0,
              borderRadius: "4px",
              background: "#075CD6",
              boxShadow: "3px 3px 8px 0px rgba(0, 59, 255, 0.49)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* First Line - Status with check mark */}
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full flex items-center justify-center">
                <Check
                  size={8}
                  className="sm:size-3 text-[#0067FF]"
                  strokeWidth={2}
                />
              </div>
              <span className="text-white text-[10px] sm:text-xs font-medium truncate">
                Tech | Software
              </span>
            </div>

            {/* Second Line - Payment Info */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col min-w-0">
                <span className="text-white text-[10px] sm:text-xs font-medium truncate">
                  Sarah Kim
                </span>
                <span className="text-white/80 text-[8px] sm:text-[10px] truncate">
                  Payment Sent
                </span>
              </div>
              <span className="text-white text-[10px] sm:text-xs font-bold ml-1">
                $850.00
              </span>
            </div>
          </motion.div>

          {/* Floating Notification Card 3 - On Large Image */}
          <motion.div
            className="absolute top-16 sm:top-20 md:top-24 lg:top-40 right-4 sm:right-6 md:right-8 lg:right-30 z-20"
            style={{
              display: "flex",
              width: "122px",
              height: "38px",
              padding: "6px 11px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "10px",
              flexShrink: 0,
              borderRadius: "4px",
              background: "#075CD6",
              boxShadow: "5px 5px 11.8px 0px rgba(0, 59, 255, 0.49)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-between w-full gap-2">
              {/* Left Side - Dollar Circle */}
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#1E69F4] text-[8px] font-bold">$</span>
              </div>

              {/* Right Side - Amount and Status */}
              <div className="flex flex-col items-end min-w-0">
                <span className="text-white text-[10px] font-bold">
                  $2300.55
                </span>
                <span className="text-white/80 text-[8px]">Payment Sent</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Text & Accordions */}
      <motion.div
        className="relative z-10 flex flex-col justify-center order-1 lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          IN REAL TIME, SEE WHERE THE COMPANY&apos;S CASH IS SPENT.
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-4 sm:mb-6 max-w-lg text-base sm:text-lg md:text-xl"
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
          className="text-[#00F0FF] font-semibold mb-6 sm:mb-8 inline-block hover:underline text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
        >
          Get Start with zyvo →
        </motion.a>

        <div className="space-y-3 sm:space-y-4">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div
                key={index}
                className="bg-[#0C1730] p-3 sm:p-4 rounded-xl cursor-pointer border border-[#12304C] hover:border-[#00F0FF]/30 transition-colors"
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
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold pr-2">
                    {item.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {isOpen ? (
                      <ChevronUp className="text-[#00F0FF]" size={18} />
                    ) : (
                      <ChevronDown className="text-[#00F0FF]" size={18} />
                    )}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && item.description && (
                    <motion.p
                      className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed"
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
