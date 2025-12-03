// src/pages/Tribute.jsx
import React from "react";
import Footer from "../components/Footer";
import RoyalDecree from "../components/RoyalDecree"; // NEW IMPORT: RoyalDecree
import { tributes, funFacts } from "../data/shailanshiData.jsx"; // Imported data
import { Heart, Star, Crown, Sparkles } from "lucide-react";

const Tribute = () => {
  // tributes and funFacts arrays are now imported

  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-yellow-100 via-pink-100 to-purple-100">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 font-playfair animate-fadeIn text-shadow">
            Tributes to the Queen
          </h1>
          <div className="text-center mb-16">
            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Words from those who have witnessed greatness firsthand. Spoiler:
              Everyone agrees she's incredibly intelligent and charmingly moody.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {tributes.map((tribute, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-xl p-6 sm:p-10 border-4 border-pink-300 hover:border-purple-400 transform hover:scale-[1.03] transition-all duration-300 hover:shadow-pink-400/50"
              >
                <div className="flex justify-center mb-6">{tribute.icon}</div>
                <blockquote className="text-base md:text-xl text-gray-800 font-semibold text-center mb-6 italic leading-relaxed">
                  "{tribute.quote}"
                </blockquote>
                <p className="text-center text-gray-600 text-base">
                  — {tribute.author}
                </p>
              </div>
            ))}
          </div>
          {/* NEW: RoyalDecree component added here */}
          <RoyalDecree />

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-16 border-4 border-yellow-300 transform hover:scale-[1.005] transition-transform duration-300 hover:shadow-yellow-300/50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-600 font-playfair text-shadow">
              Fun Facts About Shailanshi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 sm:p-6 shadow-md transform hover:scale-[1.03] transition-all duration-300 border-2 border-pink-200 hover:border-purple-400 hover:shadow-purple-400/50"
                >
                  <p className="text-sm sm:text-base md:text-xl text-gray-800 font-semibold text-center">
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* REMOVED: <RoyalDecree /> */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 rounded-3xl shadow-2xl p-8 sm:p-12 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-pink-400/50">
            <Heart className="text-white fill-white mx-auto mb-6" size={64} />
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-playfair text-shadow">
              The Final Word
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-semibold mb-6">
              Shailanshi is the best. Period.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-semibold mb-6">
              Her mood? Iconic. Her Intelligence? Unmatched.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-bold text-shadow">
              Long live the Queen! ✨💖
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tribute;
