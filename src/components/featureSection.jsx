"use client";
import { motion } from "framer-motion";
import {
  Layout,
  Zap,
  Infinity,
  Figma,
  Palette,
  HelpCircle,
} from "lucide-react";

const features = [
  {
    id: "1",
    title: "Header & Footer Builder",
    icon: <Layout className="w-14 h-14" />,
    image: "/image.png",
    size: "medium",
    iconColor: "text-blue-500",
  },
  {
    id: "2",
    title: "Lightning Fast Loading Speed",
    icon: <Zap className="w-18 h-18" />,
    size: "large",
    iconColor: "text-orange-500",
  },
  {
    id: "3",
    title: "Buy Theme Once, Use Forever",
    icon: <Infinity className="w-14 h-14" />,
    size: "small",
    iconColor: "text-orange-500",
  },
  {
    id: "4",
    title: "Figma File Included",
    icon: <Figma className="w-14 h-14" />,
    size: "small",
    iconColor: "text-pink-500",
  },
  {
    id: "5",
    title: "Customize Everything in One Place",
    icon: <Palette className="w-14 h-14" />,
    image: "/image.png",
    size: "medium",
    iconColor: "text-green-500",
  },
  {
    id: "6",
    title: "FAQ & Video Tutorials",
    icon: <HelpCircle className="w-14 h-14" />,
    size: "medium",
    iconColor: "text-orange-500",
  },
];

const slidingTexts = [
  "Digital Growth",
  "Smart Growth",
  "Bold Ideas",
  "Trusted Guidance",
  "Personal Edge",
];

export default function FeaturesSection() {
  return (
    <div className="relative bg-black overflow-hidden saira-font">
      {/* Subtle orange mesh background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="mesh-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 20 L 20 0 M 20 40 L 40 20 M 0 20 L 20 40 M 20 0 L 40 20"
              stroke="rgba(255, 165, 0, 0.6)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="20" cy="0" r="2.5" fill="rgba(255, 165, 0, 0.8)" />
            <circle cx="0" cy="20" r="2.5" fill="rgba(255, 165, 0, 0.8)" />
            <circle cx="20" cy="40" r="2.5" fill="rgba(255, 165, 0, 0.8)" />
            <circle cx="40" cy="20" r="2.5" fill="rgba(255, 165, 0, 0.8)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
      </svg>

      {/* Header */}
      <div className="relative py-20 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-2"
        >
          Features That <span className="text-red-500">Empower</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg mt-2"
        >
          Powerful tools to build, launch, and grow — all in one place
        </motion.p>
      </div>

      {/* Feature Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-6 gap-6 pb-20">
        {/* Each card styled based on its index for asymmetric layout */}
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${
              index === 1
                ? "md:col-span-3 md:row-span-2 min-h-[380px]"
                : index === 3
                ? "md:col-span-2 min-h-[240px]"
                : "md:col-span-2 min-h-[280px]"
            } bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 text-center flex flex-col items-center justify-center shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2`}
          >
            <div className={`${feature.iconColor} mb-6`}>{feature.icon}</div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
              {feature.title}
            </h3>
            {feature.image && (
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-xl w-full h-36 object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Scrolling Text Bar */}
      <div className="relative overflow-hidden bg-red-500 py-6">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {slidingTexts.map((text, index) => (
                <div key={`${i}-${index}`} className="flex items-center">
                  <span className="text-white text-2xl md:text-4xl font-bold px-8">
                    {text}
                  </span>
                  <span className="text-white text-3xl md:text-5xl">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .saira-font {
          font-family: "Saira", sans-serif;
        }
      `}</style>
    </div>
  );
}
