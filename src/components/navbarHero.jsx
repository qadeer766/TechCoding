"use client";
import { motion } from "framer-motion";

export default function NavbarHero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">

      {/* 🔥 Light Rays Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.25),transparent_70%)]" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "conic-gradient(from 90deg, transparent, rgba(255,0,0,0.25), transparent)",
            "conic-gradient(from 180deg, transparent, rgba(255,0,0,0.35), transparent)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔸 Floating Spark Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-red-500 rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [-10, -60, -10], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content Area */}
      <div className="relative z-10 w-[90%] md:w-[80%] mx-auto">

        {/* 🔹 Minimal Frosted Navbar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center py-6"
        >
          <h2 className="text-2xl font-bold tracking-wide saira-font">
            <span className="text-red-500">Tech</span>Coding
          </h2>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            className="text-lg font-medium hover:text-red-500"
          >
            Get Started
          </motion.a>
        </motion.nav>

        {/* Hero Center */}
        <section className="flex flex-col justify-center items-center text-center mt-24 md:mt-32">

          {/* 🔺 Pulse Tagline */}
          <motion.p
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-red-500 font-semibold mb-6 tracking-wider saira-font"
          >
            * Build Brands
          </motion.p>

          {/* 🚀 Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="saira-font text-5xl md:text-7xl font-extrabold leading-snug"
          >
            From idea → MVP → growth
            <br />
            We make it <span className="text-red-600 drop-shadow-[0_0_18px_rgba(255,0,0,0.6)]">happen</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-300 mt-6 text-lg md:text-xl max-w-xl"
          >
            Trusted by founders across 3 continents
          </motion.p>

          {/* 🔺 Animated Accent Underline */}
          <motion.div
            className="mt-6 w-24 h-[3px] bg-red-600 rounded-full"
            animate={{ width: ["80px", "120px", "80px"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(255,0,0,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 mt-10 px-10 py-4 rounded-xl text-lg font-semibold transition-all"
          >
            Get Started
          </motion.a>
        </section>
      </div>
    </div>
  );
}
