import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Tribute from "./pages/Tribute";
import EffectsLayer from "./components/EffectsLayer";
import AudioPlayer from "./components/AudioPlayer";
import ScrollIndicator from "./components/ScrollIndicator"; // NEW IMPORT
import RoyaltySeal from "./components/RoyaltySeal"; // NEW IMPORT

function App() {
  // CREATE THE REF
  const audioPlayerRef = useRef(null);

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

    // CLEANUP listener on component unmount
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <Router>
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
