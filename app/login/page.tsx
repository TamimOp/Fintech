"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function LoginSection() {
  return (
    <section className="relative overflow-hidden bg-[#01194C] text-white pt-40 pb-20 px-6 md:px-20 min-h-screen flex items-center">
      {/* Texture BG - Full Section */}
      <Image
        src="/assets/loginTexture.png"
        alt="Texture BG"
        fill
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Light BG - Full Section */}
      <Image
        src="/assets/light2.png"
        alt="Light BG"
        fill
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
        {/* Left: Logo + Text + List */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={56}
            height={87}
            className="mb-4"
          />

          <h1 className="text-5xl font-bold">SCALE YOUR FINANCES</h1>

          <ul className="space-y-3 text-lg text-white/80">
            <li>• Discover hidden potential in your treasury data</li>
            <li>• Automate cross-border payments and compliance</li>
            <li>• Connect wallets, partners, and finance tools</li>
            <li>• Convert insights into scalable strategies</li>
            <li>• Convert insights into scalable strategies</li>
          </ul>

          <p className="text-white/70 text-lg mt-4">
            Fast, secure, and built for modern teams.
          </p>

          <p className="italic text-white/70 text-lg">
            &quot;The smartest money management tool we&apos;ve used.&quot; —
            Jordan Vega
          </p>
        </motion.div>

        {/* Right: Form Card */}
        <motion.div
          className="flex w-full max-w-[602px] px-11 py-15 flex-col justify-center items-center gap-[42px] self-stretch rounded-[15px] shadow-[0px_0px_10.4px_5px_rgba(0,11,86,0.45)]"
          style={{
            background:
              "linear-gradient(140deg, rgba(2, 32, 76, 0.88) 2.52%, rgba(2, 30, 71, 0.88) 43.27%, rgba(0, 2, 6, 0.88) 98.24%)",
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[32px] font-semibold mb-6">
            Ready to experience Zyvo in action?
          </h2>
          <form className="space-y-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm">First Name</label>
                <input
                  type="text"
                  className="h-9 self-stretch rounded-md bg-[rgba(30,105,244,0.25)] border-none px-3 text-white focus:outline-none placeholder-white/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm">Last Name</label>
                <input
                  type="text"
                  className="h-9 self-stretch rounded-md bg-[rgba(30,105,244,0.25)] border-none px-3 text-white focus:outline-none placeholder-white/60"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm">Email*</label>
                <input
                  type="email"
                  className="h-9 self-stretch rounded-md bg-[rgba(30,105,244,0.25)] border-none px-3 text-white focus:outline-none placeholder-white/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm">Company type*</label>
                <div className="relative">
                  <select className="h-9 self-stretch rounded-md bg-[rgba(30,105,244,0.25)] border-none px-3 pr-10 text-white text-xs appearance-none w-full focus:outline-none">
                    <option
                      value=""
                      className="bg-[#1E69F4] text-xs"
                      style={{ color: "#E4E4E496" }}
                    >
                      Select company type
                    </option>
                    <option value="startup" className="bg-[#1E69F4] text-white">
                      Startup
                    </option>
                    <option
                      value="enterprise"
                      className="bg-[#1E69F4] text-white"
                    >
                      Enterprise
                    </option>
                    <option
                      value="freelancer"
                      className="bg-[#1E69F4] text-white"
                    >
                      Freelancer
                    </option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-6 h-6 flex-shrink-0 text-[#57F7FD]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">Country*</label>
              <div className="relative">
                <select className="h-9 self-stretch rounded-md bg-[rgba(30,105,244,0.25)] border-none px-3 pr-10 text-white text-xs appearance-none w-full focus:outline-none">
                  <option
                    value=""
                    className="bg-[#1E69F4] text-xs"
                    style={{ color: "#E4E4E496" }}
                  >
                    Select country
                  </option>
                  <option value="usa" className="bg-[#1E69F4] text-white">
                    USA
                  </option>
                  <option value="uk" className="bg-[#1E69F4] text-white">
                    UK
                  </option>
                  <option
                    value="bangladesh"
                    className="bg-[#1E69F4] text-white"
                  >
                    Bangladesh
                  </option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-6 h-6 flex-shrink-0 text-[#57F7FD]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm">
                How did you hear about us?
              </label>
              <textarea
                className="self-stretch rounded-md bg-[rgba(30,105,244,0.25)] border-none p-3 text-white min-h-[80px] focus:outline-none placeholder-white/60"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="flex w-full h-[46px] px-4 py-2 flex-col justify-center items-center gap-2.5 rounded-lg border border-white bg-white shadow-[0px_4px_26.8px_0px_rgba(159,85,255,0.48)] text-blue-900 font-bold hover:scale-105 transition mt-10"
            >
              Start Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
