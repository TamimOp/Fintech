import Image from "next/image";
import Link from "next/link";

export default function InfoOne() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
      {/* Sparkle Top Right */}
      <Image
        src="/assets/InfoOneSparkle.svg"
        alt="Sparkle"
        width={150}
        height={150}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10 opacity-100 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
      />

      {/* Subtract - Side by side of Sparkle */}
      <Image
        src="/assets/Subtract.svg"
        alt="Subtract"
        width={49}
        height={49}
        className="absolute top-4 right-20 sm:top-6 sm:right-24 md:top-8 md:right-32 lg:right-40 xl:right-44 z-10 opacity-100 w-6 h-6 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16">
        {/* Left Side: Phones with BG */}
        <div className="flex justify-center items-center flex-shrink-0 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[588px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[691px] bg-gradient-to-br from-[#043a72] to-[#032d5a] rounded-2xl sm:rounded-3xl shadow-2xl z-0 border border-blue-500/20">
          <div className="relative w-full h-full flex justify-center items-end">
            {/* Subtle glow effect */}
            <div className="absolute inset-2 sm:inset-3 md:inset-4 bg-blue-400/10 rounded-2xl sm:rounded-3xl blur-xl z-0" />

            {/* iPhone Container */}
            <div className="relative w-[180px] sm:w-[220px] md:w-[280px] lg:w-[300px] h-full flex items-end justify-center p-4 sm:p-6 md:p-8">
              {/* iPhone 1 - Back (rightmost) */}
              <Image
                src="/assets/iphone1.png"
                alt="iPhone 1"
                width={290}
                height={595}
                className="absolute z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300 w-[120px] sm:w-[160px] md:w-[220px] lg:w-[260px] xl:w-[290px] h-auto left-[40px] sm:left-auto sm:right-0 md:right-0 lg:right-0 bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8"
              />

              {/* iPhone 2 - Middle */}
              <Image
                src="/assets/iphone2.png"
                alt="iPhone 2"
                width={290}
                height={595}
                className="absolute z-20 drop-shadow-2xl hover:scale-105 transition-transform duration-300 w-[120px] sm:w-[160px] md:w-[220px] lg:w-[260px] xl:w-[290px] h-auto left-[32px] sm:left-auto sm:right-2.5 md:right-3 lg:right-[15px] bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8"
              />

              {/* iPhone 3 - Front (leftmost) */}
              <Image
                src="/assets/iphone3.png"
                alt="iPhone 3"
                width={290}
                height={595}
                className="absolute z-30 drop-shadow-2xl hover:scale-105 transition-transform duration-300 w-[120px] sm:w-[160px] md:w-[220px] lg:w-[260px] xl:w-[290px] h-auto left-[24px] sm:left-auto sm:right-5 md:right-6 lg:right-[30px] bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text & Icons */}
        <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8 w-full max-w-[621px] text-white px-1 md:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            FEEL THE BEST EXPERIENCE <br className="hidden sm:block" />
            <span className="sm:hidden">FEEL THE BEST EXPERIENCE </span>
            WITH OUR FEATURES
          </h2>
          <p className="text-white/90 sm:text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
            End-to-end AP automation, global treasury, and faster receivables in
            one-click
          </p>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
            {/* Feature 1 */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 group">
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
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 group">
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
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 group">
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
            </div>
          </div>

          <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-6 sm:mt-0">
            <Link
              href="#"
              className="bg-white text-blue-900 font-semibold rounded-full px-8 py-4 sm:px-6 sm:py-3 lg:px-8 lg:py-4 hover:scale-105 hover:shadow-xl transition-all duration-300 text-base sm:text-sm lg:text-base w-full sm:w-auto text-center sm:inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
