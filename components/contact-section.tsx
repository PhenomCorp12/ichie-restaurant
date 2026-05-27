"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Visit Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Located in the heart of Sydney Fish Market, we're easy to find and ready to welcome you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map / Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                alt="Sydney Fish Market"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Sydney Fish Market</h3>
                      <p className="text-gray-600">Shop A3, 1 Bridge Rd</p>
                      <p className="text-gray-600">Glebe NSW 2037</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Booking */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Bookings</h3>
                  <a href="tel:0432289369" className="text-amber-600 font-medium text-xl hover:text-amber-700 transition-colors">
                    0432 289 369
                  </a>
                </div>
              </div>
              <p className="text-gray-600 text-sm">For reservations and booking inquiries</p>
            </div>

            {/* General Inquiries */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">General Inquiries</h3>
                  <a href="tel:0433889738" className="text-gray-800 font-medium text-xl hover:text-gray-900 transition-colors">
                    0433 889 738
                  </a>
                </div>
              </div>
              <p className="text-gray-600 text-sm">For all other questions and inquiries</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Email Us</h3>
                  <a href="mailto:ICHIE.SYDNEY@GMAIL.COM" className="text-gray-600 hover:text-amber-600 transition-colors">
                    ICHIE.SYDNEY@GMAIL.COM
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <p className="text-gray-600 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://instagram.com/ICHIE_SYDNEY"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://facebook.com/ICHIE_SYDNEY"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-gray-500 text-sm mt-3">@ICHIE_SYDNEY</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
