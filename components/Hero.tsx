"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-32 bg-gradient-to-b from-[#00174f] to-[#00174f]">
      {/* BG Texture Overlay */}
      <Image
        src="/assets/heroBg.png"
        alt="Hero Texture"
        fill
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6">
          ONE PLATFORM TO POWER <br />
          EVERY FINANCIAL OPERATION IN <br />
          YOUR BUSINESS
        </h1>
        <p className="text-white/80 mb-8">
          End-to-end AP automation, global treasury, and faster receivables in
          one-click
        </p>
        <Link
          href="#"
          className="inline-block bg-white text-blue-900 font-semibold rounded-full px-6 py-3 hover:scale-105 transition"
        >
          Start free trial
        </Link>
      </div>

      {/* Dashboard Image */}
      <div className="relative z-10 mt-12 w-full max-w-6xl">
        <Image
          src="/assets/heroStat.png"
          alt="Dashboard Statistics"
          width={2000}
          height={1200}
          className="w-full h-auto mx-auto"
        />
      </div>
    </section>
  );
}
