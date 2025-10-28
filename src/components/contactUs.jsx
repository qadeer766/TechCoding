"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send. Please try again ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 min-h-screen text-white overflow-hidden flex justify-center items-center"
    >
      {/* 🌈 Elegant Gradient Background */}
      <div className="absolute inset-0">
        {/* Layered Vercel-style gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,0,0,0.25),transparent_70%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_70%),radial-gradient(circle_at_center,rgba(255,0,0,0.15),transparent_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff1a1a]/15 via-[#330000]/20 to-black opacity-95" />
        {/* Faint grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* 💬 Floating Glows */}
      <motion.div
        className="absolute top-20 left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-40 w-[26rem] h-[26rem] bg-red-800/15 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 60, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 💎 Glass Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl px-8 py-10 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(255,0,0,0.15)] text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight saira-font">
          Let’s <span className="text-red-500">Build</span> Your Next Big Idea
        </h2>
        <p className="text-gray-400 mb-10 text-lg saira-font max-w-lg mx-auto">
          Send me a quick brief — I’ll respond within 24 hours with a roadmap
          that fits your vision.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-black/40 border border-white/10 rounded-full px-5 py-3 text-gray-200 focus:outline-none focus:border-red-500 transition-all backdrop-blur-sm"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-black/40 border border-white/10 rounded-full px-5 py-3 text-gray-200 focus:outline-none focus:border-red-500 transition-all backdrop-blur-sm"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="5"
              required
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 resize-none text-gray-200 focus:outline-none focus:border-red-500 transition-all backdrop-blur-sm"
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(255,0,0,0.4)",
            }}
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 font-semibold text-white transition-all mt-4"
          >
            {status === "Sending..." ? "Sending..." : "Submit"}
          </motion.button>
        </form>

        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 mt-6 saira-font"
          >
            {status}
          </motion.p>
        )}
      </motion.div>

      <style>{`
        .saira-font {
          font-family: "Saira", sans-serif;
        }
      `}</style>
    </section>
  );
}
