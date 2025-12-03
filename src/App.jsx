import React, { useRef, useEffect, useState } from "react"; // ADDED useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Tribute from "./pages/Tribute";
import EffectsLayer from "./components/EffectsLayer";
import AudioPlayer from "./components/AudioPlayer";
import ScrollIndicator from "./components/ScrollIndicator";
import RoyaltySeal from "./components/RoyaltySeal";
import Preloader from "./components/Preloader"; // NEW IMPORT

function App() {
  // CREATE THE REF
  const audioPlayerRef = useRef(null);
  // NEW STATE: Manage preloader visibility
  const [showPreloader, setShowPreloader] = useState(true);

  // Function to be called on user interaction
  const handleUserInteraction = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.attemptPlay();
      // Remove the listener once music starts playing
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    }
  };

  useEffect(() => {
    // ATTACH LISTENER on component mount
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    // NEW LOGIC: Hide preloader after a short delay (e.g., 2.5 seconds total)
    const timer = setTimeout(() => {
      // First, trigger the fade-out CSS animation (1s duration)
      setShowPreloader(false);
    }, 1500); // Wait 1.5s before starting fade-out

    // CLEANUP listener on component unmount
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      clearTimeout(timer); // Clean up the preloader timer
    };
  }, []);

  return (
    <Router>
      {/* NEW COMPONENT: Preloader. It manages its own fade-out class when showPreloader turns false. */}
      {showPreloader && <Preloader isVisible={showPreloader} />}

      {/* IMPROVED: Added a custom selection style for aesthetic polish */}
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 custom-cursor selection:bg-pink-300">
        <ScrollIndicator /> {/* NEW COMPONENT */}
        <EffectsLayer />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tribute" element={<Tribute />} />
        </Routes>
        {/* PASS THE REF TO THE AUDIO PLAYER */}
        <AudioPlayer ref={audioPlayerRef} />
        <RoyaltySeal /> {/* NEW COMPONENT */}
      </div>
    </Router>
  );
}

export default App;
