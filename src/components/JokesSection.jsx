// src/components/JokesSection.jsx
import React from "react";
import { Smile, Crown, Sparkles } from "lucide-react";
import { nancyyJokes } from "../data/shailanshiData.jsx";

const JokesSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-t from-pink-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-playfair animate-fadeIn text-shadow">
          शैलान्शी का हास्य दरबार 😊
        </h2>

        <div className="grid grid-cols-1 gap-6 mb-16">
          {nancyyJokes.map((joke, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-[1.01] transition-all duration-300 border-l-8 border-pink-500 hover:border-purple-500 animate-slideUp hover:shadow-pink-500/40"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-4">
                <Smile className="text-yellow-500 flex-shrink-0" size={32} />
                <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold leading-relaxed">
                  {joke}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 italic">
            **Disclaimer**: Shailanshi itni pyari hain ki humare jokes bhi unke
            liye **compliment** hain! ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default JokesSection;
