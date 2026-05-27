"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import JapaneseCuisineImg from "@/public/japanese-cuisine.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={JapaneseCuisineImg.src}
                alt="Japanese cuisine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-amber-600 font-semibold text-sm uppercase tracking-widest"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6"
            >
              Experience Authentic Japanese Flavors
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Nestled in the heart of Sydney Fish Market, ICHIE brings the essence of Japanese culinary tradition to your table. Our chefs craft each dish with precision and passion, using the freshest ingredients sourced locally and from Japan.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              From delicate sashimi to perfectly grilled dishes, every plate tells a story of dedication to the art of Japanese cuisine. Join us for an unforgettable dining experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-gray-500 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">20+</div>
                <div className="text-gray-500 text-sm mt-1">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-gray-500 text-sm mt-1">Fresh Daily</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
