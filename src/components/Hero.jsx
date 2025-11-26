import { Sparkles } from "lucide-react";
import React from "react";
const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 text-center relative">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6 flex justify-center">
          <Sparkles className="text-yellow-400 animate-pulse" size={48} />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 mb-6 font-playfair animate-fadeIn hover:scale-[1.02] transition-transform duration-500 cursor-default text-shadow">
          The Star of Our Hearts: Shailanshi
        </h1>

        <p className="text-base sm:text-2xl md:text-3xl text-gray-800 font-semibold mb-4 animate-slideUp">
          Flirty. Moody. Charming. Intelligent.
        </p>

        <div className="mt-8 inline-block">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl transform hover:scale-105 hover:shadow-pink-400/50 transition-all duration-300 pink-glow-shadow">
            ✨ Celebrate Her Iconic Moods ✨
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
