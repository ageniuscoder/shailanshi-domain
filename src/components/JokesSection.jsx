// src/components/JokesSection.jsx
import React from "react";
import { Smile, Crown, Sparkles } from "lucide-react";
import { nancyyJokes } from "../data/nancyyData.jsx";

const JokesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-pink-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-playfair animate-fadeIn">
          शाही हास्य दरबार 👑
        </h2>

        <div className="grid grid-cols-1 gap-6 mb-16">
          {nancyyJokes.map((joke, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300 border-l-8 border-pink-500 hover:border-purple-500 animate-slideUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-4">
                <Smile className="text-yellow-500 flex-shrink-0" size={32} />
                <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed">
                  {joke}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-600 italic">
            **Disclaimer**: Queen itni amazing hain ki humare jokes bhi unke
            liye **tribute** hain! ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default JokesSection;
