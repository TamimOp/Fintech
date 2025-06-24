"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoginSection() {
  return (
    <section className="relative overflow-hidden bg-[#01194C] text-white py-20 px-6 md:px-20 min-h-screen flex items-center">
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
          className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 md:p-12 w-full max-w-lg border border-white/20 shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            Ready to experience Zyvo in action?
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-lg bg-white/10 px-4 py-3 border border-white/20 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-lg bg-white/10 px-4 py-3 border border-white/20 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full rounded-lg bg-white/10 px-4 py-3 border border-white/20 focus:outline-none"
              />
              <select className="w-full rounded-lg bg-white/10 px-4 py-3 border border-white/20 focus:outline-none">
                <option>Company type*</option>
                <option>Startup</option>
                <option>Enterprise</option>
                <option>Freelancer</option>
              </select>
            </div>
            <select className="w-full rounded-lg bg-white/10 px-4 py-3 border border-white/20 focus:outline-none">
              <option>Country*</option>
              <option>USA</option>
              <option>UK</option>
              <option>Bangladesh</option>
            </select>
            <textarea
              placeholder="How did you hear about us?"
              className="w-full rounded-lg bg-white/10 px-4 py-3 border border-white/20 focus:outline-none"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-white text-blue-900 font-bold rounded-full py-4 hover:scale-105 transition"
            >
              Start Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
