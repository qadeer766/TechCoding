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
      className="relative py-24 bg-neutral-950 text-white overflow-hidden saira-font flex justify-center items-center"
    >
      {/* 🔴 Floating Animated Background Objects */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 80, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* 💬 Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Let’s <span className="text-red-500">Build</span> Your Next Big Idea
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Send me a quick brief — I’ll respond within 24 hours with a roadmap
          that fits your vision.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded-full px-5 py-3 focus:outline-none focus:border-red-500 transition-all"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded-full px-5 py-3 focus:outline-none focus:border-red-500 transition-all"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows="5"
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded-2xl px-5 py-4 resize-none focus:outline-none focus:border-red-500 transition-all"
          ></textarea>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-3 rounded-full bg-red-500 hover:bg-red-600 font-semibold text-white transition-all"
          >
            {status === "Sending..." ? "Sending..." : "Submit"}
          </motion.button>
        </form>

        {status && <p className="text-gray-400 mt-6">{status}</p>}
      </motion.div>

      <style>{`
        .saira-font {
          font-family: "Saira", sans-serif;
        }
      `}</style>
    </section>
  );
}
