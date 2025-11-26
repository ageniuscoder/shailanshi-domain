// src/components/PraiseSection.jsx
import React from "react";
import { Zap, Heart, Stethoscope, Crown } from "lucide-react";
import { praises } from "../data/shailanshiData.jsx";

const PraiseSection = () => {
  // praises array is now imported

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-playfair text-shadow">
          Why Shailanshi is a Shining Star
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {praises.map((praise, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 transform hover:scale-[1.03] transition-all duration-300 hover:shadow-pink-400/50 border-4 border-transparent hover:border-pink-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className={`bg-gradient-to-br ${praise.gradient} p-4 rounded-full shadow-lg`}
                >
                  {praise.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center font-playfair">
                {praise.title}
              </h3>

              <p className="text-base text-gray-700 text-center leading-relaxed">
                {praise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PraiseSection;
