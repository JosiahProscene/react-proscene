import React, { useState } from "react";
// import leftbottomSvg from "../assets/leftbottom.svg";
import digitalMediaJpg from "../assets/training-full.jpg";
import specializedSpace from "../assets/Classroom1.jpg";
import BookDemo from "../../pages/BookDemoPage";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function RoomBasedAV() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeTab, setActiveTab] = useState("conference");

  const roomTypes = {
    conference: {
      title: "Conference Rooms",
      subtitle: "Where Ideas Come to Life",
      description: "Transform your meeting spaces into collaborative powerhouses with integrated AV solutions that make every presentation seamless and every video call crystal clear.",
      features: [
        "4K Video Conferencing Systems",
        "Interactive Whiteboards & Displays",
        "Wireless Presentation Solutions",
        "One-Touch Room Control",
        "Acoustic Treatment & Design",
        "Camera Tracking Technology"
      ],
      benefits: [
        "Reduce meeting setup time by 80%",
        "Seamless integration with Teams, Zoom, WebEx",
        "Professional presentation quality",
        "Enhanced remote collaboration"
      ]
    },
    classroom: {
      title: "Classrooms",
      subtitle: "Inspiring the Next Generation",
      description: "Create engaging learning environments that captivate students and empower educators with cutting-edge technology that enhances the educational experience.",
      features: [
        "Interactive Smart Boards",
        "Document Cameras",
        "Lecture Capture Systems",
        "Student Response Systems",
        "Wireless Display Solutions",
        "Audio Enhancement Systems"
      ],
      benefits: [
        "Increase student engagement by 65%",
        "Support hybrid learning models",
        "Easy content sharing and recording",
        "Accessible learning for all students"
      ]
    },
    auditorium: {
      title: "Auditoriums",
      subtitle: "Grand Experiences, Flawless Delivery",
      description: "Create unforgettable experiences with large-scale AV installations that ensure every seat in the house enjoys perfect sight lines and crystal-clear audio.",
      features: [
        "Large-Scale Video Walls",
        "Professional Sound Reinforcement",
        "Theatrical Lighting Systems",
        "Live Event Production",
        "Broadcast Integration",
        "Audience Response Systems"
      ],
      benefits: [
        "Accommodate audiences of 50-5000+",
        "Broadcast-quality production",
        "Immersive audience experiences",
        "Flexible event configurations"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br mt-9 from-[#f24b00] to-[#e54600] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                Room-Based AV Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Every
                <span className="block text-[#16213d]">Meeting Space</span>
              </h1>
              <p className="text-xl text-orange-100 max-w-lg">
                From intimate conference rooms to grand auditoriums, we create AV experiences that inspire, engage, and deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-white text-[#f24b00] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={digitalMediaJpg}
                  alt="Modern Conference Room"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#16213d] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Types Navigation */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Specialized Solutions for Every Space
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each environment has unique requirements. Our tailored approach ensures optimal performance and user experience.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg max-w-2xl mx-auto">
            {Object.entries(roomTypes).map(([key, room]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? "bg-[#f24b00] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#f24b00]"
                }`}
              >
                {room.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#16213d] mb-2">
                      {roomTypes[activeTab].title}
                    </h3>
                    <p className="text-xl text-[#f24b00] font-semibold mb-4">
                      {roomTypes[activeTab].subtitle}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {roomTypes[activeTab].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#16213d] mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {roomTypes[activeTab].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#f24b00] rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#16213d] mb-4">Benefits</h4>
                    <div className="space-y-3">
                      {roomTypes[activeTab].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 flex items-center justify-center">
                <img
                  src={specializedSpace}
                  alt={roomTypes[activeTab].title}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#f24b00] rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#16213d] rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to ongoing support, we ensure every project exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We analyze your space, understand your needs, and identify the perfect AV solution.",
                icon: "🎯"
              },
              {
                step: "02",
                title: "Design",
                description: "Our experts create detailed plans and 3D visualizations of your future AV system.",
                icon: "📐"
              },
              {
                step: "03",
                title: "Installation",
                description: "Professional installation with minimal disruption to your daily operations.",
                icon: "🔧"
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and support to keep your system running perfectly.",
                icon: "🛡️"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f24b00] to-[#e54600] rounded-full flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#16213d] rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#16213d] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#f24b00] to-[#e54600] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Rooms Transformed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our room-based AV solutions can enhance your meetings, presentations, and collaborative experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleButtonClick}
              className="bg-[#f24b00] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#16213d] transition-colors duration-300"
            >
              Get Free Consultation
            </button>
            <button className="border-2 border-[#f24b00] text-[#f24b00] px-8 py-3 rounded-2xl font-semibold hover:bg-[#f24b00] hover:text-white transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <BookDemo />
    </div>
  );
}

export default RoomBasedAV;