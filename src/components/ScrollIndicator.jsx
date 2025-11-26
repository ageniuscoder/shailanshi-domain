// src/components/ScrollIndicator.jsx
import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const currentScroll = document.documentElement.scrollTop;
    const progress = (currentScroll / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1">
      {/* IMPROVED: Stronger shadow for aesthetic blend */}
      <div
        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/70 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;
