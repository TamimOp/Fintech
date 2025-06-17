"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 rounded-full border border-white/30 backdrop-blur-md w-fit mx-auto mt-8">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="mr-2"
        />
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 ml-12">
        <li className="text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Feature
        </li>
        <li className="text-white">Solution</li>
        <li className="text-white">Resources</li>
        <li className="text-white">Pricing</li>
        <li className="text-white">Login</li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-4 ml-12">
        <button className="bg-white text-blue-900 rounded-full px-6 py-2 font-medium">
          Start free trial
        </button>
        <button className="border border-white text-white rounded-full px-6 py-2 font-medium">
          Book a demo
        </button>
      </div>
    </nav>
  );
}
