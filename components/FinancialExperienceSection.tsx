"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinancialExperienceSection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto relative rounded-[32px] overflow-hidden px-8 md:px-20 py-16 bg-[#0A1E49]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background overlay image */}
        <Image
          src="/assets/light2.png"
          alt="decorative bg"
          fill
          className="absolute inset-0 object-cover pointer-events-none z-0"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-end justify-between gap-16 min-h-[380px]">
          {/* Text content */}
          <motion.div
            className="text-center lg:text-left lg:self-center flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              UPGRADE YOUR FINANCIAL EXPERIENCE TODAY
            </motion.h2>
            <motion.p
              className="text-[#D1D5DB] mb-8 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Just have a business account, credit card, and spend <br />
              management software everything into one hassle free way.
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-[#288DFF] to-[#527BFF] hover:opacity-90 text-white px-8 py-3 rounded-full text-base font-medium shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Phone image */}
          <motion.div
            className="w-[320px] md:w-[380px] flex-shrink-0 -mb-16"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/iphone4.png"
              alt="Mobile App"
              width={380}
              height={776}
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
