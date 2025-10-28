"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Website Launch",
    price: "$499",
    features: [
      "Deep market and competitor research",
      "Modern, mobile-first design that converts visitors into clients",
      "Copy and visuals created with AI",
      "SEO, analytics, and integrations ready from day one",
      "Contact forms and automations fully set up",
    ],
  },
  {
    id: 2,
    title: "App Launch",
    price: "$999",
    features: [
      "iOS & Android-ready build",
      "Intuitive UX with smooth onboarding that users love",
      "Auth, database, payments, and notifications included",
      "Polished, minimal UI powered by AI",
      "Real-time preview before release",
    ],
  },
  {
    id: 3,
    title: "MVP Launch",
    price: "$1299",
    features: [
      "Market research and user analysis",
      "Clear value proposition and product positioning",
      "UX/UI design built to test at scale",
      "Live MVP with essential features, ready to show investors or users",
      "Step-by-step launch checklist and guidance",
    ],
    popular: true,
  },
  {
    id: 4,
    title: "Growth Audit",
    price: "$299",
    features: [
      "Full UX and conversion audit with specific fixes",
      "Competitor benchmarks and positioning review",
      "Funnel breakdown",
      "Custom 30-day growth roadmap",
      "One-on-one strategy session with clear next steps",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-white text-neutral-900 saira-font"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4 text-neutral-900"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-500 text-lg mb-16"
        >
          You dream it — I build it, grow it, and make it stand out.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border ${
                service.popular
                  ? "border-red-500 bg-red-50 shadow-red-200"
                  : "border-neutral-200 bg-neutral-50"
              } p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-md`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-3xl font-extrabold mb-6 text-red-500">
                  {service.price}
                </p>

                <ul className="space-y-3 text-left">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-neutral-700 leading-relaxed"
                    >
                      <Check className="w-5 h-5 text-red-500 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-10 inline-block w-full text-center py-3 rounded-full font-semibold border ${
                  service.popular
                    ? "bg-red-500 border-red-500 text-white hover:bg-red-600"
                    : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                } transition-all duration-300`}
              >
                Get Started
              </a>
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
