"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Offers() {
  const gymOffers = [
    {
      id: 1,
      title: "Weekly Plan",
      description: "7 days, 30 min/day",
      price: 99.99,
      features: ["Personalized routine", "Nutrition guide", "24/7 gym access"],
    },
    {
      id: 2,
      title: "Monthly Plan",
      description: "30 days, 60 min/day",
      price: 199.99,
      features: ["1-on-1 training", "Progress tracking", "All group classes"],
    },
    {
      id: 3,
      title: "Yearly Plan",
      description: "365 days, 45 min/day",
      price: 499.99,
      features: ["Unlimited training", "Custom meal plans", "Exclusive events"],
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4 bg-gray-900 min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl font-bold text-center mb-16 text-white font-montserrat">
        Membership <span className="text-orange-500">Plans</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gymOffers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-white mb-2">
                {offer.title}
              </h2>
              <p className="text-gray-400 mb-4">{offer.description}</p>
              <p className="text-4xl font-bold text-orange-500 mb-6">
                ${offer.price.toFixed(2)}
              </p>
              <ul className="space-y-2 mb-6 flex-grow">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                Choose Plan
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
