import React from "react";
import { useNavigate } from "react-router-dom";
import prosceneVideo from './assets/proscene.mp4';

const VideoBackground = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full h-[95vh] min-h-[600px] max-h-[900px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={prosceneVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl ml-8 md:ml-12 lg:ml-20 px-4">

          <div className="text-left mb-8 mt-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight max-w-xl">
              TRANSFORMING SPACES WITH INNOVATIVE SOLUTIONS
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-xl">
              Fits your business each day, everyday. Drives your growth tomorrow.
            </p>
          </div>

          <button
            className="bg-[#f24b00] text-white py-3 px-8 rounded-2xl text-lg font-bold hover:bg-[#16213d] transition-colors duration-300"
            onClick={handleButtonClick}
          >
            Book a Demo Today
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 right-12 z-10">
        <button
            onClick={handleScrollDown}
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#f24b00] to-[#ff6b35] shadow-lg hover:from-[#ff6b35] hover:to-[#f24b00] transition-all duration-300 animate-pulse hover:animate-none"
            aria-label="Scroll down to explore more"
            >
            <svg 
                className="w-7 h-7 text-white group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;