"use client";

import { motion } from "framer-motion";
import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import LogoLongBlack from "@/public/ICHIE-LOGO black.png";

const menuCategories = [
  {
    name: "Signature Dish",
    items: [
      {
        name: "Live Lobster",
        description: "Sashimi, Butter, Karaage, Miso Soup",
        price: "MP",
      },
    ],
  },
  {
    name: "Main (BBQ Char Grill)",
    items: [
      {
        name: "Seafood Catch",
        description: "Calamari, Prawn, Morton Bay Bug, Lemon, Chips, Salad",
        price: "$34",
      },
      {
        name: "Swordfish Steak",
        description: "Char-grilled",
        price: "$32",
      },
      {
        name: "Moreton Bay Bug",
        description: "Char-grilled, Sweet Chilli Sauce",
        price: "$38",
      },
      {
        name: "King Prawn",
        description: "Char-grilled, Salad, Lemon",
        price: "$30",
      },
      {
        name: "Baby Abalone",
        description: "Pan-fried, Soy Butter",
        price: "$35",
      },
      {
        name: "Pot of Mussels",
        description: "Steamed Mussels Zuchhini, Coriander, Garlic, Lemon",
        price: "$32",
      },
      {
        name: "Tempura Fish & Aonori Chips",
        description: "Crispy fish tempura served with Aonori (Seaweed powder) chips, garden salad, & tartare sauce",
        price: "$23",
      },
      {
        name: "Spicy Chicken Wings & Aonori Chips",
        description: "Deepfried Chicken Wings served with Aonori (Seaweed powder) chips, garden salad, & Lemon",
        price: "$18",
      },
      {
        name: "Seafood Jumbo Skewer",
        description: "Prawn, Calamari, Octopus, Scallop, Assorted Vegetable",
        price: "$18",
      },
    ],
  },
  {
    name: "Bread",
    items: [
      {
        name: "Garlic",
        description: " ",
        price: "$8",
      },
      {
        name: "Shiso Pesto",
        description: " ",
        price: "$9",
      },
      {
        name: "Chilli Toast",
        description: " ",
        price: "$7",
      },
      {
        name: "Plain",
        description: " ",
        price: "$6",
      },
    ],
  },
  {
    name: "Oyster",
    items: [
      {
        name: "1/2 Dozen Oysters",
        description: "Natural, Lemon, Steamed Ginger Soy, Panko Fried, Tartare, Miso Mornay",
        price: "$18",
      },
      {
        name: "1 Dozen Oysters",
        description: "Natural, Lemon, Steamed Ginger Soy, Panko Fried, Tartare, Miso Mornay",
        price: "$32",
      },
    ],
  },
  {
    name: "Light/Entrees",
    items: [
      {
        name: "Edamame",
        description: "",
        price: "$9",
      },
      {
        name: "Fisherman's Miso Soup",
        description: "",
        price: "$12",
      },
      {
        name: "Chawanmushi",
        description: "",
        price: "$12",
      },
      {
        name: "WA Octopus & Squid Karaage",
        description: "",
        price: "$18",
      },
      {
        name: "Kingfish Collar",
        description: "Seasoned Salt, Miso Mayonnaise Shichimi",
        price: "$18",
      },
    ],
  },
  {
    name: "Pasta/Linguine",
    items: [
      {
        name: "Abalone, Soy Butter",
        description: "",
        price: "$30",
      },
      {
        name: "Fisherman's Marinara",
        description: "Tomato, Cream",
        price: "$28",
      },
      {
        name: "Mentaiko, Shimeji Mushroom, Shiso, Butter",
        description: "",
        price: "$26",
      },
    ],
  },
  {
    name: "Sides",
    items: [
      {
        name: "Aonori Chips",
        description: "",
        price: "$8",
      },
      {
        name: "Steamed Rice",
        description: "",
        price: "$4",
      }
    ],
  },
  {
    name: "Cold Section",
    items: [
      {
        name: "Prawn Cocktail, Aurora Sauce",
        description: "",
        price: "$18",
      },
      {
        name: "Seafood Ceviche",
        description: "",
        price: "$22",
      },
      {
        name: "Garden Salad",
        description: "",
        price: "$10",
      },
      {
        name: "Seaweed Salad",
        description: "",
        price: "$12",
      },
      {
        name: "Brown Rice Salad Bowl",
        description: "",
        price: "$15",
      },
    ],
  },
  {
    name: "Kids Menu",
    items: [
      {
        name: "Fish & Chips",
        description: "",
        price: "$15",
      },
      {
        name: "Nuggets & Chips",
        description: "",
        price: "$13",
      },
      {
        name: "Kids Pasta (Tomato or Cream)",
        description: "",
        price: "$13",
      },
    ],
  },
];

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </Link>

            <div className="flex items-center gap-2">
              <img src={LogoLongBlack.src} alt="ICHIÉ 一会" className="w-36 mx-auto mb-4" />
            </div>

            <a
              href="https://bookings.nowbookit.com/?accountid=bf545626-0fad-4544-a51f-bd9197b955b2&venueid=14217&theme=light&colors=hex,000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors text-sm"
            >
              Reserve
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3764647/pexels-photo-3764647.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Authentic Japanese flavors, crafted with passion
          </motion.p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <div className="flex-1 h-px bg-amber-300" />
              </div>

              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-xl font-bold text-amber-600 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Dine?</h2>
            <p className="text-gray-400 mb-8">
              Join us for an unforgettable Japanese culinary experience
            </p>
            <a
              href="https://bookings.nowbookit.com/?accountid=bf545626-0fad-4544-a51f-bd9197b955b2&venueid=14217&theme=light&colors=hex,000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <UtensilsCrossed className="w-5 h-5 mr-3" />
              Make a Reservation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
