// src/components/Hero.jsx
import React, { useState, useEffect } from "react"; // ADDED useState, useEffect
import { motion } from "framer-motion";
import { Crown, Heart, Sparkles } from "lucide-react"; // Import theme icons

// The full tagline to be typed
const FULL_TAGLINE = "The World's Most Intelligent and Charmingly Moody Queen.";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      const fullText = FULL_TAGLINE;

      if (isDeleting) {
        // Deleting phase
        setDisplayText(fullText.substring(0, taglineIndex - 1));
        setTaglineIndex(taglineIndex - 1);
        setTypingSpeed(50); // Faster delete
      } else {
        // Typing phase
        setDisplayText(fullText.substring(0, taglineIndex + 1));
        setTaglineIndex(taglineIndex + 1);
        setTypingSpeed(150); // Slower type
      }

      // Logic to switch between typing and deleting
      if (!isDeleting && taglineIndex === fullText.length) {
        // Pause at the end of typing
        setTypingSpeed(2000); // Wait for 2 seconds
        setIsDeleting(true);
      } else if (isDeleting && taglineIndex === 0) {
        // Pause at the end of deleting (then restart)
        setTypingSpeed(500); // Wait for 0.5 second before restarting type
        setIsDeleting(false);
      }
    };

    // Set the typing/deleting interval
    timer = setTimeout(handleTyping, typingSpeed);

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, [taglineIndex, isDeleting, typingSpeed]);

  // Function to split text for styling specific words
  const renderTagline = (text) => {
    return text.split(" ").map((word, index) => {
      // Logic to highlight "Intelligent" and "Moody"
      if (word.includes("Intelligent")) {
        return (
          <span key={index} className="text-white font-extrabold">
            {word}
          </span>
        );
      }
      if (word.includes("Moody")) {
        return (
          <span key={index} className="text-white font-extrabold">
            {word}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <div
      // Elegant, full-height, theme-consistent dark background
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-32
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-600 shadow-3xl overflow-hidden"
    >
      {/* Icon/Decoration - Stronger, glowing crown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="mb-6"
      >
        {/* Added pink-glow-shadow for dramatic pulsing effect */}
        <Crown
          size={72}
          className="text-yellow-300 fill-yellow-300/50 pink-glow-shadow"
        />
      </motion.div>

      {/* Name Animation - MODIFIED: Added group and hover effects */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, type: "spring", stiffness: 100 }}
        // MODIFIED: Added group class for hover effect, and hover:text-pink-600
        className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 font-playfair text-gray-900 group hover:text-pink-600 transition-colors duration-500"
      >
        Shailanshi {/* MODIFIED: Added group-hover to the Heart */}
        <Heart className="inline h-12 w-12 text-red-300 fill-red-300 group-hover:text-yellow-400 group-hover:fill-yellow-400 transition-colors duration-500" />
      </motion.h1>

      {/* Decorative Separator */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "30%", opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "tween" }}
        className="h-1 bg-pink-400 my-6 max-w-lg mx-auto rounded-full flex justify-center items-center"
      >
        <Sparkles size={24} className="text-yellow-300" />
      </motion.div>

      {/* Tagline/Quote Animation - NOW DYNAMIC */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        // Kept light text for contrast against the dark background
        className="text-lg sm:text-xl md:text-3xl max-w-3xl mx-auto text-yellow-100 font-semibold italic leading-relaxed text-shadow min-h-[4rem]" // Added min-h to prevent layout shift
      >
        "{renderTagline(displayText)}
        {/* Typing cursor */}
        <span className="inline-block w-1 h-6 bg-yellow-100 ml-1 align-middle animate-pulse"></span>
        "
      </motion.p>

      {/* Animated Icon Cluster - Subtler, continuous animations */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="mt-12 flex space-x-8 text-yellow-300"
      >
        <Sparkles size={40} className="animate-pulse" />
        <Crown size={40} className="hover:scale-110 transition-transform" />
        <Heart
          size={40}
          className="fill-pink-400 text-pink-400 animate-pulse"
          style={{ animationDelay: "0.4s" }}
        />
        <Sparkles
          size={40}
          className="animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />
      </motion.div>
    </div>
  );
}
