"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InfoThree() {
  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-16">
      {/* Animated Sparkle */}
      <motion.div
        initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 360, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-0 right-0 md:top-60 md:right-10 z-10"
      >
        <Image
          src="/assets/InfoOneSparkle.svg"
          alt="Sparkle"
          width={120}
          height={120}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* Top text row */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16 mb-16">
        {/* Animated Heading */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              EMPOWERING
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              BUSINESSES THROUGH
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              FINANCIAL INNOVATION
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Animated Paragraph + link */}
        <motion.div
          className="flex-1 max-w-xl lg:max-w-lg"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white/90 text-xl leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Integrity and innovation are at the heart of everything we do.
            We&apos;re committed to providing businesses with a secure,
            user-friendly platform that transforms the way payments are made and
            received.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="text-cyan-400 font-semibold text-lg inline-flex items-center gap-2 hover:text-cyan-300 transition-colors group"
            >
              Explore More
              <motion.span
                className="group-hover:translate-x-1 transition-transform"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gallery: LEFT big + RIGHT column */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[436px_1fr] gap-6">
        {/* LEFT: Animated big image */}
        <motion.div
          className="h-[605px] group"
          initial={{ opacity: 0, scale: 0.95, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-full overflow-hidden rounded-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
            <Image
              src="/assets/galleryImage1.jpg"
              alt="Gallery Image 1"
              width={436}
              height={605}
              className="rounded-xl object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* RIGHT: top row + bottom text block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* TOP ROW: Animated two images side by side */}
          <div className="grid grid-cols-2 gap-6 h-[340px] mb-8">
            <motion.div
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, rotate: 1 }}
            >
              <Image
                src="/assets/galleryImage2.jpg"
                alt="Gallery Image 2"
                width={200}
                height={340}
                className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, rotate: -1 }}
            >
              <Image
                src="/assets/galleryImage3.jpg"
                alt="Gallery Image 3"
                width={200}
                height={340}
                className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          {/* BOTTOM: Animated text block with bg & glass */}
          <motion.div
            className="relative rounded-xl overflow-hidden h-[230px] bg-[#003A8E91] backdrop-blur-3xl group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated Background image */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/assets/galleryTextlayer.png"
                alt="Text Layer BG"
                width={400}
                height={230}
                className="rounded-xl object-cover w-full h-full opacity-35"
              />
            </motion.div>

            {/* Animated Glass content */}
            <motion.div
              className="absolute inset-x-4 sm:inset-x-8 md:inset-x-12 lg:inset-x-20 inset-y-4 sm:inset-y-6 md:inset-y-8 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 text-center text-white flex items-center justify-center group-hover:bg-white/15 group-hover:border-cyan-400/30 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                viewport={{ once: true }}
              >
                Integrity and innovation are at the heart of everything we do.
                We&apos;re committed to providing businesses with a secure,
                user-friendly platform that transforms the way payments are made
                and received.
              </motion.p>
            </motion.div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
