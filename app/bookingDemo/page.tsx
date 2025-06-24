"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useEffect } from "react";

export default function BookingDemo() {
  // Load TidyCal script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
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

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-40 pb-8">
      {/* Full Width Light Background */}
      <div className="absolute top-0 md:-top-130 left-0 w-full h-full z-5 pointer-events-none">
        <Image
          src="/assets/light.png"
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
        className="relative z-30 text-center max-w-4xl mx-auto mb-12"
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

      {/* TidyCal Booking Widget */}
      <motion.div
        className="relative z-30 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="tidycal-embed" data-path="jawadbd100/zyvo" />
      </motion.div>
    </section>
  );
}
