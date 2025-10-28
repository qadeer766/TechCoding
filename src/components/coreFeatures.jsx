"use client";
import { motion } from "framer-motion";
import {
  Code,
  MonitorSmartphone,
  ShoppingBag,
  Palette,
  Type,
  Wrench,
  Zap,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-10 h-10 text-red-500" />,
    title: "1-Click Launch",
    desc: "Deploy complete websites or apps instantly with pre-built systems and automation.",
  },
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-red-500" />,
    title: "Responsive Design",
    desc: "Every project looks perfect on all screen sizes — from mobile to desktop.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-red-500" />,
    title: "WooCommerce Expert",
    desc: "Advanced store setups, payment integrations, and optimized conversions.",
  },
  {
    icon: <Type className="w-10 h-10 text-red-500" />,
    title: "Custom UI & UX",
    desc: "Pixel-perfect design built with user-focused flow for better engagement.",
  },
  {
    icon: <Palette className="w-10 h-10 text-red-500" />,
    title: "Brand-Ready Styling",
    desc: "Color palettes and design language that fit your brand identity perfectly.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-red-500" />,
    title: "Performance Driven",
    desc: "Optimized architecture ensuring fast load times and smooth interactions.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-red-500" />,
    title: "Easy Maintenance",
    desc: "Code written cleanly so updates, fixes, and scaling are effortless.",
  },
  {
    icon: <Code className="w-10 h-10 text-red-500" />,
    title: "Full-Stack Expertise",
    desc: "From front-end to databases, complete control over every tech layer.",
  },
];

export default function CoreFeatures() {
  return (
    <section className="pt-16 pb-20 bg-white text-neutral-900 saira-font">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="text-red-500 uppercase tracking-wider text-sm font-medium">
            CORE FEATURES
          </span>
          <span className="text-red-500 text-xl">✱</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 leading-tight"
        >
          Constantly Update With <br />
          New <span className="text-red-500">Features</span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-red-500 group-hover:bg-red-500 transition-all duration-300 mb-5">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .saira-font {
          font-family: "Saira", sans-serif;
        }
      `}</style>
    </section>
  );
}
