// src/components/Navigation.jsx
import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Crown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  // Effect for dynamic scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Shailanshi" },
    { path: "/gallery", label: "Gallery" },
    { path: "/tribute", label: "Tribute" },
  ];

  const isActive = (path) => location.pathname === path;

  // Conditional class for shadow and transition
  const navClasses = `fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-pink-700 to-yellow-600 nav-shadow-transition ${
    hasScrolled ? "shadow-3xl" : "shadow-none"
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-[1.05]"
          >
            <Crown
              className="text-yellow-300 group-hover:scale-110 transition-transform"
              size={36}
            />
            <div className="flex flex-col items-start">
              <h1 className="text-2xl md:text-3xl font-bold text-white font-playfair leading-none">
                Shailanshi's Domain
              </h1>
              {/* UPDATED: Changed tagline to a more elegant phrase */}
              <p className="text-xs text-yellow-300 font-semibold uppercase tracking-wider">
                Where Dedication Blooms.
              </p>
            </div>
            <Crown
              className="text-yellow-300 group-hover:scale-110 transition-transform"
              size={36}
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-300 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                // MODIFIED: Added hover:scale-110 hover:-translate-y-1 for a bouncy effect
                className={`text-lg font-semibold transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? "text-yellow-300 scale-110"
                    : "text-white hover:text-yellow-300 hover:scale-110 hover:-translate-y-1"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300 transform transition-transform duration-300 ${
                    isActive(link.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          // IMPROVED: Using a slightly different purple with more opaque background for mobile
          <div className="md:hidden pb-4 pt-2 space-y-3 bg-purple-900 bg-opacity-90 rounded-b-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-semibold py-2 px-4 mx-2 rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-yellow-300 text-purple-900 shadow-lg"
                    : // UPDATED: Soft hover effect
                      "text-white hover:bg-yellow-100 hover:bg-opacity-10 hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
