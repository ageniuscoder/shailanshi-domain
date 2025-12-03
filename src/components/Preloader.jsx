// src/components/Preloader.jsx
import React from "react";
import { Crown, Sparkles } from "lucide-react"; // Added Sparkles

const Preloader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-600 ${
        !isVisible && "fade-out" // Apply fade-out class when state is false
      }`}
    >
      {/* Container for the elegant seal */}
      <div className="relative flex items-center justify-center">
        {/* The elegant, glowing, layered rounded badge (More defined glassmorphism) */}
        <div
          className="w-72 h-72 sm:w-80 sm:h-80 rounded-full flex flex-col items-center justify-center 
                     bg-white/10 backdrop-blur-lg shadow-3xl p-6 
                     border-4 border-yellow-300 pink-glow-shadow transition-all duration-500" // Changed background to white/10 and added backdrop-blur-lg
        >
          {/* Decorative Sparkles above */}
          <Sparkles size={32} className="text-yellow-300 mb-2 animate-pulse" />

          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 font-playfair text-shadow mb-2">
            Shailanshi
          </h1>
          <p className="text-lg text-yellow-100 italic font-semibold">
            The Iconic Queen
          </p>

          {/* Decorative Sparkles below */}
          <Sparkles
            size={32}
            className="text-pink-300 mt-2 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Animated Crown - positioned absolutely on top of the rounded name */}
        <Crown
          size={120} // Larger size for prominence
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-300 fill-yellow-300/30 pink-glow-shadow animate-spin-slow"
        />
      </div>

      {/* New Loading Animation: Pulsing Dots */}
      <div className="flex space-x-3 mt-12">
        <div className="w-4 h-4 rounded-full bg-pink-300 animate-pulse" />
        <div
          className="w-4 h-4 rounded-full bg-yellow-300 animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-4 h-4 rounded-full bg-purple-300 animate-pulse"
          style={{ animationDelay: "0.4s" }}
        />
      </div>

      {/* Elegant loading text below */}
      <p className="text-lg sm:text-xl text-yellow-100 font-semibold uppercase tracking-widest mt-4">
        Awaiting Royal Presence...
      </p>
    </div>
  );
};

export default Preloader;
