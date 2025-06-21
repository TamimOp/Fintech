import Image from "next/image";
import Link from "next/link";

export default function InfoThree() {
  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-16">
      {/* Sparkle */}
      <Image
        src="/assets/InfoOneSparkle.svg"
        alt="Sparkle"
        width={120}
        height={120}
        className="absolute top-60 right-10"
      />

      {/* Top text row */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16 mb-16">
        {/* Heading */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            EMPOWERING <br />
            BUSINESSES THROUGH <br />
            FINANCIAL INNOVATION
          </h2>
        </div>

        {/* Paragraph + link */}
        <div className="flex-1 max-w-xl lg:max-w-lg">
          <p className="text-white/90 text-xl leading-relaxed mb-6">
            Integrity and innovation are at the heart of everything we do.
            We&apos;re committed to providing businesses with a secure,
            user-friendly platform that transforms the way payments are made and
            received.
          </p>
          <Link
            href="#"
            className="text-cyan-400 font-semibold text-lg inline-flex items-center gap-2 hover:text-cyan-300 transition-colors group"
          >
            Explore More
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Gallery: LEFT big + RIGHT column */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[436px_1fr] gap-6">
        {/* LEFT: big image */}
        <div className="h-[605px]">
          <Image
            src="/assets/galleryImage1.jpg"
            alt="Gallery Image 1"
            width={436}
            height={605}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* RIGHT: top row + bottom text block */}
        <div>
          {/* TOP ROW: two images side by side */}
          <div className="grid grid-cols-2 gap-6 h-[340px] mb-8">
            <Image
              src="/assets/galleryImage2.jpg"
              alt="Gallery Image 2"
              width={200}
              height={340}
              className="rounded-xl object-cover w-full h-full"
            />
            <Image
              src="/assets/galleryImage3.jpg"
              alt="Gallery Image 3"
              width={200}
              height={340}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* BOTTOM: text block with bg & glass */}
          <div className="relative rounded-xl overflow-hidden h-[230px] bg-[#003A8E91] backdrop-blur-3xl">
            {/* Background image */}
            <Image
              src="/assets/galleryTextlayer.png"
              alt="Text Layer BG"
              width={400}
              height={230}
              className="rounded-xl object-cover w-full h-full opacity-35"
            />
            {/* Glass content */}
            <div className="absolute inset-x-4 sm:inset-x-8 md:inset-x-12 lg:inset-x-20 inset-y-4 sm:inset-y-6 md:inset-y-8 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center text-white flex items-center justify-center">
              <p className="text-sm sm:text-base">
                Integrity and innovation are at the heart of everything we do.
                We&apos;re committed to providing businesses with a secure,
                user-friendly platform that transforms the way payments are made
                and received.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
