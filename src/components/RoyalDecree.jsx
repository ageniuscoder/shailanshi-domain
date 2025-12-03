// src/components/RoyalDecree.jsx
import React from "react";
import { royalDecrees } from "../data/shailanshiData";
import { ScrollText, Sparkles } from "lucide-react";

const RoyalDecree = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-pink-100 rounded-3xl shadow-2xl p-6 sm:p-10 mb-16 border-4 border-yellow-400 transform hover:scale-[1.005] transition-transform duration-300 hover:shadow-yellow-400/50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-600 font-playfair text-shadow flex items-center justify-center">
        <ScrollText className="mr-3" size={40} /> Royal Decrees
      </h2>

      <div className="space-y-6">
        {royalDecrees.map((decree, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-purple-500 hover:border-pink-500 transition-colors duration-300 transform hover:translate-x-1"
          >
            <div className="flex items-start space-x-3 mb-2">
              {decree.icon}
              <h3 className="text-xl font-bold text-purple-800 font-playfair">
                {decree.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 ml-8 leading-relaxed">
              {decree.text}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-lg font-semibold text-gray-600 italic">
        <Sparkles className="inline text-yellow-500 mr-2" /> By the Authority of
        the Queen.
      </div>
    </div>
  );
};

export default RoyalDecree;
