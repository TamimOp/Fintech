"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InfoTwo() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
      {/* Sparkle Top Left - Reversed */}
      <motion.div
        initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-10"
      >
        <Image
          src="/assets/InfoOneSparkle.svg"
          alt="Sparkle"
          width={150}
          height={150}
          className="opacity-100 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 scale-x-[-1]"
        />
      </motion.div>

      {/* Subtract - Side by side of Sparkle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-4 left-20 sm:top-6 sm:left-24 md:top-8 md:left-32 lg:left-40 xl:left-44 z-10"
      >
        <Image
          src="/assets/Subtract.svg"
          alt="Subtract"
          width={49}
          height={49}
          className="opacity-100 w-6 h-6 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
        />
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-6 sm:gap-8 lg:gap-16">
        {/* ✅ Right Side: Dynamic Glass Cards - Responsive */}
        <motion.div
          className="flex flex-col justify-center w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[588px] min-h-[400px] sm:min-h-[600px] md:min-h-[650px] lg:h-[691px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#043a72] to-[#032d5a] shadow-2xl z-0 border border-blue-500/20 my-4 sm:my-8 p-3 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden gap-3 sm:gap-6 lg:gap-15 group"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Top Card - Responsive */}
          <div className="relative bg-[#081E404F] backdrop-blur-md rounded-2xl shadow-md overflow-hidden flex flex-col items-start gap-2 flex-shrink-0 w-full max-w-full sm:max-w-[507px] min-h-[120px] sm:min-h-[230px] md:min-h-[250px] lg:h-[262px] px-3 sm:px-6 md:px-8 py-3 sm:py-6 md:py-8 group-hover:border-blue-400/60 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 mx-auto">
            <div className="text-white/70 text-sm sm:text-base">
              April, 2024
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[62px] font-bold text-white group-hover:text-[#22FFFF] duration-300">
              $820.99
            </div>
            <div className="text-white/60 text-xs sm:text-sm md:text-base">
              From Our Latest Marketing Campaign
            </div>
            <Image
              src="/assets/whiteLine.svg"
              alt="White Line"
              width={240}
              height={220}
              className="absolute -right-[6px] bottom-0 pointer-events-none w-[120px] sm:w-[180px] md:w-[200px] lg:w-[240px] h-auto"
            />
            <Image
              src="/assets/blueLine.svg"
              alt="Blue Line"
              width={240}
              height={220}
              className="absolute -right-[6px] bottom-0 pointer-events-none w-[120px] sm:w-[180px] md:w-[200px] lg:w-[240px] h-auto"
            />
          </div>

          {/* Bottom Cards - Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full justify-center">
            {/* Chart Card - Responsive */}
            <div className="bg-[#081E404F] backdrop-blur-md rounded-2xl shadow-md flex flex-col justify-center items-start gap-0 flex-shrink-0 w-full max-w-full sm:max-w-[247px] min-h-[100px] sm:h-[200px] md:h-[220px] lg:h-[246px] px-3 sm:px-6 py-3 sm:py-3 group-hover:border-blue-400/60 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 mx-auto sm:mx-0">
              <div className="text-white/70 text-xs sm:text-sm md:text-base mb-1">
                Monthly Sales
              </div>
              <div className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white mb-2">
                2.25K
              </div>
              <div className="relative w-full">
                <Image
                  src="/assets/chart.svg"
                  alt="Chart"
                  width={200}
                  height={80}
                  className="w-full h-auto object-contain group-hover:opacity-0 transition-opacity duration-300"
                />
                <Image
                  src="/assets/chartCyan.svg"
                  alt="Chart Cyan"
                  width={200}
                  height={80}
                  className="w-full h-auto object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Profile Card - Responsive */}
            <div className="bg-[#081E404F] backdrop-blur-md rounded-2xl shadow-md flex flex-col justify-center items-start gap-0 flex-shrink-0 w-full max-w-full sm:max-w-[247px] min-h-[100px] sm:h-[200px] md:h-[220px] lg:h-[246px] px-3 sm:px-6 py-3 sm:py-3 group-hover:border-blue-400/60 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 mx-auto sm:mx-0">
              <div className="text-white/70 text-xs sm:text-sm md:text-base mb-1">
                June 2024
              </div>
              <div className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white mb-2 sm:mb-4">
                6.56K
              </div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3 w-full">
                <Image
                  src="/assets/dp1.png"
                  alt="Will Smith"
                  width={32}
                  height={32}
                  className="rounded-full w-6 h-6 sm:w-8 sm:h-8 object-cover flex-shrink-0"
                />
                <div className="text-white/80 text-xs flex-grow min-w-0">
                  <div className="font-semibold text-sm sm:text-lg md:text-xl truncate">
                    Will Smith
                  </div>
                  <div className="text-white/50 text-xs sm:text-sm md:text-base truncate">
                    2.5k Seals
                  </div>
                </div>
                <Image
                  src="/assets/dp1LightblueLine.svg"
                  alt="Light Blue Line"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0"
                />
              </div>
              <div className="flex items-center gap-2 w-full">
                <Image
                  src="/assets/dp2.png"
                  alt="Jack Grelish"
                  width={32}
                  height={32}
                  className="rounded-full w-6 h-6 sm:w-8 sm:h-8 object-cover flex-shrink-0"
                />
                <div className="text-white/80 text-xs flex-grow min-w-0">
                  <div className="font-semibold text-sm sm:text-lg md:text-xl truncate">
                    Jack Grelish
                  </div>
                  <div className="text-white/50 text-xs sm:text-sm md:text-base truncate">
                    2.5k Seals
                  </div>
                </div>
                <Image
                  src="/assets/dp2LightblueLine.svg"
                  alt="Light Blue Line"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ Left Side: Responsive Text Content */}
        <motion.div
          className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8 w-full max-w-[621px] text-white px-1 md:px-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            FEEL THE BEST EXPERIENCE <br className="hidden sm:block" />
            <span className="sm:hidden">FEEL THE BEST EXPERIENCE </span>
            WITH OUR FEATURES
          </motion.h2>

          <motion.p
            className="text-white/90 sm:text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            End-to-end AP automation, global treasury, and faster receivables in
            one-click
          </motion.p>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
            {/* Feature 1 */}
            <motion.div
              className="flex items-start gap-3 sm:gap-4 lg:gap-6 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 p-2 sm:p-3 bg-blue-600/20 rounded-lg sm:rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Image
                  src="/assets/clock.svg"
                  alt="Clock Icon"
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 lg:mb-3">
                  Real-Time Transaction Tracking
                </h4>
                <p className="text-white/85 sm:text-white/70 leading-relaxed text-xs sm:text-sm lg:text-base">
                  Get instant notifications on transactions, withdrawals, or
                  deposits, ensuring you&#39;re always in control of your
                  financial flow.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-start gap-3 sm:gap-4 lg:gap-6 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 p-2 sm:p-3 bg-blue-600/20 rounded-lg sm:rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Image
                  src="/assets/credit-card.svg"
                  alt="Credit Card Icon"
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 lg:mb-3">
                  Integrated Payment Solutions
                </h4>
                <p className="text-white/85 sm:text-white/70 leading-relaxed text-xs sm:text-sm lg:text-base">
                  Seamlessly connect multiple payment methods and manage all
                  your financial operations from one unified platform.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex items-start gap-3 sm:gap-4 lg:gap-6 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 p-2 sm:p-3 bg-blue-600/20 rounded-lg sm:rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Image
                  src="/assets/lock.svg"
                  alt="Lock Icon"
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 lg:mb-3">
                  Secure Account Access
                </h4>
                <p className="text-white/85 sm:text-white/70 leading-relaxed text-xs sm:text-sm lg:text-base">
                  Bank-level security with multi-factor authentication and
                  advanced encryption to protect your sensitive financial data.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-full sm:w-auto flex justify-center sm:justify-start mt-6 sm:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="bg-white text-blue-900 font-semibold rounded-full px-8 py-4 sm:px-6 sm:py-3 lg:px-8 lg:py-4 hover:scale-105 hover:shadow-xl transition-all duration-300 text-base sm:text-sm lg:text-base w-full sm:w-auto text-center sm:inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
