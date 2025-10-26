import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Heart className="text-pink-300 fill-pink-300 mr-2" size={32} />
          <h3 className="text-3xl font-bold text-white font-playfair">
            All Hail Queen Nancyy
          </h3>
          <Heart className="text-pink-300 fill-pink-300 ml-2" size={32} />
        </div>

        <p className="text-pink-200 text-lg mb-4">
          The world is lucky to have someone this amazing.
        </p>

        <div className="text-purple-300 text-sm">
          Made with 💖 for the one and only Nancyy
        </div>

        <div className="mt-6 text-yellow-300 font-bold text-xl animate-pulse">
          👑 Long Live the Queen 👑
        </div>
      </div>
    </footer>
  );
};

export default Footer;
