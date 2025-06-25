"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useEffect } from "react";

export default function BookingDemo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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

  const tidyCalVariants: Variants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-40 pb-8">
        {/* Full Width Light Background */}
        <div className="absolute top-0 md:-top-70 left-0 w-full h-full z-5 pointer-events-none">
          <Image
            src="/assets/light2.png"
            alt="Light Effect"
            width={2000}
            height={1200}
            className="w-full h-full object-cover opacity-100"
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
          <div className="relative z-10">
            <motion.h1
              className="text-white text-3xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The modern platform for global finance teams
            </motion.h1>
            <motion.p
              className="text-white/80 mb-8 text-xl drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Book a quick demo and see how 100+ companies save hours, cut FX
              fees, and never chase an approval again.
            </motion.p>
          </div>
        </motion.div>

        {/* Company Logos Section */}
        <motion.div
          className="relative z-30 mt-16 w-screen -mx-4 md:-mx-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Trusted by text */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-white text-4xl font-medium">
              Trusted by over 10k companies
            </h3>
          </motion.div>

          <div className="relative w-full py-6 bg-[#082E6459]">
            {/* Company Background Image */}
            <Image
              src="/assets/companyBg.png"
              alt="Company Background"
              fill
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-5"
            />

            {/* Company Logos */}
            <div className="relative z-10 flex items-center justify-center gap-12 md:gap-20 lg:gap-24 px-8">
              {[1, 2, 3, 4, 5].map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                >
                  <Image
                    src={`/assets/company${num}.png`}
                    alt={`Company ${num}`}
                    width={120}
                    height={60}
                    className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* TidyCal Booking Section */}
      <motion.section
        className="relative pb-50 py-14 px-4 md:px-8 overflow-hidden"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Blurred Background - Left Side */}
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            flexShrink: 0,
            borderRadius: "400px",
            background: "rgba(0, 149, 255, 0.58)",
            filter: "blur(166.85px)",
            zIndex: 0,
          }}
        />

        {/* Blurred Background - Bottom Right */}
        <div
          className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            flexShrink: 0,
            borderRadius: "400px",
            background: "rgba(0, 149, 255, 0.58)",
            filter: "blur(166.85px)",
            zIndex: 0,
          }}
        />

        <motion.div
          className="flex justify-center relative z-10"
          variants={tidyCalVariants}
        >
          <motion.div
            className="overflow-hidden relative z-20"
            style={{
              width: "1158px",
              height: "681px",
              borderRadius: "16px",
              background: "lightgray",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 255, 255, 0.1)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="tidycal-embed w-full h-full"
              data-path="jawadbd100/zyvo"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
