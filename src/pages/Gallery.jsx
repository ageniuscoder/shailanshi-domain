// src/pages/Gallery.jsx
import React from "react";
import Footer from "../components/Footer";
import { galleryImages } from "../data/shailanshiData.jsx"; // CORRECTED: Imported from shailanshiData
import { Camera, Heart } from "lucide-react";

const Gallery = () => {
  // images array is now imported

  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-purple-100 via-pink-100 to-yellow-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-6">
              <Camera className="text-pink-500 mr-3" size={48} />
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 font-playfair animate-fadeIn text-shadow">
                Iconic Looks Gallery
              </h1>
              <Camera className="text-purple-500 ml-3" size={48} />
            </div>

            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              A visual journey through excellence, charm, and undeniable
              charisma. Each image tells a story of someone who's simply on
              another level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                // MODIFIED: Replaced old hover styles with the powerful hover-3d-shadow utility
                className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 border-4 border-transparent hover:border-pink-400 hover:shadow-pink-500/50 hover-3d-shadow"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  // FIX: Responsive height h-64 sm:h-96
                  className="w-full h-64 sm:h-96 object-contain transition-transform duration-500 group-hover:scale-110 bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-pink-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
                  <Heart
                    className="text-pink-300 fill-pink-300 mb-4 animate-pulse"
                    size={48}
                  />
                  <h3 className="text-2xl font-bold text-white mb-3 font-playfair text-center text-shadow">
                    {image.title}
                  </h3>
                  <p className="text-pink-100 text-center text-lg">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-3xl shadow-2xl p-8 sm:p-12 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-400/50">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-playfair text-shadow">
              A Picture is Worth a Thousand Flirts 😉
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              But even a thousand words can't fully capture the flirty, moody,
              and intelligent spirit of Shailanshi. You just have to experience
              the greatness firsthand! 📸✨
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
