"use client";

import Image from "next/image";

export default function Expectation() {
  return (
    <section className="relative overflow-hidden py-25 px-4 md:px-8 flex flex-col items-center text-center">
      {/* Sparkle Top Left */}
      <Image
        src="/assets/InfoOneSparkle.svg"
        alt="Sparkle"
        width={150}
        height={150}
        className="absolute top-0 left-40 z-10"
      />

      {/* Subtract - Side by side of Sparkle */}
      <Image
        src="/assets/Subtract.svg"
        alt="Subtract"
        width={49}
        height={49}
        className="absolute top-0 left-28 z-10 w-6 h-6 sm:w-12 sm:h-12 md:w-12 md:h-12"
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-35 leading-tight max-w-4xl">
        WHAT CAN YOU EXPECT TO RECEIVE <br />
        FROM OUR PLATFORM?
      </h2>

      {/* Circles Row */}
      <div className="flex flex-col md:flex-row items-center justify-center relative py-10 z-20">
        {/* Circle 1 */}
        <div className="w-[338px] h-[338px] rounded-full border border-white/40 flex flex-col items-center justify-center text-white p-6 relative z-10">
          <span className="text-4xl md:text-5xl font-bold mb-2">40%</span>
          <h4 className="text-base md:text-xl font-semibold">
            Sales improvements
          </h4>
          <p className="text-xs md:text-base text-white/70 text-center">
            increasing sales performance for expansion
          </p>
        </div>

        {/* Circle 2 - Colorful, pushed up more */}
        <div className="w-[338px] h-[338px] rounded-full bg-[#1E69F4] flex flex-col items-center justify-center text-white p-6 relative z-20 -ml-6 md:-ml-12 -mt-8 md:-mt-40">
          <span className="text-4xl md:text-5xl font-bold mb-2">45%</span>
          <h4 className="text-base md:text-xl font-semibold">Time saving</h4>
          <p className="text-xs md:text-base text-white/70 text-center">
            It help to complete the task super fast.
          </p>
        </div>

        {/* Circle 3 */}
        <div className="w-[338px] h-[338px] rounded-full border border-white/40 flex flex-col items-center justify-center text-white p-6 relative z-10 -ml-6 md:-ml-12">
          <span className="text-4xl md:text-5xl font-bold mb-2">34%</span>
          <h4 className="text-base md:text-xl font-semibold">
            Transactions per day
          </h4>
          <p className="text-xs md:text-base text-white/70 text-center">
            Daily transactions for financial tracking
          </p>
        </div>

        {/* Circle 4 - Colorful, pushed up more */}
        <div className="w-[338px] h-[338px] rounded-full bg-[#57F7FD] flex flex-col items-center justify-center text-[#111] p-6 relative z-20 -ml-6 md:-ml-12 -mt-8 md:-mt-40">
          <span className="text-4xl md:text-5xl font-bold mb-2">90%</span>
          <h4 className="text-base md:text-xl font-semibold">Happy Client</h4>
          <p className="text-xs md:text-base text-[#111]/70 text-center">
            90% of users of Zyvo are happy with the features.
          </p>
        </div>
      </div>
    </section>
  );
}
