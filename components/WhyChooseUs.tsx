"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 px-4 md:px-8 text-center text-white overflow-hidden">
      {/* Top sparkle */}
      <motion.div
        initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 180, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-10 left-10"
      >
        <Image
          src="/assets/InfoOneSparkle.svg"
          alt="Sparkle"
          width={120}
          height={120}
          className="rotate-[180deg]"
        />
      </motion.div>

      {/* Bottom sparkle */}
      <motion.div
        initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute -bottom-9 right-5"
      >
        <Image
          src="/assets/InfoOneSparkle.svg"
          alt="Sparkle"
          width={120}
          height={120}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-35"
      >
        <Image
          src="/assets/Subtract.svg"
          alt="Subtract"
          width={49}
          height={49}
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        WHY YOU HAVE TO CHOOSE US
      </motion.h2>
      <motion.p
        className="text-white/70 max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Find the right plan for you with flexible options and clear pricing,
        designed to meet your needs without hidden fees
      </motion.p>

      {/* Stats Container */}
      <motion.div
        className="max-w-6xl mx-auto bg-gradient-to-br from-[#06275a] to-[#071e62] rounded-3xl flex flex-col md:flex-row overflow-hidden py-6"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Stat 1 */}
        <motion.div
          className="flex-1 py-16 px-8 flex flex-col items-center justify-center relative gap-2 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <motion.div
            className="text-5xl md:text-[62px] font-bold mb-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
            viewport={{ once: true }}
          >
            526<span className="text-2xl md:text-4xl ml-1">k</span>
          </motion.div>
          <p className="text-white/70 text-base md:text-xl">
            Highest level of data protection
          </p>
          {/* Right divider */}
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </motion.div>

        {/* Stat 2 */}
        <motion.div
          className="flex-1 py-16 px-8 flex flex-col items-center justify-center relative gap-2 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <motion.div
            className="text-5xl md:text-[62px] font-bold mb-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1, type: "spring" }}
            viewport={{ once: true }}
          >
            95<span className="text-2xl md:text-4xl ml-1">%</span>
          </motion.div>
          <p className="text-white/70 text-base md:text-xl">
            Highest level of data protection
          </p>
          {/* Right divider */}
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </motion.div>

        {/* Stat 3 */}
        <motion.div
          className="flex-1 py-16 px-8 flex flex-col items-center justify-center gap-2 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <motion.div
            className="text-5xl md:text-[62px] font-bold mb-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3, type: "spring" }}
            viewport={{ once: true }}
          >
            79<span className="text-2xl md:text-4xl ml-1">%</span>
          </motion.div>
          <p className="text-white/70 text-base md:text-xl">
            Highest level of data protection
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
