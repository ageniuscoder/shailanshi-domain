// src/pages/About.jsx
import React from "react";
import PraiseSection from "../components/PraiseSection";
import Footer from "../components/Footer";
import { achievements } from "../data/nancyyData.jsx"; // Imported achievements
import { BookOpen, Trophy, Flame, Zap } from "lucide-react";

const About = () => {
  // achievements array is now imported

  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-pink-100 to-purple-100">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 font-playfair animate-fadeIn">
            About Queen Nancyy
          </h1>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border-4 border-pink-300">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              In a world full of ordinary people, Nancyy stands out like a
              diamond in a pile of rocks. She's not just future doctor
              material—she's future{" "}
              <span className="font-bold text-pink-600">legendary</span> doctor
              material.
            </p>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              Her personality?{" "}
              <span className="font-bold text-purple-600">
                Dominant, confident, and absolutely magnetic
              </span>
              . She knows her worth, and spoiler alert: it's astronomical. When
              she walks into a room, everyone else becomes background characters
              in the Nancyy show.
            </p>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Beautiful? Obviously. Charming? Dangerously so. Smart? Off the
              charts. Adorable? Overwhelmingly. She's basically won the genetic
              and personality lottery, and she's using her powers for good
              (mostly for conquering NEET and becoming Dr. Nancyy).
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-playfair">
            The Resume of Greatness
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 border-2 border-pink-200 hover:border-purple-400"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center font-playfair">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 text-lg text-center leading-relaxed">
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
