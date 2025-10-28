"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsDemo() {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: "1",
      number: "01",
      title: "TechAI Home -1",
      image: "/image.png",
      demoUrl: "https://next-js-blog-project-six.vercel.app",
    },
    {
      id: "2",
      number: "02",
      title: "TechAI Home -2",
      image: "/image.png",
      demoUrl: "https://next-js-blog-project-six.vercel.app",
    },
    {
      id: "3",
      number: "03",
      title: "TechAI Home -3",
      image: "/image.png",
      demoUrl: "https://next-js-blog-project-six.vercel.app",
    },
    {
      id: "4",
      number: "04",
      title: "TechAI Home -4",
      image: "/image.png",
      demoUrl: "https://next-js-blog-project-six.vercel.app",
    },
    {
      id: "5",
      number: "05",
      title: "TechAI Home -5",
      image: "/image.png",
      demoUrl: "https://next-js-blog-project-six.vercel.app",
    },
    {
      id: "6",
      number: "06",
      title: "TechAI Home -6",
      image: "/image.png",
      demoUrl: "https://next-js-blog-project-six.vercel.app",
    },
  ];

  const handleViewDemo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 bg-white text-neutral-900 saira-font">
      {/* Header */}
      <div className="bg-black text-white py-10 text-center">
        {" "}
        <h1 className="saira-font text-3xl md:text-4xl font-light tracking-wide">
          {" "}
          Pre-built Website & Mobile
          <span className="text-red-500">Responsive</span>{" "}
        </h1>{" "}
      </div>

      {/* Projects Grid (Centered Layout) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Large Number BG */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <span
                className={`text-[160px] font-extrabold transition-colors duration-500 ${
                  hoveredId === project.id ? "text-red-500" : "text-neutral-400"
                }`}
              >
                {project.number}
              </span>
            </div>

            <div className="relative p-8 z-10 flex flex-col">
              <div className="h-48 w-full overflow-hidden rounded-xl mb-6 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-40" : "opacity-0"
                  }`}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mb-4">
                {project.title}
              </h3>

              {/* Button */}
              <button
                onClick={() => handleViewDemo(project.demoUrl)}
                className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/30 mx-auto"
              >
                View Demo
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
