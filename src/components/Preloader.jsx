// src/components/Preloader.jsx
import React from "react";
import { Crown } from "lucide-react";

const Preloader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-600 ${
        !isVisible && "fade-out" // Apply fade-out class when state is false
      }`}
    >
      <div className="text-center">
        {/* Animated Crown */}
        <Crown
          size={96}
          className="text-yellow-300 fill-yellow-300/50 pink-glow-shadow animate-spin-slow mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-white font-playfair mb-3">
          Shailanshi's Domain
        </h1>
        <p className="text-lg text-yellow-300 font-semibold uppercase tracking-widest">
          Loading Royal Presence...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
