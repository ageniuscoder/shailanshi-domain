// src/components/PraiseSection.jsx
import React from "react";
import { Zap, Heart, Stethoscope, Crown } from "lucide-react";
import { praises } from "../data/nancyyData.jsx";

const PraiseSection = () => {
  // praises array is now imported

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-playfair">
          Why Nancyy Reigns Supreme
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {praises.map((praise, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-3xl border-4 border-transparent hover:border-pink-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className={`bg-gradient-to-br ${praise.gradient} p-4 rounded-full shadow-lg`}
                >
                  {praise.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center font-playfair">
                {praise.title}
              </h3>

              <p className="text-gray-700 text-lg text-center leading-relaxed">
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
