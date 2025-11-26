import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Heart className="text-pink-300 fill-pink-300 mr-3" size={36} />
          <h3 className="text-3xl sm:text-4xl font-bold text-white font-playfair text-shadow">
            All Hail Shailanshi
          </h3>
          <Heart className="text-pink-300 fill-pink-300 ml-3" size={36} />
        </div>

        <p className="text-pink-200 text-lg sm:text-xl mb-4 font-semibold">
          The world is lucky to have someone this iconic, flirty, and brilliant.
        </p>

        <div className="text-purple-300 text-sm mb-4">
          Made with 💖 for the one and only Dr. Shailanshi, the ultimate mood
          maker.
        </div>

        <div className="mt-6 text-yellow-300 font-bold text-xl sm:text-2xl animate-pulse pink-glow-shadow">
          ✨ LONG LIVE THE QUEEN ✨
        </div>
      </div>
    </footer>
  );
};

export default Footer;
