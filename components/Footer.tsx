import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#00174f] to-[#000b3f] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-6 xl:px-25 overflow-hidden">
      {/* Background Image - Only behind content */}
      <div className="absolute left-[10%] sm:left-[15%] lg:left-[220px] top-4 sm:top-6 lg:top-8 w-[80%] sm:w-[70%] lg:w-[999px] h-[200px] sm:h-[280px] lg:h-[364px] z-0">
        <Image
          src="/assets/footerBgStars.png"
          alt="Footer Background Stars"
          width={999}
          height={364}
          className="object-contain opacity-100 w-full h-full"
        />
      </div>

      {/* Custom Ellipse 1 - Left side of footer (shadow glowing) */}
      <div
        className="absolute top-1/2 -left-[100px] sm:-left-[140px] lg:-left-[187px] -bottom-[14px] transform -translate-y-1/2 z-0 w-[250px] sm:w-[350px] lg:w-[468px] h-[250px] sm:h-[350px] lg:h-[468px] rounded-full"
        style={{
          background: "rgba(0, 149, 255, 0.58)",
          filter: "blur(169.3000030517578px)",
        }}
      ></div>

      {/* Custom Ellipse 2 - Top right edge (shadow glowing) */}
      <div
        className="absolute -top-[80px] sm:-top-[110px] lg:-top-[147px] right-[20px] sm:right-[30px] lg:right-[35px] z-0 w-[180px] sm:w-[250px] lg:w-[322px] h-[180px] sm:h-[250px] lg:h-[322px] rounded-full"
        style={{
          background: "rgba(0, 149, 255, 0.58)",
          filter: "blur(169.3000030517578px)",
        }}
      ></div>

      {/* Substract SVG behind contents */}
      <div className="absolute left-[50%] sm:left-[60%] lg:left-85 top-[20%] sm:top-[15%] lg:top-auto z-5 w-[25px] sm:w-[35px] lg:w-[40.657px] h-[25px] sm:h-[35px] lg:h-[40.631px] transform -translate-x-1/2 lg:transform-none">
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
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto relative overflow-hidden rounded-2xl flex flex-col items-center gap-12 sm:gap-16 lg:gap-24 self-stretch z-10">
        {/* Main Content */}
        <div className="flex flex-col sm:flex-col lg:flex-row justify-center items-start gap-8 sm:gap-12 lg:gap-[139px] self-stretch w-full">
          {/* Company Logo & Description */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-4 relative z-10 text-center lg:text-left">
            <Image
              src="/assets/ZyvoLogo.png"
              alt="Zyvo Logo"
              width={40}
              height={40}
              className="mx-auto lg:mx-0 sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[65px]"
            />
            <p className="text-sm sm:text-base lg:text-xl text-[#DBDBDB] max-w-[280px] sm:max-w-[400px] lg:max-w-none mx-auto lg:mx-0">
              Just have a business account, credit card, and spend management
              software everything into one hassle free way.
            </p>
          </div>

          {/* Links Container for Mobile/Tablet */}
          <div className="flex flex-col sm:flex-row lg:contents gap-8 sm:gap-12 lg:gap-[139px] w-full justify-center lg:justify-start">
            {/* Product Links */}
            <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-lg sm:text-xl lg:text-[26px] font-semibold mb-3 sm:mb-4 lg:mb-4 text-white">
                Product
              </h3>
              <ul className="space-y-1 sm:space-y-2 lg:space-y-2 text-sm sm:text-base lg:text-xl text-[#DBDBDB]">
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
            <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-lg sm:text-xl lg:text-[26px] text-white font-semibold mb-3 sm:mb-4 lg:mb-4">
                Company
              </h3>
              <ul className="space-y-1 sm:space-y-2 lg:space-y-2 text-sm sm:text-base lg:text-xl text-[#DBDBDB]">
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
            <div className="relative z-10 text-center lg:text-left">
              {/* footerBgStars2 - Bottom left of social media icons */}
              <div className="absolute top-[60px] sm:top-[80px] lg:top-[100px] -left-6 sm:-left-8 lg:-left-12 z-0">
                <Image
                  src="/assets/footerBgStars2.png"
                  alt="Footer Background Stars 2"
                  width={35}
                  height={40}
                  className="opacity-100 sm:w-[40px] sm:h-[45px] lg:w-[50px] lg:h-[56px]"
                />
              </div>

              <h3 className="text-lg sm:text-xl lg:text-[26px] text-white font-semibold mb-3 sm:mb-4 lg:mb-4">
                Social Media
              </h3>
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 lg:space-x-4 text-blue-400 text-lg sm:text-xl lg:text-xl">
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Linkedin
                    size={20}
                    className="sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"
                  />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Facebook
                    size={20}
                    className="sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"
                  />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Instagram
                    size={20}
                    className="sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"
                  />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Twitter
                    size={20}
                    className="sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Zyvo Logo and Copyright */}
        <div className="border border-blue-500 rounded-xl sm:rounded-2xl lg:rounded-2xl py-3 sm:py-4 lg:py-4 px-4 sm:px-6 lg:px-6 flex flex-col md:flex-row items-center justify-between w-full text-xs sm:text-sm lg:text-sm text-gray-300 gap-3 sm:gap-4 lg:gap-4">
          <Image
            src="/assets/Zyvo.png"
            alt="Zyvo bottom logo"
            width={80}
            height={32}
            className="sm:w-[90px] sm:h-[36px] lg:w-[100px] lg:h-[40px]"
          />
          <p className="text-center">©2025 Jawad. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
