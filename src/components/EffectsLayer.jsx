// src/components/EffectsLayer.jsx
import { useEffect, useCallback } from "react";
import React from "react";

const EffectsLayer = () => {
  const createHeart = useCallback(() => {
    // UPDATED: Added a new star icon (⭐)
    const icons = ["猪", "荘", "笨ｨ", "検", "⭐"]; // ADDED CROWN, SPARKLES, STAR, NEW STAR
    const randomIcon = icons[Math.floor(Math.random() * icons.length)]; // Select a random icon

    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.innerHTML = randomIcon; // Use the random icon
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    heart.style.opacity = (Math.random() * 0.5 + 0.3).toString();

    document.getElementById("hearts-container")?.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, []);

  useEffect(() => {
    const interval = setInterval(createHeart, 300);

    return () => clearInterval(interval);
  }, [createHeart]);

  return (
    <div
      id="hearts-container"
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
    />
  );
};

export default EffectsLayer;
