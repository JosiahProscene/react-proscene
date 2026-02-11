import React, { useEffect, useState } from "react";
import trainingImage from "../components/assets/hero.jpg";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import supportjpg from "../components/assets/support.jpg";
import SupportMaintain from "../components/SupportMaintain";

function TrainingAndSupport() {
  const swipeTexts = [
    "Empower your team with expert-led training.",
    "Round-the-clock support to keep your projects on track.",
    "Customized solutions for seamless operations."
  ];

  const [activeLink, setActiveLink] = useState("feature1");

  const content = {
    feature1: {
      title: "On-Site Technical Assistance",
      description: "Our experts are available on-site to provide hands-on technical support and ensure smooth operations.",
      image: supportjpg,
    },
    feature2: {
      title: "Setup and Configuration",
      description: "Customized setup and configuration of your systems to meet your unique requirements.",
      image: supportjpg,
    },
    feature3: {
      title: "Live 24/7 Support",
      description: "Get real-time assistance with our 24/7 support team, ready to troubleshoot and resolve issues promptly.",
      image: "/support.jpg",
    },
    feature4: {
      title: "Routine System Maintenance",
      description: "Regular maintenance and health checks to keep your systems running efficiently.",
      image: trainingImage,
    },
    feature5: {
      title: "Comprehensive Staff Training",
      description: "Customized training programs to equip your staff with the knowledge and skills they need to excel.",
      image: "/training.avif",
    },
    feature6: {
      title: "Backup and Recovery Support",
      description: "Reliable backup and recovery solutions to ensure minimal downtime and data security.",
      image: trainingImage,
    },
  };

  const navigate  = useNavigate();
        
  const handleButtonClick = () => {
      navigate("/bookDemo");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [swipeTexts.length]);

  const links = [
    { id: "feature1", label: "On-Site Tech" },
    { id: "feature2", label: "Setup & Config" },
    { id: "feature3", label: "Live Support" },
    { id: "feature4", label: "Routine Checks" },
    { id: "feature5", label: "Staff Training" },
    { id: "feature6", label: "Backup Ready" },
  ];

  return (
    <div>
      <div className="pb-5 maxWidthContainer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="bg-[#f24b00] text-white p-6 sm:p-8 lg:p-10 Br flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl h1sizing">
                Training and Support Made Easy
              </h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">{swipeTexts[currentIndex]}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-white text-[#16213d] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:bg-[#16213d] hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Contact us
                </button>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center p-4 sm:p-0">
              <div className="relative w-full">
                <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[#b062ff] to-[#00d2fb] rounded-full opacity-25 animate-bounce"></div>
                <img
                  src={`${process.env.PUBLIC_URL}/training.avif`}
                  alt="Training and Support"
                  className="relative z-10 w-full h-auto Br shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl onsitesubheads font-bold mb-6 sm:mb-8 text-[#16213d]">
          Key Features
        </h2>
        
        {/* Links Row */}
        <div className="relative overflow-hidden max-w-7xl mx-auto mb-6 sm:mb-8">
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide pb-2 sm:pb-1 items-center px-4 sm:px-8 lg:px-16">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm lg:text-base whitespace-nowrap flex-shrink-0 ${
                  activeLink === link.id 
                    ? "text-[#f24b00] border-b-2 border-[#f24b00]" 
                    : "text-[#16213d]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-col space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl cardheaders font-semibold text-[#16213d]">
              {content[activeLink].title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg featuresp text-gray-600">
              {content[activeLink].description}
            </p>
          </div>
          <div>
            <img
              src={content[activeLink].image}
              alt={content[activeLink].title}
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <SupportMaintain/>     

      {/* Experience Awaits Section */}
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#16213d] mb-6 sm:mb-8 leading-tight">
            Your New <br />
            Experience Awaits
          </h1>
          <button 
            className="bg-[#f24b00] hover:bg-[#16213d] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition duration-300 w-full sm:w-auto"
            onClick={handleButtonClick}
          >
            Speak With An Expert
          </button>
        </div>
      </div>
      
      <div id="faqs" className="flex flex-col mt-6 sm:mt-9 pt-4 sm:pt-6 justify-center items-center pb-5 px-4">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl onsitesubheads font-bold mb-4 sm:mb-6 text-center text-[#16213d]">
          Frequently Asked Questions
        </h3>
        <FAQ />         
      </div>   
      
      <Footer />
    </div>
  );
}

export default TrainingAndSupport;