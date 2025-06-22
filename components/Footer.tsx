"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Types
interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface FooterLink {
  label: string;
  href: string;
}

// Constants
const PRODUCT_LINKS: FooterLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Request a demo", href: "/demo" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "Cover", href: "/cover" },
  { label: "Support Center", href: "/support" },
  { label: "Privacy & Policy", href: "/privacy" },
  { label: "Terms & Condition", href: "/terms" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const Footer: React.FC = () => {
  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const glowVariants: Variants = {
    initial: { scale: 1, opacity: 0.6 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 0.9, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const starGlowVariants: Variants = {
    initial: {
      opacity: 0.6,
      filter: "drop-shadow(0 0 3px #FFFFFF) drop-shadow(0 0 6px #00AAFF)",
      scale: 1,
    },
    animate: {
      opacity: [0.6, 1, 0.6],
      filter: [
        "drop-shadow(0 0 3px #FFFFFF) drop-shadow(0 0 6px #00AAFF)",
        "drop-shadow(0 0 8px #FFFFFF) drop-shadow(0 0 15px #00AAFF) drop-shadow(0 0 25px #0095FF)",
        "drop-shadow(0 0 3px #FFFFFF) drop-shadow(0 0 6px #00AAFF)",
      ],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const smallStarGlowVariants: Variants = {
    initial: {
      opacity: 0.7,
      filter: "drop-shadow(0 0 2px #FFFFFF) drop-shadow(0 0 4px #00AAFF)",
      scale: 1,
    },
    animate: {
      opacity: [0.7, 1, 0.7],
      filter: [
        "drop-shadow(0 0 2px #FFFFFF) drop-shadow(0 0 4px #00AAFF)",
        "drop-shadow(0 0 6px #FFFFFF) drop-shadow(0 0 12px #00AAFF) drop-shadow(0 0 20px #0095FF)",
        "drop-shadow(0 0 2px #FFFFFF) drop-shadow(0 0 4px #00AAFF)",
      ],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const subtractGlowVariants: Variants = {
    initial: {
      opacity: 0.7,
      filter: "drop-shadow(0 0 5px #00FFFF)",
    },
    animate: {
      opacity: [0.7, 1, 0.7],
      filter: [
        "drop-shadow(0 0 5px #00FFFF)",
        "drop-shadow(0 0 15px #00FFFF) drop-shadow(0 0 25px #0095FF)",
        "drop-shadow(0 0 5px #00FFFF)",
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Render helper components
  const renderFooterLinks = (links: FooterLink[], title: string) => (
    <motion.div
      className="relative z-10 text-center lg:text-left"
      variants={itemVariants}
    >
      <motion.h3
        className="text-lg sm:text-xl lg:text-[26px] font-semibold mb-3 sm:mb-4 lg:mb-4 text-white"
        variants={itemVariants}
      >
        {title}
      </motion.h3>
      <motion.ul
        className="space-y-1 sm:space-y-2 lg:space-y-2 text-sm sm:text-base lg:text-xl text-[#DBDBDB]"
        variants={containerVariants}
      >
        {links.map((link, index) => (
          <motion.li
            key={`${title.toLowerCase()}-${index}`}
            className="whitespace-nowrap"
            variants={itemVariants}
          >
            <Link
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.label}
              </motion.span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );

  const renderSocialLinks = () => (
    <motion.div
      className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 lg:space-x-4 text-blue-400 text-lg sm:text-xl lg:text-xl"
      variants={containerVariants}
    >
      {SOCIAL_LINKS.map((social, index) => (
        <motion.a
          key={`social-${index}`}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="hover:text-blue-300 transition-colors duration-300 p-1 rounded-md hover:bg-blue-400/10"
          variants={itemVariants}
          whileHover={{
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <social.icon
            size={20}
            className="sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"
          />
        </motion.a>
      ))}
    </motion.div>
  );

  return (
    <motion.footer
      className="relative bg-gradient-to-b from-[#00174f] to-[#000b3f] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-6 xl:px-25 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Stars */}
      <motion.div
        className="absolute left-[10%] sm:left-[15%] lg:left-[220px] top-4 sm:top-6 lg:top-8 w-[80%] sm:w-[70%] lg:w-[999px] h-[200px] sm:h-[280px] lg:h-[364px] z-0"
        variants={starGlowVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        <Image
          src="/assets/footerBgStars.png"
          alt="Decorative background stars"
          width={999}
          height={364}
          className="object-contain w-full h-full"
          priority={false}
        />
      </motion.div>

      {/* Glowing Ellipse - Left */}
      <motion.div
        className="absolute top-1/2 -left-[50px] sm:-left-[80px] lg:-left-[187px] lg:-bottom-[14px] transform -translate-y-1/2 z-0 w-[250px] sm:w-[350px] lg:w-[468px] h-[250px] sm:h-[350px] lg:h-[468px] rounded-full"
        style={{
          background: "rgba(0, 149, 255, 0.58)",
          filter: "blur(169.3000030517578px)",
        }}
        variants={glowVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      />

      {/* Glowing Ellipse - Right */}
      <motion.div
        className="absolute -top-[50px] sm:-top-[80px] lg:-top-[147px] -right-[50px] sm:-right-[30px] lg:right-[35px] z-0 w-[180px] sm:w-[250px] lg:w-[322px] h-[180px] sm:h-[250px] lg:h-[322px] rounded-full"
        style={{
          background: "rgba(0, 149, 255, 0.58)",
          filter: "blur(169.3000030517578px)",
        }}
        variants={glowVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      />

      {/* Decorative Subtract SVG */}
      <motion.div
        className="absolute left-[50%] sm:left-[60%] lg:left-[263px] top-[23%] sm:top-[15%] lg:top-auto z-5 w-[25px] sm:w-[35px] lg:w-[40.657px] h-[25px] sm:h-[35px] lg:h-[40.631px] transform -translate-x-1/2 lg:transform-none"
        variants={subtractGlowVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        <Image
          src="/assets/Subtract.svg"
          alt="Decorative element"
          width={40.657}
          height={40.631}
          className="w-full h-full"
          style={{ fill: "#2FF" }}
        />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto relative overflow-hidden rounded-2xl flex flex-col items-center gap-12 sm:gap-16 lg:gap-24 self-stretch z-10"
        variants={containerVariants}
      >
        {/* Main Content */}
        <motion.div
          className="flex flex-col sm:flex-col lg:flex-row justify-center items-center lg:items-start gap-8 sm:gap-12 lg:gap-[139px] self-stretch w-full"
          variants={itemVariants}
        >
          {/* Company Logo & Description */}
          <motion.div
            className="space-y-3 sm:space-y-4 lg:space-y-4 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/ZyvoLogo.png"
                alt="Zyvo Logo"
                width={40}
                height={40}
                className="sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[65px]"
                priority
              />
            </motion.div>
            <motion.p
              className="text-sm sm:text-base lg:text-xl text-[#DBDBDB] max-w-[280px] sm:max-w-[400px] lg:max-w-none leading-relaxed"
              variants={itemVariants}
            >
              Just have a business account, credit card, and spend management
              software everything into one hassle free way.
            </motion.p>
          </motion.div>

          {/* Links Container */}
          <motion.div
            className="flex flex-col sm:flex-row lg:contents gap-8 sm:gap-12 lg:gap-[139px] w-full justify-center lg:justify-start"
            variants={containerVariants}
          >
            {/* Product Links */}
            {renderFooterLinks(PRODUCT_LINKS, "Product")}

            {/* Company Links */}
            {renderFooterLinks(COMPANY_LINKS, "Company")}

            {/* Social Media Section */}
            <motion.div
              className="relative z-10 text-center lg:text-left"
              variants={itemVariants}
            >
              {/* Small Decorative Stars */}
              <motion.div
                className="absolute top-[60px] sm:top-[80px] lg:top-[100px] -left-6 sm:-left-8 lg:-left-12 z-0"
                variants={smallStarGlowVariants}
                initial="initial"
                animate="animate"
                aria-hidden="true"
              >
                <Image
                  src="/assets/footerBgStars2.png"
                  alt="Decorative stars"
                  width={35}
                  height={40}
                  className="sm:w-[40px] sm:h-[45px] lg:w-[50px] lg:h-[56px]"
                />
              </motion.div>

              <motion.h3
                className="text-lg sm:text-xl lg:text-[26px] text-white font-semibold mb-3 sm:mb-4 lg:mb-4"
                variants={itemVariants}
              >
                Social Media
              </motion.h3>
              {renderSocialLinks()}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border border-blue-500/50 rounded-xl sm:rounded-2xl lg:rounded-2xl py-3 sm:py-4 lg:py-4 px-4 sm:px-6 lg:px-6 flex flex-col md:flex-row items-center justify-between w-full text-xs sm:text-sm lg:text-sm text-gray-300 gap-3 sm:gap-4 lg:gap-4 backdrop-blur-sm bg-white/5"
          variants={itemVariants}
          whileHover={{
            borderColor: "rgba(0, 255, 255, 0.8)",
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/assets/Zyvo.png"
              alt="Zyvo"
              width={80}
              height={32}
              className="sm:w-[90px] sm:h-[36px] lg:w-[100px] lg:h-[40px]"
            />
          </motion.div>
          <motion.p className="text-center" variants={itemVariants}>
            © 2025 Jawad. All Rights Reserved
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
