import React, { useEffect, useState } from "react";
import repairImage from "../components/assets/support.jpg";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import supportjpg from "../components/assets/support.jpg";
import training2Image from "../components/assets/Mintenance.jpg";
import SupportMaintain from "../components/SupportMaintain";

function EquipmentRepair() {
  const swipeTexts = [
    "We ensure your equipment is running at its best.",
    "Quick and reliable repair solutions for any issue.",
    "Maximize equipment longevity with professional repairs.",
  ];

  const [activeLink, setActiveLink] = useState("feature1");

  const content = {
    feature1: {
      title: "Comprehensive Equipment Diagnostics",
      description: "Our experts conduct thorough diagnostics to pinpoint any issues, ensuring a targeted and effective repair process.",
      image: supportjpg,
    },
    feature2: {
      title: "Fast Turnaround Times",
      description: "We understand the importance of downtime, so we prioritize quick repairs to minimize any disruptions to your operations.",
      image: supportjpg,
    },
    feature3: {
      title: "Skilled Technicians",
      description: "Our team consists of highly trained technicians capable of handling a wide range of equipment repairs, ensuring top-quality service.",
      image: training2Image,
    },
    feature4: {
      title: "Genuine Parts Replacement",
      description: "We use only genuine parts for repairs, ensuring your equipment operates as efficiently and safely as the day it was first used.",
      image: repairImage,
    },
    feature5: {
      title: "Preventative Maintenance Plans",
      description: "To avoid future issues, we offer preventative maintenance plans that keep your equipment in excellent condition.",
      image: repairImage,
    },
    feature6: {
      title: "Emergency Repair Services",
      description: "For urgent repairs, our emergency services are available to get your equipment back up and running without delay.",
      image: repairImage,
    },
  };

  const navigate  = useNavigate();
        
  const handleButtonClick = () => {
      navigate("/bookRepair");
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [swipeTexts.length]);

  const links = [
    { id: "feature1", label: "Diagnostics" },
    { id: "feature2", label: "Fast Repair" },
    { id: "feature3", label: "Skilled Technicians" },
    { id: "feature4", label: "Genuine Parts" },
    { id: "feature5", label: "Maintenance Plans" },
    { id: "feature6", label: "Emergency Repairs" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="pb-5 maxWidthContainer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="bg-[#f24b00] text-white p-6 sm:p-8 lg:p-10 Br flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl h1sizing">
                Equipment Repair Services
              </h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">
                {swipeTexts[currentIndex]}
              </p>
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
                  src={supportjpg}
                  alt="Equipment Repair"
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
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide pb-2 sm:pb-1 items-center px-4 sm:px-8 lg:px-32">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-3 sm:px-4 py-2 whitespace-nowrap text-sm sm:text-base ${
                  activeLink === link.id
                    ? "text-[#f24b00] border-b-2 border-[#f24b00] font-semibold"
                    : "text-[#16213d] hover:text-[#f24b00]"
                } transition-colors duration-200`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-col order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl cardheaders font-semibold mb-3 sm:mb-4 text-[#16213d]">
              {content[activeLink].title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg featuresp">
              {content[activeLink].description}
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={content[activeLink].image}
              alt={content[activeLink].title}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Experience Await Section */}
      <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#16213d] mb-6 sm:mb-8 leading-tight">
            Your Equipment <br className="hidden sm:block" />
            Repair Solution Awaits
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
      <div id="faqs" className="flex flex-col py-12 sm:py-16 justify-center items-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl onsitesubheads font-bold mb-6 sm:mb-8 text-center text-[#16213d]">
          Frequently Asked Questions
        </h3>
        <div className="w-full max-w-4xl">
          <FAQ />         
        </div>
      </div> 

      <SupportMaintain/>
      <Footer />
    </div>
  );
}

export default EquipmentRepair;