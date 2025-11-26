import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Volume2, VolumeX } from "lucide-react";

// The path is relative to the 'public' folder.
// No import needed for static assets in the public folder.

// Use forwardRef to allow the parent (App or main.jsx) to call methods on this component
const AudioPlayer = forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // FIX: audioRef now points to the <audio> DOM element in the JSX
  const audioRef = useRef(null);

  // Set audio properties and listeners once on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true; // Ensure the music loops
    audio.volume = 0.4; // Set a moderate volume (0.0 to 1.0)

    // Listener to correctly update state when audio starts playing
    const handlePlay = () => setIsPlaying(true);
    // Listener to correctly update state when audio stops or is paused
    const handlePause = () => setIsPlaying(false);

    // Log error if source failed
    const handleError = (e) => {
      console.error("Audio playback error:", e);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);

    // Cleanup function
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
      audio.pause();
    };
  }, []); // Empty dependency array means this runs once on mount

  // Expose the play trigger function to the parent component (App.jsx)
  useImperativeHandle(ref, () => ({
    attemptPlay: () => {
      const audio = audioRef.current;
      if (!audio) return;

      // Call play() directly. The 'play' event listener will update the state if successful.
      audio.play().catch((error) => {
        console.log(
          "Auto-play blocked, waiting for explicit user interaction:",
          error
        );
      });
    },
  }));

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Use the native audio element's .paused property for definitive check
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <>
      {/* Hidden <audio> element for reliable source management */}
      <audio ref={audioRef} src="/royal-fanfare.mp3" preload="auto" hidden />

      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={togglePlayPause}
          // ADDED: pink-glow-shadow for a dramatic pulsing effect
          className="flex items-center justify-center p-3 rounded-full bg-pink-600 text-white shadow-xl hover:bg-pink-700 transition-all transform hover:scale-110 pink-glow-shadow"
          title={isPlaying ? "Pause Royal Music" : "Play Royal Music"}
        >
          {isPlaying ? (
            <Volume2 size={24} className="animate-pulse" />
          ) : (
            <VolumeX size={24} />
          )}
        </button>
        <p className="text-xs text-center text-gray-700 mt-1">
          {isPlaying ? "Playing" : "Paused"}
        </p>
      </div>
    </>
  );
});

export default AudioPlayer;
