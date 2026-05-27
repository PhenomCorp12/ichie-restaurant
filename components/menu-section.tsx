"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const menuHighlights = [
  {
    name: "Sashimi Selection",
    description: "Fresh, premium-cut fish served with wasabi and pickled ginger",
    image: "https://images.pexels.com/photos/3729811/pexels-photo-3729811.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  },
  {
    name: "Grilled Specialties",
    description: "Charcoal-grilled dishes with authentic Japanese seasonings",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  },
  {
    name: "Chef's Selection",
    description: "Curated tasting experience of our finest dishes",
    image: "https://images.pexels.com/photos/3764647/pexels-photo-3764647.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
  },
];

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Culinary Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our carefully crafted selection of authentic Japanese dishes, prepared with the finest ingredients and traditional techniques.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {menuHighlights.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/menu"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Full Menu
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
