"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex fixed left-1/2 transform -translate-x-1/2 items-center justify-between px-8 py-4 rounded-2xl border border-white/30 backdrop-blur-md mt-8 z-100 w-[900px]">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="mr-2"
          />
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-7 flex-shrink-0">
          <li className="text-white flex items-center gap-2 text-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Feature
          </li>
          <li className="text-white text-sm">Solution</li>
          <li className="text-white text-sm">Resources</li>
          <li className="text-white text-sm">Pricing</li>
          <li className="text-white text-sm">Login</li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="bg-white text-blue-900 rounded-full px-6 py-2.5 font-medium text-sm whitespace-nowrap">
            Start free trial
          </button>
          <button className="border border-white text-white rounded-full px-6 py-2.5 font-medium text-sm whitespace-nowrap">
            Book a demo
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-100 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={28}
              height={28}
              className="sm:w-8 sm:h-8"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-[#00001f] backdrop-blur-md border-t border-white/10">
            <div className="px-4 sm:px-6 py-6 space-y-6">
              {/* Nav Links */}
              <ul className="space-y-4">
                <li className="text-white flex items-center gap-2 text-base">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>{" "}
                  Feature
                </li>
                <li className="text-white text-base">Solution</li>
                <li className="text-white text-base">Resources</li>
                <li className="text-white text-base">Pricing</li>
                <li className="text-white text-base">Login</li>
              </ul>

              {/* Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <button className="w-full bg-white text-blue-900 rounded-full px-6 py-3 font-medium text-sm">
                  Start free trial
                </button>
                <button className="w-full border border-white text-white rounded-full px-6 py-3 font-medium text-sm">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Tablet Navbar (md to lg) */}
      <nav className="hidden md:flex lg:hidden fixed left-1/2 transform -translate-x-1/2 items-center justify-between px-6 py-3 rounded-2xl border border-white/30 backdrop-blur-md mt-6 z-100 w-[95%] max-w-[800px]">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={30}
            height={30}
            className="mr-2"
          />
        </div>

        {/* Condensed Nav Links */}
        <ul className="flex items-center gap-4 flex-shrink-0">
          <li className="text-white flex items-center gap-2 text-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Feature
          </li>
          <li className="text-white text-sm">Solution</li>
          <li className="text-white text-sm">Resources</li>
          <li className="text-white text-sm">Pricing</li>
        </ul>

        {/* Condensed Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="text-white text-sm">Login</button>
          <button className="bg-white text-blue-900 rounded-full px-4 py-2 font-medium text-sm whitespace-nowrap">
            Start trial
          </button>
        </div>
      </nav>
    </>
  );
}
