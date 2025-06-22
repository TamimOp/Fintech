"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Expectation() {
  return (
    <section className="relative overflow-hidden py-25 px-4 md:px-8 flex flex-col items-center text-center">
      {/* Sparkle Top Left */}
      <motion.div
        initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-0 left-40 z-10"
      >
        <Image
          src="/assets/InfoOneSparkle.svg"
          alt="Sparkle"
          width={150}
          height={150}
        />
      </motion.div>

      {/* Subtract - Side by side of Sparkle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-0 left-28 z-10"
      >
        <Image
          src="/assets/Subtract.svg"
          alt="Subtract"
          width={49}
          height={49}
          className="w-6 h-6 sm:w-12 sm:h-12 md:w-12 md:h-12"
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-35 leading-tight max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        WHAT CAN YOU EXPECT TO RECEIVE <br />
        FROM OUR PLATFORM?
      </motion.h2>

      {/* Circles Row */}
      <div className="flex flex-col md:flex-row items-center justify-center relative py-10 z-20">
        {/* Circle 1 */}
        <motion.div
          className="w-[338px] h-[338px] rounded-full border border-white/40 flex flex-col items-center justify-center text-white p-6 relative z-10 group"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
        >
          <motion.span
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            40%
          </motion.span>
          <h4 className="text-base md:text-xl font-semibold">
            Sales improvements
          </h4>
          <p className="text-xs md:text-base text-white/70 text-center">
            increasing sales performance for expansion
          </p>
        </motion.div>

        {/* Circle 2 - Colorful, pushed up more */}
        <motion.div
          className="w-[338px] h-[338px] rounded-full bg-[#1E69F4] flex flex-col items-center justify-center text-white p-6 relative z-20 -ml-6 md:-ml-12 -mt-8 md:-mt-40 group"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
        >
          <motion.span
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            45%
          </motion.span>
          <h4 className="text-base md:text-xl font-semibold">Time saving</h4>
          <p className="text-xs md:text-base text-white/70 text-center">
            It help to complete the task super fast.
          </p>
        </motion.div>

        {/* Circle 3 */}
        <motion.div
          className="w-[338px] h-[338px] rounded-full border border-white/40 flex flex-col items-center justify-center text-white p-6 relative z-10 -ml-6 md:-ml-12 group"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
        >
          <motion.span
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            34%
          </motion.span>
          <h4 className="text-base md:text-xl font-semibold">
            Transactions per day
          </h4>
          <p className="text-xs md:text-base text-white/70 text-center">
            Daily transactions for financial tracking
          </p>
        </motion.div>

        {/* Circle 4 - Colorful, pushed up more */}
        <motion.div
          className="w-[338px] h-[338px] rounded-full bg-[#57F7FD] flex flex-col items-center justify-center text-[#111] p-6 relative z-20 -ml-6 md:-ml-12 -mt-8 md:-mt-40 group"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }}
        >
          <motion.span
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
          >
            90%
          </motion.span>
          <h4 className="text-base md:text-xl font-semibold">Happy Client</h4>
          <p className="text-xs md:text-base text-[#111]/70 text-center">
            90% of users of Zyvo are happy with the features.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
