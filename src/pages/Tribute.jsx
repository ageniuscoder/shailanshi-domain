// src/pages/Tribute.jsx
import React from "react";
import Footer from "../components/Footer";
// REMOVED: import RoyalDecree from "../components/RoyalDecree";
import { tributes, funFacts } from "../data/nancyyData.jsx"; // Imported data
import { Heart, Star, Crown, Sparkles } from "lucide-react";

const Tribute = () => {
  // tributes and funFacts arrays are now imported

  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-yellow-100 via-pink-100 to-purple-100">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 font-playfair animate-fadeIn">
            Tributes to the Queen
          </h1>
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Words from those who have witnessed greatness firsthand. Spoiler:
              Everyone agrees she's incredible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {tributes.map((tribute, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl p-10 border-4 border-pink-300 hover:border-purple-400 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{tribute.icon}</div>
                <blockquote className="text-xl md:text-2xl text-gray-800 font-semibold text-center mb-6 italic leading-relaxed">
                  "{tribute.quote}"
                </blockquote>
                <p className="text-center text-gray-600 text-lg">
                  — {tribute.author}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border-4 border-yellow-300">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-600 font-playfair">
              Fun Facts About Nancyy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-pink-200 hover:border-purple-400"
                >
                  <p className="text-lg md:text-xl text-gray-800 font-semibold text-center">
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* REMOVED: <RoyalDecree /> */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 rounded-3xl shadow-2xl p-12 text-center transform hover:scale-105 transition-all duration-300">
            <Heart className="text-white fill-white mx-auto mb-6" size={64} />
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              The Final Word
            </h3>
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-semibold mb-6">
              Nancyy isn't just the best.
            </p>
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-semibold mb-6">
              She's in a category all her own.
            </p>
            <p className="text-3xl md:text-4xl text-white leading-relaxed font-bold">
              Long live Queen Nancyy! 👑✨
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tribute;
