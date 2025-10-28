"use client";
import { Check } from "lucide-react";

export default function ServicesHighlight() {
  const features = [
    "Clean Coding Required",
    "Easy to Customize",
    "Free Lifetime Update",
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="w-[80%] mx-auto text-center">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-red-500 uppercase tracking-wider text-sm font-semibold">
            CORE SERVICES
          </span>
          <span className="text-red-500 text-xl">✱</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 leading-tight saira-font">
          Creative And Unique
          <br />
          <span className="text-red-500">Homepages</span>
        </h2>

        {/* Features */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform group-hover:scale-110">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-lg md:text-xl font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
