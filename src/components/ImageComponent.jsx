// src/components/ImageComponent.jsx
import React from "react";
const ImageComponent = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-playfair text-shadow">
          The Iconic Queen Herself
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.03] transition-all duration-300 hover:shadow-pink-500/80">
            <img
              // FIX: Responsive height h-56 sm:h-80
              src="1.jpeg"
              alt="Dedication Personified"
              className="w-full h-56 sm:h-80 object-contain bg-white"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-bold text-xl">
                Confident & Calm
              </span>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.03] transition-all duration-300 hover:shadow-purple-500/80">
            <img
              // FIX: Responsive height h-56 sm:h-80
              src="6.jpeg"
              alt="Future Doctor"
              className="w-full h-56 sm:h-80 object-contain bg-white"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-bold text-xl">
                Future Dr. Shailanshi
              </span>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.03] transition-all duration-300 hover:shadow-yellow-500/80">
            <img
              // FIX: Responsive height h-56 sm:h-80
              src="5.jpeg"
              alt="Star Student Energy"
              className="w-full h-56 sm:h-80 object-contain bg-white"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-bold text-xl">
                Elegance in Motion
              </span>
            </div>
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-4 border-pink-300 transform hover:scale-[1.01] transition-transform duration-300 hover:shadow-xl hover:shadow-pink-300/50">
          <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 font-playfair">
            "My mood is unpredictable, but my focus is 100%." 😌
          </p>
          <p className="text-lg text-gray-700">- Shailanshi (the real one)</p>
        </div>
      </div>
    </section>
  );
};

export default ImageComponent;
