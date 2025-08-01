"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";

interface NavLink {
  label: string;
  href?: string;
  scrollTo?: string;
  hasIndicator?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Feature", scrollTo: "features", hasIndicator: true },
  { label: "Solution", scrollTo: "solution" },
  { label: "Resources", scrollTo: "resources" },
  { label: "Pricing", scrollTo: "pricing" },
  { label: "Login", href: "/login" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("features");
  const router = useRouter();

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["features", "solution", "resources", "pricing"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation
  const handleNavigation = (link: NavLink) => {
    if (link.href) {
      router.push(link.href);
    } else if (link.scrollTo) {
      const element = document.getElementById(link.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  // Handle logo click
  const handleLogoClick = () => {
    router.push("/");
  };

  // Handle button clicks
  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleDemoClick = () => {
    router.push("/bookingDemo");
  };

  // Animation variants
  const navbarVariants: Variants = {
    hidden: {
      y: -100,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const buttonVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants: Variants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const logoVariants: Variants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const indicatorVariants: Variants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`hidden lg:flex fixed left-1/2 transform -translate-x-1/2 items-center justify-between px-8 py-4 rounded-2xl border backdrop-blur-md mt-8 z-50 w-[900px] transition-all duration-300 ${
          scrolled
            ? "border-white/50 bg-black/30 shadow-2xl"
            : "border-white/30 bg-black/20"
        }`}
        whileHover={{
          boxShadow: "0 10px 30px rgba(0, 255, 255, 0.1)",
          borderColor: "rgba(0, 255, 255, 0.3)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center flex-shrink-0 cursor-pointer"
          variants={itemVariants}
          onClick={handleLogoClick}
        >
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
          >
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Nav Links */}
        <motion.ul
          className="flex items-center gap-7 flex-shrink-0"
          variants={itemVariants}
        >
          {NAV_LINKS.map((link, index) => (
            <motion.li
              key={index}
              className="text-white flex items-center gap-2 text-sm cursor-pointer"
              whileHover={{
                scale: 1.1,
                color: "#00FFFF",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(link)}
            >
              {link.scrollTo && activeSection === link.scrollTo && (
                <motion.span
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  variants={indicatorVariants}
                  initial="initial"
                  animate="animate"
                />
              )}
              <motion.span
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.label}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-4 flex-shrink-0"
          variants={itemVariants}
        >
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={handleRegisterClick}
            className="bg-white text-blue-900 rounded-full px-6 py-2.5 font-medium text-sm whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Start free trial
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={handleDemoClick}
            className="border border-white text-white rounded-full px-6 py-2.5 font-medium text-sm whitespace-nowrap hover:bg-white/10 transition-colors duration-300"
          >
            Book a demo
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile/Tablet Navbar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled || isMenuOpen
            ? "bg-black/40 border-white/20"
            : "bg-black/20 border-white/10"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            variants={itemVariants}
            onClick={handleLogoClick}
          >
            <motion.div
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
            >
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={isMenuOpen ? "open" : "closed"}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                variants={{
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="bg-[#00001f]/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 sm:px-6 py-6 space-y-6">
                {/* Nav Links */}
                <motion.ul className="space-y-4">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={index}
                      className="text-white flex items-center gap-2 text-base cursor-pointer"
                      variants={mobileItemVariants}
                      whileHover={{
                        x: 10,
                        color: "#00FFFF",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation(link)}
                    >
                      {link.scrollTo && activeSection === link.scrollTo && (
                        <motion.span
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                          variants={indicatorVariants}
                          initial="initial"
                          animate="animate"
                        />
                      )}
                      {link.label}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Buttons */}
                <motion.div
                  className="space-y-3 pt-4 border-t border-white/10"
                  variants={mobileItemVariants}
                >
                  <motion.button
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleRegisterClick}
                    className="w-full bg-white text-blue-900 rounded-full px-6 py-3 font-medium text-sm shadow-lg"
                  >
                    Start free trial
                  </motion.button>
                  <motion.button
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleDemoClick}
                    className="w-full border border-white text-white rounded-full px-6 py-3 font-medium text-sm hover:bg-white/10 transition-colors duration-300"
                  >
                    Book a demo
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Tablet Navbar (md to lg) */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`hidden md:flex lg:hidden fixed left-1/2 transform -translate-x-1/2 items-center justify-between px-6 py-3 rounded-2xl border backdrop-blur-md mt-6 z-50 w-[95%] max-w-[800px] transition-all duration-300 ${
          scrolled
            ? "border-white/50 bg-black/30 shadow-2xl"
            : "border-white/30 bg-black/20"
        }`}
        whileHover={{
          boxShadow: "0 8px 25px rgba(0, 255, 255, 0.1)",
          borderColor: "rgba(0, 255, 255, 0.3)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center flex-shrink-0 cursor-pointer"
          variants={itemVariants}
          onClick={handleLogoClick}
        >
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
          >
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="mr-2"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Condensed Nav Links */}
        <motion.ul
          className="flex items-center gap-4 flex-shrink-0"
          variants={itemVariants}
        >
          {NAV_LINKS.slice(0, 4).map((link, index) => (
            <motion.li
              key={index}
              className="text-white flex items-center gap-2 text-sm cursor-pointer"
              whileHover={{
                scale: 1.1,
                color: "#00FFFF",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(link)}
            >
              {link.scrollTo && activeSection === link.scrollTo && (
                <motion.span
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  variants={indicatorVariants}
                  initial="initial"
                  animate="animate"
                />
              )}
              <motion.span
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.label}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Condensed Buttons */}
        <motion.div
          className="flex items-center gap-3 flex-shrink-0"
          variants={itemVariants}
        >
          <motion.button
            className="text-white text-sm cursor-pointer"
            whileHover={{
              scale: 1.1,
              color: "#00FFFF",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation({ label: "Login", href: "/login" })}
          >
            Login
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={handleRegisterClick}
            className="bg-white text-blue-900 rounded-full px-4 py-2 font-medium text-sm whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Start trial
          </motion.button>
        </motion.div>
      </motion.nav>
    </>
  );
}
