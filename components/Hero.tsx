"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-40 pb-8 ">
      {/* Full Width Light Background */}
      <div className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none">
        <Image
          src="/assets/light.png"
          alt="Light Effect"
          width={2000}
          height={1200}
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Hero Background - Full Width but only behind content area */}
      <div className="absolute top-40 left-0 w-full h-[400px] z-10 pointer-events-none">
        <Image
          src="/assets/heroBg.png"
          alt="Hero Texture"
          fill
          className="object-cover opacity-100"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-30 text-center max-w-4xl mx-auto">
        {/* Content */}
        <div className="relative z-10">
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
      </div>

      {/* Dashboard Image - Separate from background */}
      <div className="relative z-30 mt-15 w-full max-w-6xl">
        <Image
          src="/assets/heroStat.png"
          alt="Dashboard Statistics"
          width={2000}
          height={1200}
          className="relative w-full h-auto mx-auto drop-shadow-2xl"
        />
      </div>

      {/* Company Logos Section (Within same section) */}
      <div className="relative z-30 mt-16 w-screen -mx-4 md:-mx-8">
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
            {[1, 2, 3, 4, 5].map((num) => (
              <Image
                key={num}
                src={`/assets/company${num}.png`}
                alt={`Company ${num}`}
                width={120}
                height={60}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
