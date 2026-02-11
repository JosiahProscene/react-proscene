import React, { useState, useEffect } from "react";
import leftbottomSvg from "../assets/leftbottom.svg";
import digitalMediaJpg from "../assets/orlando-airport1-full.jpg";
import corporateMedia from "../assets/conference-1.jpg";
import retailMedia from "../assets/neptune-2.jpg";
import healthcareMedia from "../assets/tru_nph-lg.jpg";
import BookDemo from "../../pages/BookDemoPage";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function DigitalSignage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };
  const sendtoStudypage = () => {
    navigate("/case-studies-av");
  };

  const [activeFeature, setActiveFeature] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "Dynamic Content Management",
      description: "Update content instantly across all displays with our cloud-based CMS",
      icon: "📱"
    },
    {
      title: "Interactive Touchscreens",
      description: "Engage visitors with responsive touch interfaces and intuitive navigation",
      icon: "👆"
    },
    {
      title: "Real-time Integration",
      description: "Connect with social media, weather, news feeds, and building systems",
      icon: "🔄"
    },
    {
      title: "Analytics & Insights",
      description: "Track engagement metrics and optimize content performance",
      icon: "📊"
    }
  ];

  const solutions = [
    {
      category: "Corporate Environments",
      title: "Professional Communication Hub",
      description: "Keep employees informed and visitors engaged with sleek, professional displays that reflect your brand excellence.",
      applications: ["Lobby Displays", "Employee Communications", "Meeting Room Booking", "Company News & Updates"],
      image: corporateMedia
    },
    {
      category: "Retail & Hospitality",
      title: "Customer Experience Enhancement",
      description: "Drive sales and improve customer satisfaction with dynamic promotional content and interactive experiences.",
      applications: ["Product Promotions", "Menu Displays", "Queue Management", "Customer Feedback"],
      image: retailMedia
    },
    {
      category: "Healthcare & Education",
      title: "Information & Wayfinding",
      description: "Help patients, students, and visitors navigate complex facilities while providing important information and updates.",
      applications: ["Directory Systems", "Emergency Alerts", "Appointment Information", "Campus Navigation"],
      image: healthcareMedia
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#f24b00] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400 rounded-full opacity-15 animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
                Digital Signage & Wayfinding Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Captivate, Inform,
                <span className="block text-[#16213d]">
                  Navigate
                </span>
              </h1>
              <p className="text-xl text-orange-100 max-w-lg leading-relaxed">
                Transform any space into an interactive communication hub with stunning digital displays that inform, engage, and guide your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  See It In Action
                </button>
                <button  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#f24b00] transition-all duration-300">
                  Explore Solutions
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform hover:rotate-0 transition-transform duration-500">
                <img
                  src={digitalMediaJpg}
                  alt="Digital Signage Display"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f24b00] to-transparent opacity-30 rounded-3xl"></div>
              </div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-orange-400 to-[#f24b00] rounded-full opacity-20 animate-spin-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#f24b00] to-orange-400 rounded-full opacity-25"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Features Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-6">
              Powerful Features That
              <span className="text-[#f24b00]"> Deliver Results</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our digital signage solutions combine cutting-edge technology with intuitive design to create memorable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-[#f24b00] text-white shadow-xl transform scale-105"
                      : "bg-white text-gray-700 hover:shadow-lg"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-3xl p-3 rounded-xl ${
                      activeFeature === index ? "bg-white bg-opacity-20" : "bg-gray-100"
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className={`${activeFeature === index ? "text-orange-100" : "text-gray-600"}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#f24b00] to-[#e54600] rounded-3xl p-8 text-white">
                <img
                  src={digitalMediaJpg}
                  alt="Feature Showcase"
                  className="w-full h-auto rounded-2xl shadow-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-orange-100">
                    Experience the power of modern digital communication with our advanced signage solutions.
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f24b00] rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Showcase */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-6">
              Tailored Solutions for
              <span className="text-[#f24b00]"> Every Industry</span>
            </h2>
          </div>

          <div className="relative">
            {/* Solution Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                    currentSlide === index ? "scale-105 ring-4 ring-[#f24b00] ring-opacity-50" : "hover:scale-102"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#f24b00] text-white text-sm font-semibold rounded-full">
                      {solution.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#16213d] mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#16213d]">Key Applications:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#f24b00] rounded-full"></div>
                            <span className="text-sm text-gray-600">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-[#f24b00] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wayfinding Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-[#f24b00] text-white rounded-full text-sm font-semibold mb-4">
                  Smart Wayfinding
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
                  Never Let Visitors
                  <span className="text-[#f24b00]"> Get Lost Again</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transform complex navigation into intuitive journeys with our intelligent wayfinding solutions that adapt to your space and guide visitors seamlessly to their destinations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "🗺️", title: "Interactive Maps", desc: "Touch-enabled floor plans with real-time directions" },
                  { icon: "📍", title: "Location Services", desc: "GPS and beacon integration for precise positioning" },
                  { icon: "🔄", title: "Real-time Updates", desc: "Dynamic routing based on current conditions" },
                  { icon: "♿", title: "Accessibility", desc: "ADA-compliant routes and multilingual support" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-[#16213d] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-[#f24b00] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#e54600] transition-colors duration-300"
                >
                  Request Demo
                </button>
                <button onClick={sendtoStudypage} className="border-2 border-[#f24b00] text-[#f24b00] px-8 py-3 rounded-2xl font-semibold hover:bg-[#f24b00] hover:text-white transition-colors duration-300">
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={digitalMediaJpg}
                  alt="Wayfinding System"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f24b00] to-transparent opacity-20 rounded-3xl"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold">You are here</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-lg animate-float-delayed">
                <div className="text-sm">
                  <div className="font-semibold text-[#f24b00]">Conference Room A</div>
                  <div className="text-gray-600">2 min walk • Floor 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-12">
            Powered by Leading Technology
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { name: "4K Ultra HD", desc: "Crystal clear displays" },
              { name: "Cloud CMS", desc: "Remote content management" },
              { name: "Touch Interface", desc: "Intuitive interaction" },
              { name: "AI Analytics", desc: "Smart insights" }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl hover:bg-[#f24b00] hover:text-white transition-all duration-300 group">
                <div className="text-2xl font-bold mb-2 text-[#f24b00] group-hover:text-white">{tech.name}</div>
                <div className="text-gray-600 group-hover:text-orange-100">{tech.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#f24b00] to-[#e54600] text-white p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Communication?
            </h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have revolutionized their visitor experience with our digital signage solutions.
            </p>
            <button 
              onClick={handleButtonClick}
              className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>

      <BookDemo />
      {/* <Footer /> */}
    </div>
  );
}

export default DigitalSignage;