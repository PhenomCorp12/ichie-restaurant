"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-6 h-6 text-amber-500" />
              <span className="text-2xl font-bold tracking-tight">ICHIE</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mb-6"
          >
            Authentic Japanese Cuisine in Sydney Fish Market
          </motion.p>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1 text-gray-500 text-sm"
          >
            <span>&copy; {new Date().getFullYear()} ICHIE. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>in Sydney</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
