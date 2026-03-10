import React, { useState, useEffect } from "react";
import "../global.css";
import { useNavigate } from "react-router-dom";
import heroVideo from "./assets/hero-av.mp4";

function DriveGrowth() {

    const scrollDown = () => {
    const section = document.getElementById("next-section");

    if (section) {
        section.scrollIntoView({
        behavior: "smooth",
        });
    }
    };

  const navigate = useNavigate();

  const slides = [
    {
      title: "Transforming Spaces with Audio Visual Technology",
      subtitle:
        "We design, supply and integrate world-class AV and collaboration solutions for modern workplaces.",
    },
    {
      title: "Digitally Transforming How Teams Work",
      subtitle:
        "Seamless video conferencing, smart meeting rooms and collaboration systems.",
    },
    {
      title: "Smart AV Solutions for Modern Organizations",
      subtitle:
        "From boardrooms to command centers, we enable communication without limits.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] lg:h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute w-full h-full object-cover"
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

          {/* Title */}
          <h1
            key={index}
            className="font-bold leading-tight mb-4
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            animate-fadeIn"
          >
            {slides[index].title}
          </h1>

          {/* Subtitle */}
          <p
            key={"p" + index}
            className="text-gray-200 mb-8 max-w-xl
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            animate-fadeIn"
          >
            {slides[index].subtitle}
          </p>

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