import React from "react";
const ImageComponent = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-playfair">
          The Queen Herself
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Confident and Beautiful"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-bold text-xl">
                Confidence Personified
              </span>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/3807758/pexels-photo-3807758.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Future Doctor"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-bold text-xl">
                Future Dr. Nancyy
              </span>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Queen Energy"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-bold text-xl">Queen Energy</span>
            </div>
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl shadow-2xl p-8 border-4 border-pink-300">
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 font-playfair">
            "I don't compete. I dominate."
          </p>
          <p className="text-xl text-gray-700">- Nancyy (probably)</p>
        </div>
      </div>
    </section>
  );
};

export default ImageComponent;
