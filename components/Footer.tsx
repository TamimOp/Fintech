import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#00174f] to-[#000b3f] text-white py-12 px-6 md:px-25 overflow-hidden">
      {/* Background Image - Only behind content */}
      <div className="absolute left-[220px] top-8 w-[999px] h-[364px] z-0">
        <Image
          src="/assets/footerBgStars.png"
          alt="Footer Background Stars"
          width={999}
          height={364}
          className="object-contain opacity-100"
        />
      </div>

      {/* Custom Ellipse 1 - Left side of footer (shadow glowing) */}
      <div
        className="absolute top-1/2 -left-[187px] -bottom-[14px] transform -translate-y-1/2 z-0 w-[468px] h-[468px] rounded-full"
        style={{
          background: "rgba(0, 149, 255, 0.58)",
          filter: "blur(169.3000030517578px)",
        }}
      ></div>

      {/* Custom Ellipse 2 - Top right edge (shadow glowing) */}
      <div
        className="absolute -top-[147px] right-[35px] z-0 w-[322px] h-[322px] rounded-full"
        style={{
          background: "rgba(0, 149, 255, 0.58)",
          filter: "blur(169.3000030517578px)",
        }}
      ></div>

      {/* Substract SVG behind contents */}
      <div className="absolute left-85 z-5 w-[40.657px] h-[40.631px]">
        <Image
          src="/assets/Subtract.svg"
          alt="Substract"
          width={40.657}
          height={40.631}
          className="w-full h-full"
          style={{ fill: "#2FF" }}
        />
      </div>

      {/* Contents - With background image only behind this section */}
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl flex flex-col items-center gap-24 self-stretch z-10">
        {/* Main Content */}
        <div className="flex justify-center items-start gap-[139px] self-stretch w-full">
          {/* Company Logo & Description */}
          <div className="space-y-4 relative z-10">
            <Image
              src="/assets/ZyvoLogo.png"
              alt="Zyvo Logo"
              width={50}
              height={50}
            />
            <p className="text-xl text-[#DBDBDB]">
              Just have a business account, credit card, and spend management
              software everything into one hassle free way.
            </p>
          </div>

          {/* Product Links */}
          <div className="relative z-10">
            <h3 className="text-[26px] font-semibold mb-4 text-white">
              Product
            </h3>
            <ul className="space-y-2 text-xl text-[#DBDBDB]">
              <li className="whitespace-nowrap">
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link href="#" className="hover:text-white transition-colors">
                  Request a demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="relative z-10">
            <h3 className="text-[26px] text-white font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-xl text-[#DBDBDB]">
              <li className="whitespace-nowrap">
                <Link href="#" className="hover:text-white transition-colors">
                  Cover
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link href="#" className="hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy & Policy
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link href="#" className="hover:text-white transition-colors">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="relative z-10">
            {/* footerBgStars2 - Bottom left of social media icons */}
            <div className="absolute top-[100px] -left-12 z-0">
              <Image
                src="/assets/footerBgStars2.png"
                alt="Footer Background Stars 2"
                width={50}
                height={56}
                className="opacity-100"
              />
            </div>

            <h3 className="text-[26px] text-white font-semibold mb-4">
              Social Media
            </h3>
            <div className="flex space-x-4 text-blue-400 text-xl">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Zyvo Logo and Copyright */}
        <div className="border border-blue-500 rounded-2xl py-4 px-6 flex flex-col md:flex-row items-center justify-between w-full text-sm text-gray-300 gap-4">
          <Image
            src="/assets/Zyvo.png"
            alt="Zyvo bottom logo"
            width={100}
            height={40}
          />
          <p className="text-center">©2025 Jawad. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
