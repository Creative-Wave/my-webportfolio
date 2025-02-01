"use client";
import { useState, useEffect } from "react";

const MusicPlayer = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showPermission, setShowPermission] = useState(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize audio context and setup audio element
    const audioElement = new Audio("music.mp3");
    audioElement.loop = true; // Ensure the audio plays continuously
    setAudio(audioElement);

    return () => {
      // Cleanup audio to avoid memory leaks
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, []);

  const handleMusicPermission = () => {
    if (audio) {
      audio.play().catch((err) => console.error("Audio playback error:", err));
      setIsPlaying(true);
    }
    setShowPermission(false);

    // Show the notification after granting permission
    setShowNotification(true);

    // Automatically hide the notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio
          .play()
          .catch((err) => console.error("Audio playback error:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Music Permission Prompt */}
      {showPermission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={() => setShowPermission(false)}>
              ✖
            </button>
            <h2 className="text-lg font-bold mb-2">Enable Background Music</h2>
            <p className="text-sm text-gray-500 mb-4">
              Click "Play" to enjoy music while browsing.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-[#4E00FF] text-white px-4 py-2 rounded-md hover:bg-[#3a00cc]"
                onClick={handleMusicPermission}>
                Play
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Music Notification */}
      {showNotification && (
        <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 animate-fadeIn">
          <div className="w-10 h-10 bg-[#4E00FF] rounded-full flex items-center justify-center text-white font-bold">
            🎵
          </div>
          <div>
            <h4 className="text-lg font-medium">Now Playing</h4>
            <p className="text-sm text-gray-500">
              Read my web portfolio with listining the music
            </p>
          </div>
          <button
            className="bg-[#4E00FF] text-white px-3 py-1 rounded-md hover:bg-[#3a00cc]"
            onClick={() => setShowNotification(false)}>
            Dismiss
          </button>
        </div>
      )}

      {/* Play/Pause Button */}
      <div className="fixed bottom-5 z-20 left-5">
        <button
          className="bg-[#4E00FF] text-white px-4 py-2 rounded-md hover:bg-[#3a00cc] shadow-lg "
          onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};

export default MusicPlayer;
