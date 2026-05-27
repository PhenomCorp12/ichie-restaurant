"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar } from "lucide-react";

export default function HoursSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hours" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600/20 mb-6">
            <Clock className="w-8 h-8 text-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Opening Hours
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join us for lunch or dinner. We recommend making a reservation to secure your table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Weekdays */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-semibold">Monday - Friday</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Lunch</span>
                <div className="text-right">
                  <div className="font-semibold text-lg">11:30 - 15:00</div>
                  <div className="text-sm text-amber-500">Last Order 14:30</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Dinner</span>
                <div className="text-right">
                  <div className="font-semibold text-lg">17:30 - 21:00</div>
                  <div className="text-sm text-gray-500">Last Order 20:30</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Weekends */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-600/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-amber-500" />
              <div>
                <h3 className="text-xl font-semibold">Saturday - Sunday</h3>
                <span className="text-xs text-amber-500 bg-amber-600/20 px-2 py-0.5 rounded-full">Weekend</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Lunch</span>
                <div className="text-right">
                  <div className="font-semibold text-lg">11:30 - 16:00</div>
                  <div className="text-sm text-amber-500">Last Order 15:30</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Dinner</span>
                <div className="text-right">
                  <div className="font-semibold text-lg">17:00 - 21:00</div>
                  <div className="text-sm text-gray-500">Last Order 20:30</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          * Hours may vary on public holidays. Please contact us for confirmation.
        </motion.p>
      </div>
    </section>
  );
}
