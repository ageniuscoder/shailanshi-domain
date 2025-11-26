// src/pages/Home.jsx
import React from "react";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { highlights } from "../data/shailanshiData.jsx"; // Imported highlights
import { Heart, Sparkles, Crown, Star } from "lucide-react";
import JokesSection from "../components/JokesSection"; // Import the Jokes Section
import ImageComponent from "../components/ImageComponent"; // ADDED: ImageComponent for visual balance

const Home = () => {
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#FFD700", "#FF69B4", "#9370DB", "#FF1493", "#FFB6C1"],
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#FFD700", "#FF69B4", "#9370DB", "#FF1493", "#FFB6C1"],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Hero />
      <ImageComponent />

      <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-purple-50 via-pink-50 to-purple-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 font-playfair animate-fadeIn text-shadow">
            Welcome to Shailanshi's World
          </h2>

          <p className="text-base sm:text-lg md:text-2xl text-center text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            Step into a realm where **intelligence meets moody charm**, where
            ambition meets flair, and where the future Dr. Shailanshi shines
            bright. This is not just a website—it's a celebration of iconic
            greatness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center transform hover:scale-[1.05] hover:rotate-1 transition-all duration-300 border-4 border-transparent hover:border-pink-400 hover:shadow-pink-400/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-playfair">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 rounded-3xl shadow-2xl p-8 sm:p-12 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-purple-400/50">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-playfair text-shadow">
              Did You Know?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              Shailanshi isn't just preparing to be a doctor—she's dedicating
              herself to service. With her sharp mind and playful mood, she's
              going to be the most charming and intelligent doctor the world has
              ever seen! 🩺✨
            </p>
          </div>
        </div>
      </section>

      <JokesSection />

      <Footer />
    </div>
  );
};

export default Home;
