import Image from "next/image";

export default function FinancialExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto relative rounded-[32px] overflow-hidden px-8 md:px-20 py-16 bg-[#0A1E49]">
        {/* Background overlay image */}
        <Image
          src="/assets/light2.png"
          alt="decorative bg"
          fill
          className="absolute inset-0 object-cover pointer-events-none z-0"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-end justify-between gap-16 min-h-[380px]">
          {/* Text content */}
          <div className="text-center lg:text-left lg:self-center flex-1">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              UPGRADE YOUR FINANCIAL EXPERIENCE TODAY
            </h2>
            <p className="text-[#D1D5DB] mb-8 text-base md:text-lg leading-relaxed">
              Just have a business account, credit card, and spend <br />
              management software everything into one hassle free way.
            </p>
            <button className="bg-gradient-to-r from-[#288DFF] to-[#527BFF] hover:opacity-90 text-white px-8 py-3 rounded-full text-base font-medium shadow-md transition duration-300">
              Get Started
            </button>
          </div>

          {/* Phone image */}
          <div className="w-[320px] md:w-[380px] flex-shrink-0 -mb-16">
            <Image
              src="/assets/iphone4.png"
              alt="Mobile App"
              width={380}
              height={776}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
