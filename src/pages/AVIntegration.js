import React, { useEffect, useState } from "react";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import digitalMediaJpg from "../components/assets/itau-private-bank-offices-bogota-6-1200x800.jpg";
import avSystemMedia from "../components/assets/Boardroom2.jpg";
import installationMedia from "../components/assets/unc-surgical04.jpg";
import customeMedia from "../components/assets/itau-private-bank-offices-bogota-6-1200x800.jpg";
import supportMedia from "../components/assets/Automationsolutions.jpg";
import smartHomeMedia from "../components/assets/parklane-hero.jpg";
import conferenceMedia from "../components/assets/unc-surgical04.jpg";
import BookDemoToday from "../components/BookDemo";
import FAQ from "./Faq";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SupportMaintain from "../components/SupportMaintain";
import Stats from "../components/StatsSection.js";

function AVIntegrations() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const swipeTexts = [
    "Transform your space with cutting-edge audio-visual solutions.",
    "Seamless integration for immersive experiences.",
    "Custom AV systems for businesses and homes.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [swipeTexts.length]);

  const [activeLink, setActiveLink] = useState("feature1");

  const links = [
    { id: "feature1", label: "AV System Design" },
    { id: "feature2", label: "Installation Services" },
    { id: "feature3", label: "Custom Solutions" },
    { id: "feature4", label: "Support & Maintenance" },
    { id: "feature5", label: "Smart Home Integration" },
    { id: "feature6", label: "Conference Room Solutions" },
  ];

  const content = {
    feature1: {
      title: "AV System Design",
      description:
        "We create tailored AV system designs to meet your specific needs, from residential to commercial applications.",
      image:
        avSystemMedia,
    },
    feature2: {
      title: "Installation Services",
      description:
        "Our expert team ensures seamless installation of AV systems for a hassle-free experience.",
      image:
        installationMedia,
    },
    feature3: {
      title: "Custom Solutions",
      description:
        "We offer custom AV solutions to enhance your experience, from integrated home theaters to corporate setups.",
      image:
        customeMedia,
    },
    feature4: {
      title: "Support & Maintenance",
      description:
        "Our ongoing support and maintenance ensure that your AV systems are always up and running smoothly.",
      image:
        supportMedia,
    },
    feature5: {
      title: "Smart Home Integration",
      description:
        "Integrate your AV systems with smart home technology for a fully connected and automated environment.",
      image:
        smartHomeMedia,
    },
    feature6: {
      title: "Conference Room Solutions",
      description:
        "We provide professional AV solutions for conference rooms, ensuring high-quality presentations and meetings.",
      image:
        conferenceMedia,
    },
  };

  return (
    <div>
      <div className="pb-5 maxWidthContainer">
        <div className="flex flex-col mt-20 md:flex-row items-center justify-center p-8 bg-white">
          <div
            className="bg-[#f24b00] py-16 text-white p-10 md:w-1/2 Br"
            style={{ height: "100%" }}
          >
            <h1 className="font-bold h1sizing">
              Enhance Your Space with Advanced AV Solutions
            </h1>
            <p className="text-lg mb-6">{swipeTexts[currentIndex]}</p>
            <div className="button-Center">
              <button
                className="border bg-[#f24b00] border-white text-white py-2 px-6 rounded-2xl hover:bg-[#e54600]"
                onClick={handleButtonClick}
              >
                Book a Demo
              </button>
            </div>
          </div>

          <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img
              src={digitalMediaJpg}
              alt="AV Integration"
              className="ml-10 shadow-lg"
              style={{ borderRadius: "2em" }}
            />
            <img
              src={leftbottomSvg}
              alt="decoration"
              className="absolute -bottom-2 left-4 w-40"
              style={{ zIndex: "999" }}
            />
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#16213d] rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="p-4">
        <h2 className="text-center onsitesubheads font-bold mb-4">Our Services</h2>
        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-1 items-center px-4 md:px-32">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-4 py-2 whitespace-nowrap ${
                  activeLink === link.id
                    ? "text-[#f24b00] border-b-2 border-[#f24b00]"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div
            className="absolute bottom-0 left-0 h-[2px] transition-transform"
            style={{
              transform: `translateX(${
                links.findIndex((link) => link.id === activeLink) * 100
              }%)`,
            }}
          />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-32"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <div className="m-4 flex justify-center flex-col">
            <h3 className="cardheaders font-semibold mb-2">
              {content[activeLink].title}
            </h3>
            <p className="featuresp">{content[activeLink].description}</p>
          </div>
          <div className="m-4">
            <img
              src={content[activeLink].image}
              alt={content[activeLink].title}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Room-Based AV Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="onsitesubheads font-bold mb-4">Room-Based AV Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Seamless Integration for Every Space - Transform your conference rooms, classrooms, and auditoriums with state-of-the-art AV solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Conference Rooms */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="cardheaders font-semibold mb-3">Conference Rooms</h3>
              <p className="featuresp text-gray-600 mb-4">
                Foster collaboration and clear communication with integrated audio and video conferencing systems, interactive whiteboards, and one-touch room control. Compatible with all major unified communications platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  Video conferencing integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  Interactive whiteboards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  One-touch room control
                </li>
              </ul>
            </div>

            {/* Classrooms */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="cardheaders font-semibold mb-3">Classrooms</h3>
              <p className="featuresp text-gray-600 mb-4">
                Enhance the learning experience with interactive displays, clear audio systems for instructors, and lecture capture technologies that allow students to review materials anytime.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  Interactive displays
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  Clear audio systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  Lecture capture technology
                </li>
              </ul>
            </div>

            {/* Auditoriums */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="cardheaders font-semibold mb-3">Auditoriums</h3>
              <p className="featuresp text-gray-600 mb-4">
                Captivate your audience with large-scale projection or video walls, professional-grade sound reinforcement, and theatrical lighting systems. Every seat gets a great audiovisual experience.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  Large-scale projection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  Professional sound reinforcement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-2"></span>
                  Theatrical lighting systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Signage and Wayfinding Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="onsitesubheads font-bold mb-6">Digital Signage & Wayfinding</h2>
              <p className="text-lg text-gray-600 mb-8">
                Engage and Inform Your Audience - Transform your space and communicate more effectively with dynamic digital signage and wayfinding solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="cardheaders font-semibold mb-2">Digital Signage</h3>
                    <p className="featuresp text-gray-600">
                      Share important announcements, promotional materials, and real-time information with eye-catching displays. We offer a range of screen sizes and formats, along with content management systems that make it easy to keep your information up-to-date.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="cardheaders font-semibold mb-2">Wayfinding</h3>
                    <p className="featuresp text-gray-600">
                      Help visitors and employees navigate your facility with ease using interactive maps and directories. Our wayfinding solutions can be integrated with your existing building management systems to provide real-time updates and directions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-[#f24b00] text-white py-3 px-6 rounded-2xl hover:bg-[#e54600] transition-colors duration-300">
                  Learn More About Digital Solutions
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <img
                  src={digitalMediaJpg}
                  alt="Digital Signage Solutions"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f24b00] rounded-lg opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#e54600] rounded-lg opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Display Systems and Audio Reinforcement Section */}
      <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="onsitesubheads font-bold mb-4">Display Systems & Audio Reinforcement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Crystal Clear Visuals and Sound - The quality of your display and audio systems can make or break a presentation or performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Display Systems */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="cardheaders font-semibold">Display Systems</h3>
              </div>
              
              <p className="featuresp text-gray-600 mb-6">
                We offer a wide variety of display technologies, including video walls, large-format displays, and projection systems, to create the visual impact you desire. Our team will help you select the right technology for your space and lighting conditions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Video Walls</span>
                  <div className="w-8 h-8 bg-[#f24b00] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Large-Format Displays</span>
                  <div className="w-8 h-8 bg-[#f24b00] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Projection Systems</span>
                  <div className="w-8 h-8 bg-[#f24b00] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Reinforcement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <h3 className="cardheaders font-semibold">Audio Reinforcement</h3>
              </div>
              
              <p className="featuresp text-gray-600 mb-6">
                From small meeting rooms to large auditoriums, we design and install audio systems that provide even coverage and intelligible sound. Our solutions include everything from microphones and speakers to mixing consoles and digital signal processors.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Professional Microphones</span>
                  <div className="w-8 h-8 bg-[#f24b00] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Speaker Systems</span>
                  <div className="w-8 h-8 bg-[#f24b00] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Digital Signal Processing</span>
                  <div className="w-8 h-8 bg-[#f24b00] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              className="bg-[#f24b00] text-white py-3 px-8 rounded-2xl hover:bg-[#e54600] transition-colors duration-300 mr-4"
              onClick={handleButtonClick}
            >
              Get a Quote
            </button>
            {/* <button className="border-2 border-[#f24b00] text-[#f24b00] py-3 px-8 rounded-2xl hover:bg-[#f24b00] hover:text-white transition-colors duration-300">
              View Portfolio
            </button> */}
          </div>
        </div>
      </div>

      <SupportMaintain />
      <Stats />
      <div
        id="faqs"
        className="flex flex-col mt-9 pt-6 justify-center items-center pb-5"
      >
        <h3 className="onsitesubheads">Frequently Asked Questions</h3>
        <FAQ />
      </div>
      <BookDemoToday />
      <Footer />
    </div>
  );
}

export default AVIntegrations;