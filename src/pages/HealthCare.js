import { React } from "react";
import Footer from "../components/Footer";
import BookDemoToday from "../components/BookDemo";
import AboutHC from "../components/AboutHC";
import CoopNav from "../components/CoopNav";
import { useNavigate } from "react-router-dom";

// New component for healthcare features
const HealthcareFeatures = () => {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16213d] mb-4">
            Advanced Healthcare Solutions
          </h2>
          <p className="text-lg sm:text-xl text-[#16213d] max-w-3xl mx-auto">
            Transforming healthcare delivery with cutting-edge technology for better patient outcomes and operational excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Conference and Simulation Rooms */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/uncw-9.jpg"
                alt="Conference and simulation rooms"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              Conference & Simulation Rooms
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Advanced spaces for medical collaboration, training, and surgical simulation with state-of-the-art audiovisual technology.
            </p>
          </div>

          {/* Digital Signage for Patient Comms */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/tru_nph-lg.jpg" 
                alt="Digital signage for patient communications"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              Digital Patient Communication
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Interactive digital signage systems for patient education, wayfinding, and real-time health information dissemination.
            </p>
          </div>

          {/* Staff Training Centers */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl mb-6 h-48 w-48 flex items-center justify-center">
              <img 
                src="/unc-surgical.jpg"
                alt="Staff training centers"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#16213d] mb-4">
              Staff Training Centers
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Modern training facilities equipped with the latest technology for continuous medical education and skill development.
            </p>
          </div>
        </div>

        {/* Additional Feature Highlights - Centered */}
        <div className="mt-16 sm:mt-20 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#16213d] mb-4">
                Comprehensive Healthcare Technology
              </h3>
              <p className="text-gray-600 text-lg">
                End-to-end solutions designed specifically for modern healthcare facilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Medical Collaboration Features - Centered */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/icom-2.jpg"
                    alt="Medical collaboration features"
                    className="w-64 h-48 object-cover rounded-xl"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#16213d] mb-4">
                  Medical Collaboration & Training
                </h4>
                <ul className="space-y-3 text-gray-600 text-center">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Telemedicine conference capabilities
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Surgical simulation technology
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Multi-disciplinary team collaboration
                  </li>
                </ul>
              </div>

              {/* Healthcare Communication - Centered */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/medicaltablet.jpg"
                    alt="Healthcare communication systems"
                    className="w-64 h-48 object-cover rounded-xl"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#16213d] mb-4">
                  Healthcare Communication Systems
                </h4>
                <ul className="space-y-3 text-gray-600 text-center">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Patient education displays
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Emergency alert systems
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#f24b00] rounded-full mr-3"></span>
                    Real-time health information
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

function Healthcare() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/bookDemo");
    }
    return (
        <div className="">
        <AboutHC/>
        <CoopNav/>
        <div className="flex flex-col items-center max-w-7xl py-12 sm:py-16 md:py-20 lg:py-28 bg-white mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-[#16213d] font-semibold tracking-wide sm:tracking-wider">We help you</h2>
            <h2 className="text-center text-[#16213d] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider sm:tracking-widest leading-tight">WORK WITHOUT BORDERS</h2>
        </div>
        
        {/* Added the new HealthcareFeatures component */}
        <HealthcareFeatures />
        
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

export default Healthcare