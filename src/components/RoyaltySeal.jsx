// src/components/RoyaltySeal.jsx
import React from "react";
import { Gem } from "lucide-react";

const RoyaltySeal = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      <Gem
        size={40}
        className="text-purple-600 fill-purple-300 animate-spin-slow shadow-2xl"
        style={{ filter: "drop-shadow(0 0 5px rgba(168, 85, 247, 0.7))" }}
      />
    </div>
  );
};

export default RoyaltySeal;
