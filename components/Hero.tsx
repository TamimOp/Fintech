"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-40 bg-gradient-to-b from-[#000b3f] via-[#00174f] to-[#00174f]">
      {/* BG Texture Overlay */}
      <Image
        src="/assets/heroBg.png"
        alt="Hero Texture"
        fill
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Full Width Light Background */}
      <div className="absolute -top-15 left-0 w-full h-full z-5 pointer-events-none">
        <Image
          src="/assets/light.png"
          alt="Light Effect"
          width={2000}
          height={1200}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 text-center max-w-4xl mx-auto">
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          ONE PLATFORM TO POWER <br />
          EVERY FINANCIAL OPERATION IN <br />
          YOUR BUSINESS
        </h1>
        <p className="text-white/80 mb-8 text-xl drop-shadow-md">
          End-to-end AP automation, global treasury, and faster receivables in
          one-click
        </p>
        <Link
          href="#"
          className="inline-block bg-white text-blue-900 font-semibold rounded-full px-6 py-3 hover:scale-105 transition shadow-lg"
        >
          Start free trial
        </Link>
      </div>

      {/* Dashboard Image */}
      <div className="relative z-30 mt-12 w-full max-w-6xl">
        <Image
          src="/assets/heroStat.png"
          alt="Dashboard Statistics"
          width={2000}
          height={1200}
          className="relative w-full h-auto mx-auto drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
