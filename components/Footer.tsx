import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#082e64] backdrop-blur-md text-white py-12 px-6 md:px-16 overflow-hidden">
      {/* Star decorations */}
      <Image
        src="/assets/star.png"
        alt="Star"
        width={20}
        height={20}
        className="absolute top-10 left-10 animate-pulse"
      />
      <Image
        src="/assets/star.png"
        alt="Star"
        width={20}
        height={20}
        className="absolute top-20 right-32 animate-ping"
      />
      <Image
        src="/assets/star.png"
        alt="Star"
        width={20}
        height={20}
        className="absolute bottom-16 right-1/3 animate-spin"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Company Logo & Description */}
        <div className="space-y-4">
          <Image
            src="/assets/logo.png"
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
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Request a demo</Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#">Cover</Link>
            </li>
            <li>
              <Link href="#">Support Center</Link>
            </li>
            <li>
              <Link href="#">Privacy & Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Condition</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <div className="flex space-x-4 text-blue-400 text-xl">
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-x-twitter" />
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
