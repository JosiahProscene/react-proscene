import React, { useEffect, useState } from "react";
import uccImage from "../components/assets/nera-offices-london-2-1200x847.jpg";
import ucc1Image from "../components/assets/DSCF1456_1.jpg";
import ucc2Image from "../components/assets/DSCF1412_1.jpg";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import uccjpg from "../components/assets/nera-offices-london-2-1200x847.jpg";
import ucc1jpg from "../components/assets/DSCF1441_1.jpg";
import ucc2jpg from "../components/assets/Support1.jpg";
import SupportMaintain from "../components/SupportMaintain";

function UCC() {
  const swipeTexts = [
    "Transform your business with efficient Unified Communications solutions.",
    "Seamless communication for improved collaboration and productivity.",
    "Upgrade your team's communication experience with UCC services.",
  ];

  const [activeLink, setActiveLink] = useState("feature1");

  const content = {
    feature1: {
      title: "Unified Voice Solutions",
      description: "Enable seamless voice communication across multiple platforms with integrated solutions.",
      image: uccjpg,
    },
    feature2: {
      title: "Team Collaboration Tools",
      description: "Equip your teams with tools that enhance collaboration and productivity, no matter where they are.",
      image: uccjpg,
    },
    feature3: {
      title: "Video Conferencing",
      description: "Transform virtual meetings with high-quality video conferencing services, improving remote work connectivity.",
      image: ucc2Image,
    },
    feature4: {
      title: "Cloud Communication",
      description: "Harness the power of the cloud for flexible and scalable communication solutions across your organization.",
      image: uccImage,
    },
    feature5: {
      title: "Mobile Integration",
      description: "Enable seamless communication through mobile devices, allowing your team to stay connected anytime, anywhere.",
      image: ucc1Image,
    },
    feature6: {
      title: "24/7 Support",
      description: "Ensure uninterrupted communication with our round-the-clock support services for your UCC systems.",
      image: ucc2jpg,
    },
  };

  const navigate  = useNavigate();
        
  const handleButtonClick = () => {
      navigate("/bookDemo");
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [swipeTexts.length]);

  const links = [
    { id: "feature1", label: "Voice Solutions" },
    { id: "feature2", label: "Collaboration Tools" },
    { id: "feature3", label: "Video Conferencing" },
    { id: "feature4", label: "Cloud Communication" },
    { id: "feature5", label: "Mobile Integration" },
    { id: "feature6", label: "24/7 Support" },
  ];

  return (
    <div>
      <div className="pb-5 maxWidthContainer">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="bg-[#f24b00] text-white p-6 sm:p-8 lg:p-10 Br flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl h1sizing">
                Unified Communications Solutions
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
                  src={ucc1jpg}
                  alt="Unified Communications"
                  className="relative z-10 w-full h-auto Br shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Platforms Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213d] mb-3 sm:mb-4 px-4">
              Seamless Platform Integrations
            </h2>
            <p className="text-base sm:text-lg text-[#16213d] max-w-2xl mx-auto px-4">
              Connect your favorite collaboration tools with our unified communications solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: "Microsoft Teams", logo: "💼", desc: "Full integration with Teams meetings and collaboration" },
              { name: "Zoom", logo: "📹", desc: "Seamless Zoom room integration and interoperability" },
              { name: "Google Meet", logo: "🔍", desc: "Google Workspace integration for unified workflows" },
              { name: "Cisco Webex", logo: "🕸️", desc: "Enterprise-grade Webex integration solutions" },
            ].map((platform, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{platform.logo}</div>
                <h3 className="font-bold text-[#16213d] mb-2 text-sm sm:text-base">{platform.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* AV + IT Convergence Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213d] mb-4 sm:mb-6">
                AV + IT Convergence
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Unify your audiovisual and IT infrastructure for streamlined operations, reduced complexity, and enhanced user experiences.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Unified network infrastructure for AV and IT systems",
                  "Centralized management and monitoring",
                  "Enhanced security across all communication platforms",
                  "Scalable solutions that grow with your business",
                  "Reduced total cost of ownership"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#f24b00] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
              <img
                src={ucc1jpg}
                alt="AV IT Convergence"
                className="w-full h-auto rounded-xl shadow-lg"
              />
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#16213d] mb-6 sm:mb-8 leading-tight">
            Your Unified Communications <br className="hidden sm:block"/>Solution Awaits
          </h1>
          <button 
            className="bg-[#f24b00] hover:bg-[#16213d] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition duration-300 w-full sm:w-auto"
            onClick={handleButtonClick}
          >
            Speak With An Expert
          </button>
        </div>
      </div>

      <SupportMaintain/>
        
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

export default UCC;