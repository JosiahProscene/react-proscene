import React, { useEffect, useState } from "react";
import videoConfImage from "../components/assets/EntranceSignage.jpg";
// import leftbottomSvg from "../components/assets/leftbottom.svg";
import leasingImage from "../components/assets/hero.jpg";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import supportjpg from "../components/assets/support.jpg";
import SupportMaintain from "../components/SupportMaintain";

function VideoConferenceRental() {
      const swipeTexts = [
      "Professional video conferencing systems for meetings, events, and hybrid collaboration.",
      "Deploy enterprise-grade conferencing solutions without capital investment.",
      "Reliable, fully supported conferencing technology delivered and configured for you.",
    ];

  const [activeLink, setActiveLink] = useState("feature1");

    const content = {
      feature1: {
        title: "Enterprise Video Conferencing Equipment",
        description: "Access professional conferencing hardware including cameras, microphones, speakers, displays, and control systems designed for clear communication, reliable connectivity, and seamless collaboration across any environment.",
        image: `${process.env.PUBLIC_URL}/Equipment.webp`,
      },

      feature2: {
        title: "Professional Setup & Configuration",
        description: "Our engineers handle installation, calibration, and platform integration to ensure your conferencing system performs flawlessly. We optimize audio, video, and network settings for your specific room, audience, and meeting platform.",
        image: supportjpg,
      },

      feature3: {
        title: "Flexible Rental Packages",
        description: "Choose daily, weekly, or project-based rental plans tailored to your operational needs. Our flexible packages allow you to scale technology for events, training sessions, executive meetings, or temporary deployments.",
        image: `${process.env.PUBLIC_URL}/boardroom.jpg`,
      },

      feature4: {
        title: "Technical Support & System Assurance",
        description: "We provide ongoing monitoring, technical support, and performance checks to guarantee reliable operation throughout your rental period, ensuring uninterrupted meetings and presentations.",
        image: supportjpg,
      },

      feature5: {
        title: "User Training & Onboarding",
        description: "We equip your team with practical training so they can confidently operate conferencing systems, manage meetings, and troubleshoot basic issues—ensuring maximum productivity and smooth collaboration.",
        image: `${process.env.PUBLIC_URL}/training.avif`,
      },

      feature6: {
        title: "Redundancy & Backup Solutions",
        description: "To eliminate risk during critical sessions, we provide backup equipment and contingency support, ensuring your meetings continue without disruption even in unexpected situations.",
        image: leasingImage,
      },
    };

  const navigate = useNavigate();

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
    { id: "feature1", label: "Professional Systems" },
    { id: "feature2", label: "Design & Setup" },
    { id: "feature3", label: "Rental Options" },
    { id: "feature4", label: "Technical Support" },
    { id: "feature5", label: "Training Services" },
    { id: "feature6", label: "Backup Solutions" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="pb-5 maxWidthContainer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16 md:py-20 mt-16 sm:mt-20 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Text Content */}
            <div className="bg-[#f24b00] text-white p-6 sm:p-8 md:p-10 Br flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Professional Video Conferencing
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                {swipeTexts[currentIndex]}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-white text-[#16213d] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:bg-[#16213d] hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Contact us
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
              <div className="relative w-full">
                <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#b062ff] to-[#00d2fb] rounded-full opacity-25 animate-bounce"></div>
                <img
                  src={videoConfImage}
                  alt="Video Conference Rental"
                  className="relative z-10 w-full h-auto Br shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portable Kits & Operator Support Section */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213d] mb-3 sm:mb-4 px-4">
              Enhanced Rental Solutions
            </h2>
            <p className="text-base sm:text-lg text-[#16213d] max-w-2xl mx-auto px-4">
              Complete solutions for your video conferencing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Portable Kits */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#f24b00] to-[#ff6a33] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">📦</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#16213d] mb-3 sm:mb-4">
                Portable Kits
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Take your video conferencing anywhere with our compact, all-in-one portable kits designed for professionals on the move.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Lightweight and easy to transport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Complete setup in under 30 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Professional-grade camera and microphone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Compatible with all major platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Protective carrying case included</span>
                </li>
              </ul>
            </div>

            {/* Operator Support */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#f24b00] to-[#ff6a33] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#16213d] mb-3 sm:mb-4">
                Operator Support Available
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Professional operators available to manage your video conferences, ensuring smooth execution from start to finish.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Experienced technical operators on-site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Pre-event equipment testing and setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Real-time troubleshooting during events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Multi-location conference management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f24b00] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span>Post-event support and breakdown</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="p-4 sm:p-6 md:p-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4 text-[#16213d]">
          Key Features
        </h2>
        
        {/* Links Row */}
        <div className="relative overflow-hidden max-w-7xl mx-auto mb-6 sm:mb-8">
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide pb-2 items-center px-2 sm:px-4 md:px-8 lg:px-32">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-3 sm:px-4 py-2 whitespace-nowrap text-sm sm:text-base transition-colors ${
                  activeLink === link.id
                    ? "text-[#f24b00] border-b-2 border-[#f24b00] font-semibold"
                    : "text-[#16213d] hover:text-[#f24b00]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-center flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#16213d]">
              {content[activeLink].title}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16213d] mb-6 sm:mb-8 leading-tight">
            Your New Virtual <br />
            Experience Awaits
          </h1>
          <button 
            className="bg-[#f24b00] hover:bg-[#16213d] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base"
            onClick={handleButtonClick}
          >
            Speak With An Expert
          </button>
        </div>
      </div>  
      
      {/* FAQ Section */}
      <div id="faqs" className="flex flex-col mt-6 sm:mt-9 pt-4 sm:pt-6 justify-center items-center pb-5 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 text-[#16213d]">
          Frequently Asked Questions
        </h3>
        <FAQ />         
      </div>   

      <Footer />
    </div>
  );
}

export default VideoConferenceRental;