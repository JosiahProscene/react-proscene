import React from "react";
import "../global.css";
import { useNavigate } from "react-router-dom";
import heroVideo from "./assets/hero-av2.mp4";

function DriveGrowth() {

  const navigate = useNavigate();

  const scrollDown = () => {
    const section = document.getElementById("next-section");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] lg:h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute w-full h-full object-cover brightness-110"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-end">

        <div className="pb-16 sm:pb-20 md:pb-24 lg:pb-28 
                        px-6 sm:px-10 md:px-16 lg:px-20 
                        max-w-6xl ml-8 text-white">

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => navigate("/bookDemo")}
              className="bg-[#f24b00] hover:bg-[#16213d] 
              text-white font-semibold 
              px-6 py-3
              sm:px-7 sm:py-3
              md:px-8 md:py-4
              rounded-xl transition transform hover:scale-105"
            >
              Speak With An Expert
            </button>

            <button
              onClick={() => navigate("/services")}
              className="backdrop-blur-md bg-white/10 
              border border-white/30 text-white
              px-6 py-3
              sm:px-7 sm:py-3
              md:px-8 md:py-4
              rounded-xl 
              hover:bg-white hover:text-black transition"
            >
              Explore Solutions
            </button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-20 right-6 md:right-10 lg:right-16 
        bg-white/10 backdrop-blur-md border border-white/20
        hover:bg-[#f24b00] transition
        w-12 h-12 rounded-full flex items-center justify-center
        animate-hoverUp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

    </section>
  );
}

export default DriveGrowth;