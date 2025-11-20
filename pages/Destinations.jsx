import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Wildlife",
    country: "Kenya",
    imageUrl: "/images/lion-8947711_1280.jpg",
    description: "King of the jungle.",
  },
  {
    name: "Wildlife",
    country: "Kenya",
    imageUrl: "/images/leopard-163035_1280.jpg",
    description: "Preview one of the big 5 resting.",
  },
  {
    name: "Rift Valley",
    country: "Kenya",
    imageUrl: "/images/landscape-4018835_1280.jpg",
    description: "Sheer cliffs and a rugged shoreline dotted with small beaches.",
  },
  {
    name: "Hot Air Balloons",
    country: "Kenya",
    imageUrl: "/images/balloon-1347434_1280.jpg",
    description:
      "Balloon-filled skies and surreal rock formations in a fairytale landscape.",
  },
  {
    name: "Wildlife",
    country: "Tanzania",
    imageUrl: "/images/elephants-7651446_1280.jpg",
    description:
      "Lush tropical rainforests, pristine beaches, and vibrant local culture.",
  },

  {
    name: "Coast",
    country: "Tanzania, Zanzibar",
    imageUrl: "/images/sunset-4499023_1280.jpg",
    description:
      "Beautiful Coast",
  },
];

const DestinationsPage = () => (
  <motion.div
    className="min-h-screen bg-brand-dark py-20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className="container mx-auto px-6">
      <h1 className="text-5xl font-serif text-brand-gold mb-10 text-center">
        More Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <motion.div
            key={dest.name}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg group bg-brand-gray"
          >
            <img
              src={dest.imageUrl}
              alt={dest.name}
              className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-gray-300 text-sm">{dest.country}</p>
              <h3 className="text-2xl font-serif font-bold text-white">
                {dest.name}
              </h3>
              <p className="text-gray-300 mt-3">{dest.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/booking"
          className="bg-brand-gold text-brand-dark font-bold py-3 px-10 rounded-full text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 inline-block"
        >
          Book Your Dream Journey
        </Link>
      </div>
    </div>
  </motion.div>
);

export default DestinationsPage;


