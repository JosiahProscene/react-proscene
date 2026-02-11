import { React } from "react";
import Footer from "../components/Footer";
import BookDemoToday from "../components/BookDemo";
import AboutEd from "../components/AboutEd";
import CoopNav from "../components/CoopNav";
import StrategyDesign from "../components/StrategyDesign";
import Stats from "../components/StatsSection";
import { useNavigate } from "react-router-dom";

// New component for educational features
const EducationFeatures = () => {
  return (
    <div className="bg-white py-4 sm:py-4 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16213d] mb-4">
            Advanced Educational Solutions
          </h2>
          <p className="text-lg sm:text-xl text-[#16213d] max-w-3xl mx-auto">
            Transforming learning environments with cutting-edge technology and seamless campus-wide integration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Smart Classrooms */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl  mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/SmartClass.jpg"
                alt="Smart classrooms"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              Smart Classrooms
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Interactive learning spaces equipped with advanced technology for engaging and collaborative educational experiences.
            </p>
          </div>

          {/* Lecture Capture & Presentation Systems */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl  mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/training-full.jpg" 
                alt="Lecture capture and presentation systems"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              Lecture Capture & Presentation Systems
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Professional recording and streaming solutions with intuitive presentation tools for hybrid and remote learning.
            </p>
          </div>

          {/* Campus-wide Signage */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/orlando-airport1-full.jpg" 
                alt="Campus-wide signage"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              Campus-wide Signage
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Integrated digital signage network for announcements, wayfinding, and real-time campus information.
            </p>
          </div>
        </div>

        {/* Additional Feature Highlights - Centered */}
        <div className="mt-16 sm:mt-20 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#16213d] mb-4">
                Comprehensive Educational Technology
              </h3>
              <p className="text-gray-600 text-lg">
                End-to-end solutions designed specifically for modern educational institutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Smart Learning Features - Centered */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/classroom.jpg" 
                    alt="Smart learning features"
                    className="w-64 h-48 object-cover rounded-xl"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#16213d] mb-4">
                  Smart Learning Features
                </h4>
                <ul className="space-y-3 text-gray-600 text-center">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Interactive whiteboards and displays
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Student response systems
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Wireless content sharing
                  </li>
                </ul>
              </div>

              {/* Campus Communication - Centered */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/classroom2.jpg" 
                    alt="Campus communication systems"
                    className="w-64 h-48 object-cover rounded-xl"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#16213d] mb-4">
                  Campus Communication Systems
                </h4>
                <ul className="space-y-3 text-gray-600 text-center">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Digital wayfinding and directories
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Emergency alert systems
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Event and schedule displays
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Education() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/bookDemo");
    }
    return (
        <div className="">
        <AboutEd/>
        <CoopNav/>
        <div className="flex flex-col items-center max-w-7xl py-12 sm:py-16 md:py-20 lg:py-28 bg-white mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-[#16213d] font-semibold tracking-wide sm:tracking-wider">We help you</h2>
            <h2 className="text-center text-[#16213d] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider sm:tracking-widest leading-tight">WORK WITHOUT BORDERS</h2>
        </div>
        
        {/* Added the new EducationFeatures component */}
        <EducationFeatures />
        
        <StrategyDesign/>
        <Stats/>
        <div className="bg-gradient-to-r from-[#e0f2f7] via-[#f0f9ff] to-[#e0f2f7] py-24 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#16213d] mb-8 leading-tight">
              Your New <br />
              Experience Awaits
            </h1>
            <button className="bg-[#f24b00] hover:bg-[#16213d] text-white font-bold py-4 px-8 rounded-full transition duration-300"
            onClick={handleButtonClick}>
              Speak With An Expert
            </button>
          </div>
        </div>
        <BookDemoToday/>
        <Footer/>
        </div>
    );
}

export default Education;