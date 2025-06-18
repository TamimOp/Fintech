import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#00174f] to-[#000b3f] text-white py-12 px-6 md:px-16 overflow-hidden">
      {/* Background Image - Only behind content */}
      <div className="absolute inset-0 w-full z-0">
        <Image
          src="/assets/footerBgStars.png"
          alt="Footer Background Stars"
          fill
          className="object-contain opacity-100"
        />
      </div>

      {/* footerEllipse1 - Left side of footer (shadow glowing) */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-0">
        <Image
          src="/assets/footerEllipse1.png"
          alt="Footer Ellipse 1"
          width={468}
          height={449}
          className="opacity-100"
        />
      </div>

      {/* footerEllipse2 - Top right edge (shadow glowing) */}
      <div className="absolute top-0 right-0 z-0">
        <Image
          src="/assets/footerEllipse2.png"
          alt="Footer Ellipse 2"
          width={320}
          height={350}
          className="opacity-100"
        />
      </div>

      {/* Contents - With background image only behind this section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative overflow-hidden rounded-2xl">
        {/* Company Logo & Description */}
        <div className="space-y-4 relative z-10">
          <Image
            src="/assets/ZyvoLogo.png"
            alt="Zyvo Logo"
            width={50}
            height={50}
          />
          <p className="text-sm text-gray-200">
            Just have a business account, credit card, and spend management
            software everything into one hassle free way.
          </p>
        </div>

        {/* Product Links */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Request a demo
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Cover
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Support Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Terms & Condition
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="relative z-10">
          {/* footerBgStars2 - Bottom left of social media icons */}
          <div className="absolute -bottom-6 -left-12 z-0">
            <Image
              src="/assets/footerBgStars2.png"
              alt="Footer Background Stars 2"
              width={100}
              height={60}
              className="opacity-100"
            />
          </div>

          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
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
      <div className="mt-16 border border-blue-500 rounded-2xl py-4 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-sm text-gray-300 gap-4">
        <Image
          src="/assets/Zyvo.png"
          alt="Zyvo bottom logo"
          width={100}
          height={40}
        />
        <p className="text-center">©2025 Jawad. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
