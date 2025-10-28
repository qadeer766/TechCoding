"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Reddit,
  Discord,
} from "lucide-react";

export default function Footer() {
  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/qadeer766",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      link: "www.linkedin.com/in/abdulqadeer766",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      link: "https://x.com/TechCoding0",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      link: "https://www.facebook.com/profile.php?id=100076520509978",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      link: "https://www.instagram.com/the.abdulqadeer",
    },
  ];

  return (
    <footer className="relative bg-neutral-950 text-white py-14 overflow-hidden saira-font">
      {/* 🔴 Animated Background Glow */}
      <motion.div
        className="absolute -top-20 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-7">
        {/* Logo */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-wide"
        >
          <span className="text-red-500">Tech</span>Coding
        </motion.h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-red-500 hover:border-red-500 transition-all duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-800" />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-400"
        >
          © 2025 TechCoding — All rights reserved.
        </motion.p>
      </div>

      <style>{`
        .saira-font {
          font-family: "Saira", sans-serif;
        }
      `}</style>
    </footer>
  );
}
