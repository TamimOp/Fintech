"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const starGlowVariants: Variants = {
    initial: {
      opacity: 1,
      filter:
        "drop-shadow(0 0 8px #FFFFFF) drop-shadow(0 0 15px #00AAFF) drop-shadow(0 0 20px #0095FF)",
      scale: 1,
    },
    animate: {
      opacity: [1, 1.2, 1],
      filter: [
        "drop-shadow(0 0 8px #FFFFFF) drop-shadow(0 0 15px #00AAFF) drop-shadow(0 0 20px #0095FF)",
        "drop-shadow(0 0 15px #FFFFFF) drop-shadow(0 0 25px #00AAFF) drop-shadow(0 0 35px #0095FF)",
        "drop-shadow(0 0 8px #FFFFFF) drop-shadow(0 0 15px #00AAFF) drop-shadow(0 0 20px #0095FF)",
      ],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const smallStarGlowVariants: Variants = {
    initial: {
      opacity: 1,
      filter:
        "drop-shadow(0 0 6px #FFFFFF) drop-shadow(0 0 12px #00AAFF) drop-shadow(0 0 18px #0095FF)",
      scale: 1,
    },
    animate: {
      opacity: [1, 1.3, 1],
      filter: [
        "drop-shadow(0 0 6px #FFFFFF) drop-shadow(0 0 12px #00AAFF) drop-shadow(0 0 18px #0095FF)",
        "drop-shadow(0 0 12px #FFFFFF) drop-shadow(0 0 20px #00AAFF) drop-shadow(0 0 30px #0095FF)",
        "drop-shadow(0 0 6px #FFFFFF) drop-shadow(0 0 12px #00AAFF) drop-shadow(0 0 18px #0095FF)",
      ],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const subtractGlowVariants: Variants = {
    initial: {
      opacity: 0.7,
      filter: "drop-shadow(0 0 5px #00FFFF)",
    },
    animate: {
      opacity: [0.7, 1, 0.7],
      filter: [
        "drop-shadow(0 0 5px #00FFFF)",
        "drop-shadow(0 0 15px #00FFFF) drop-shadow(0 0 25px #0095FF)",
        "drop-shadow(0 0 5px #00FFFF)",
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-40 pb-8 ">
      {/* Full Width Light Background */}
      <div className="absolute top-0 md:-top-35 left-0 w-full h-full z-5 pointer-events-none">
        <Image
          src="/assets/light.png"
          alt="Light Effect"
          width={2000}
          height={1200}
          className="w-full h-[1200px] md:h-full object-fill opacity-100"
        />
      </div>

      {/* Hero Background - Repeating Texture Pattern */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full opacity-30"
          style={{
            backgroundImage: "url(/assets/heroBg.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "70% 70%",
            backgroundPosition: "center",
            filter: "brightness(1.2) contrast(1.1)",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full opacity-30"
          style={{
            backgroundImage: "url(/assets/heroBg.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "75% 75%",
            backgroundPosition: "12.5% 12.5%",
            filter: "brightness(0.8) contrast(1.3)",
          }}
        />
      </div>

      {/* Background Stars - Bright and Clear */}
      <motion.div
        className="absolute left-[10%] sm:left-[15%] lg:left-[220px] top-20 sm:top-24 lg:top-32 w-[80%] sm:w-[70%] lg:w-[999px] h-[200px] sm:h-[280px] lg:h-[364px] z-15 pointer-events-none"
        variants={starGlowVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        <Image
          src="/assets/footerBgStars.png"
          alt="Decorative background stars"
          width={999}
          height={364}
          className="object-contain w-full h-full brightness-150 contrast-125"
          priority={false}
        />
      </motion.div>

      {/* Small Decorative Stars - Bright and Clear */}
      <motion.div
        className="absolute top-[200px] sm:top-[250px] lg:top-[300px] right-[10%] sm:right-[15%] lg:right-[200px] z-15 pointer-events-none"
        variants={smallStarGlowVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        <Image
          src="/assets/footerBgStars2.png"
          alt="Decorative stars"
          width={35}
          height={40}
          className="sm:w-[40px] sm:h-[45px] lg:w-[50px] lg:h-[56px] brightness-150 contrast-125"
        />
      </motion.div>

      {/* Decorative Subtract SVG */}
      <motion.div
        className="absolute left-[15%] sm:left-[20%] lg:left-[300px] top-[150px] sm:top-[180px] lg:top-[150px] z-15 w-[25px] sm:w-[35px] lg:w-[40.657px] h-[25px] sm:h-[35px] lg:h-[40.631px] pointer-events-none"
        variants={subtractGlowVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        <Image
          src="/assets/Subtract.svg"
          alt="Decorative element"
          width={40.657}
          height={40.631}
          className="w-full h-full"
          style={{ fill: "#2FF" }}
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="relative z-30 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Content */}
        <div className="relative z-10">
          <motion.h1
            className="text-white text-3xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ONE PLATFORM TO POWER <br />
            EVERY FINANCIAL OPERATION IN <br />
            YOUR BUSINESS
          </motion.h1>
          <motion.p
            className="text-white/80 mb-8 text-xl drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            End-to-end AP automation, global treasury, and faster receivables in
            one-click
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/register"
              className="inline-block bg-white text-blue-900 font-semibold rounded-full px-6 py-3 hover:scale-105 transition shadow-lg"
            >
              Start free trial
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Dashboard Image - Separate from background */}
      <motion.div
        className="relative z-30 mt-15 w-full max-w-6xl"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          src="/assets/heroStat.png"
          alt="Dashboard Statistics"
          width={2000}
          height={1200}
          className="relative w-full h-auto mx-auto drop-shadow-2xl"
        />
      </motion.div>

      {/* Company Logos Section (Within same section) */}
      <motion.div
        className="relative z-30 mt-16 w-screen -mx-4 md:-mx-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="relative w-full py-6 bg-[#082E6459]">
          {/* Company Background Image */}
          <Image
            src="/assets/companyBg.png"
            alt="Company Background"
            fill
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-5"
          />

          {/* Company Logos */}
          <div className="relative z-10 flex items-center justify-center gap-8 md:gap-20 lg:gap-24 px-8">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              >
                <Image
                  src={`/assets/company${num}.png`}
                  alt={`Company ${num}`}
                  width={120}
                  height={60}
                  className="h-4 md:h-8 w-10 md:w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
