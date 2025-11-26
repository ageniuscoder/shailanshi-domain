// src/pages/About.jsx
import React from "react";
import PraiseSection from "../components/PraiseSection";
import Footer from "../components/Footer";
import { achievements } from "../data/shailanshiData.jsx"; // Imported achievements
import { BookOpen, Trophy, Flame, Zap } from "lucide-react";

const About = () => {
  // achievements array is now imported

  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-pink-100 to-purple-100">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 font-playfair animate-fadeIn text-shadow">
            About Shailanshi
          </h1>

          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 mb-16 border-4 border-pink-300 transform hover:scale-[1.005] transition-transform duration-300 hover:shadow-pink-300/50">
            <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed mb-6">
              In a world full of ordinary people, Shailanshi stands out with her
              **sharp intelligence** and **charming unpredictability**. She's
              not just future doctor material—she's future{" "}
              <span className="font-bold text-pink-600">
                moody yet magnificent
              </span>{" "}
              doctor material.
            </p>

            <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed mb-6">
              Her personality?{" "}
              <span className="font-bold text-purple-600">
                Flirty, witty, charming, and highly intelligent
              </span>
              . She knows her worth, and spoiler alert: it's astronomical. When
              she works diligently, her focus inspires everyone around her. When
              she's feeling playful, watch out for the witty comebacks!
            </p>

            <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed">
              Beautiful? Obviously. Charming? Dangerously so. Smart? Off the
              charts. Adorable? Overwhelmingly. She's basically won the genetic
              and personality lottery, and she's using her powers for good
              (mostly for her NEET preparation and becoming Dr. Shailanshi).
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-playfair text-shadow">
            The Resume of Iconic Greatness
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-xl p-6 sm:p-8 transform hover:scale-[1.03] transition-all duration-300 border-2 border-pink-200 hover:border-purple-400 hover:shadow-purple-400/50"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center font-playfair">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PraiseSection />
      <Footer />
    </div>
  );
};

export default About;
