// src/components/RoyaltySeal.jsx
import React from "react";
import { Gem } from "lucide-react";

const RoyaltySeal = () => {
  return (
    // ADJUSTED: moved slightly up on mobile, added hover scale
    <div className="fixed bottom-6 left-4 z-50 pointer-events-none transform hover:scale-[1.15] transition-transform duration-500">
      <Gem
        size={40}
        // ADDED: pink-glow-shadow utility class for pulsing effect
        className="text-purple-600 fill-purple-300 animate-spin-slow pink-glow-shadow"
        // REMOVED: redundant style filter
      />
    </div>
  );
};

export default RoyaltySeal;
