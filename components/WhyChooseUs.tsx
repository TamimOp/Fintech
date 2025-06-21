"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 px-4 md:px-8 text-center text-white overflow-hidden">
      {/* Top sparkle */}
      <Image
        src="/assets/InfoOneSparkle.svg"
        alt="Sparkle"
        width={120}
        height={120}
        className="absolute top-10 left-10 rotate-[180deg]"
      />

      {/* Bottom sparkle */}
      <Image
        src="/assets/InfoOneSparkle.svg"
        alt="Sparkle"
        width={120}
        height={120}
        className="absolute -bottom-9 right-5"
      />
      <Image
        src="/assets/Subtract.svg"
        alt="Subtract"
        width={49}
        height={49}
        className="absolute bottom-8 right-35"
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        WHY YOU HAVE TO CHOOSE US
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-16">
        Find the right plan for you with flexible options and clear pricing,
        designed to meet your needs without hidden fees
      </p>

      {/* Stats Container */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#06275a] to-[#071e62] rounded-3xl flex flex-col md:flex-row overflow-hidden py-6">
        {/* Stat 1 */}
        <div className="flex-1 py-16 px-8 flex flex-col items-center justify-center relative gap-2">
          <div className="text-5xl md:text-[62px] font-bold mb-3">
            526<span className="text-2xl md:text-4xl ml-1">k</span>
          </div>
          <p className="text-white/70 text-base md:text-xl">
            Highest level of data protection
          </p>
          {/* Right divider */}
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>

        {/* Stat 2 */}
        <div className="flex-1 py-16 px-8 flex flex-col items-center justify-center relative gap-2">
          <div className="text-5xl md:text-[62px] font-bold mb-3">
            95<span className="text-2xl md:text-4xl ml-1">%</span>
          </div>
          <p className="text-white/70 text-base md:text-xl">
            Highest level of data protection
          </p>
          {/* Right divider */}
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>

        {/* Stat 3 */}
        <div className="flex-1 py-16 px-8 flex flex-col items-center justify-center gap-2">
          <div className="text-5xl md:text-[62px] font-bold mb-3">
            79<span className="text-2xl md:text-4xl ml-1">%</span>
          </div>
          <p className="text-white/70 text-base md:text-xl">
            Highest level of data protection
          </p>
        </div>
      </div>
    </section>
  );
}
