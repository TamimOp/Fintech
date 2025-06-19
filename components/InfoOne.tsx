import Image from "next/image";
import Link from "next/link";

export default function InfoOne() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 md:px-8 lg:px-16 ">
      {/* Sparkle Top Right */}
      <Image
        src="/assets/InfoOneSparkle.svg"
        alt="Sparkle"
        width={150}
        height={150}
        className="absolute top-8 right-8 z-10 opacity-100"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left Side: Phones with BG */}
        <div className="flex justify-center items-center flex-shrink-0 w-full max-w-[588px] h-[500px] lg:h-[691px] bg-gradient-to-br from-[#043a72] to-[#032d5a] rounded-3xl shadow-2xl z-0 border border-blue-500/20">
          <div className="relative w-full h-full flex justify-center items-end">
            {/* Subtle glow effect */}
            <div className="absolute inset-4 bg-blue-400/10 rounded-3xl blur-xl z-0" />

            {/* iPhone Container */}
            <div className="relative w-[300px] h-full flex items-end justify-center p-8">
              {/* iPhone 1 - Back (rightmost) */}
              <Image
                src="/assets/iphone1.png"
                alt="iPhone 1"
                width={290}
                height={595}
                className="absolute z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ right: "0px", bottom: "32px" }}
              />

              {/* iPhone 2 - Middle */}
              <Image
                src="/assets/iphone2.png"
                alt="iPhone 2"
                width={290}
                height={595}
                className="absolute z-20 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ right: "15px", bottom: "32px" }}
              />

              {/* iPhone 3 - Front (leftmost) */}
              <Image
                src="/assets/iphone3.png"
                alt="iPhone 3"
                width={290}
                height={595}
                className="absolute z-30 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ right: "30px", bottom: "32px" }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text & Icons */}
        <div className="flex flex-col items-start gap-6 lg:gap-8 w-full max-w-[621px] text-white">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            FEEL THE BEST EXPERIENCE <br /> WITH OUR FEATURES
          </h2>
          <p className="text-white/80 text-base lg:text-lg leading-relaxed">
            End-to-end AP automation, global treasury, and faster receivables in
            one-click
          </p>

          <div className="space-y-6 lg:space-y-8 w-full">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 lg:gap-6 group">
              <div className="flex-shrink-0 p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Image
                  src="/assets/clock.svg"
                  alt="Clock Icon"
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                  Real-Time Transaction Tracking
                </h4>
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  Get instant notifications on transactions, withdrawals, or
                  deposits, ensuring you&#39;re always in control of your
                  financial flow.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 lg:gap-6 group">
              <div className="flex-shrink-0 p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Image
                  src="/assets/credit-card.svg"
                  alt="Credit Card Icon"
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                  Integrated Payment Solutions
                </h4>
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  Seamlessly connect multiple payment methods and manage all
                  your financial operations from one unified platform.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 lg:gap-6 group">
              <div className="flex-shrink-0 p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Image
                  src="/assets/lock.svg"
                  alt="Lock Icon"
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                  Secure Account Access
                </h4>
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  Bank-level security with multi-factor authentication and
                  advanced encryption to protect your sensitive financial data.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="#"
            className="inline-block bg-white text-blue-900 font-semibold rounded-full px-6 lg:px-8 py-3 lg:py-4 hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm lg:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
