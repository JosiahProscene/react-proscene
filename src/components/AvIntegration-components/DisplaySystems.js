import React, { useState, useEffect } from "react";
import leftbottomSvg from "../assets/leftbottom.svg";
import digitalMediaJpg from "../assets/itau-private-bank-offices-bogota-6-1200x800.jpg";
import videoWallsJpg from "../assets/bigscreen.jpg";
import formatDisplaysJpg from "../assets/LargeScreen.jpg";
import projectionSystemsJpg from "../assets/ProjectionScreen.jpg";
import BookDemo from "../../pages/BookDemoPage";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function DisplayAudio() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const [activeSystem, setActiveSystem] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(75);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const displaySystems = [
    {
      type: "Video Walls",
      description: "Seamless large-scale displays that create stunning visual impact for any environment.",
      specs: ["Ultra-narrow bezels", "4K resolution per panel", "24/7 operation rated", "Modular configuration"],
      applications: ["Control rooms", "Retail environments", "Corporate lobbies", "Event venues"],
      image: videoWallsJpg
    },
    {
      type: "Large Format Displays",
      description: "Professional-grade displays designed for high-impact presentations and digital signage.",
      specs: ["55\" to 98\" screen sizes", "4K/8K resolution", "Anti-glare coating", "Portrait/landscape mounting"],
      applications: ["Conference rooms", "Classrooms", "Reception areas", "Trade shows"],
      image: formatDisplaysJpg
    },
    {
      type: "Projection Systems",
      description: "High-brightness projectors delivering exceptional image quality for any venue size.",
      specs: ["Up to 30,000 lumens", "Laser light source", "360° installation", "Edge blending capable"],
      applications: ["Auditoriums", "Houses of worship", "Museums", "Outdoor events"],
      image: projectionSystemsJpg
    }
  ];

  const audioSolutions = [
    {
      category: "Microphone Systems",
      solutions: ["Wireless handheld", "Lavalier systems", "Boundary mics", "Array microphones"],
      icon: "🎤"
    },
    {
      category: "Speaker Arrays",
      solutions: ["Line array systems", "Point source speakers", "Subwoofer systems", "Ceiling speakers"],
      icon: "🔊"
    },
    {
      category: "Processing & Control",
      solutions: ["Digital mixers", "DSP systems", "Amplifiers", "Control interfaces"],
      icon: "🎛️"
    },
    {
      category: "Acoustic Treatment",
      solutions: ["Sound absorption", "Diffusion panels", "Bass traps", "Noise barriers"],
      icon: "🎵"
    }
  ];

  const testimonials = [
    {
      quote: "The conferencing equipment supplied was delivered on time and fully met the required specifications. The setup supported seamless virtual and in-room meetings with clear audio and video performance.",
      author: "Coulson Harney",
      title: "Bowmans LLP, IT Manager",
      rating: 5
    },
    {
      quote: "Proscene Systems demonstrated professionalism and reliability throughout the engagement. The equipment supplied was of high quality and performed reliably during our hybrid meetings and presentations.",
      author: "Fidel Omondi",
      title: "Procurement Officer, ICIPE",
      rating: 5
    },
    {
      quote: "The team provided dependable conferencing and presentation equipment that supported our events effectively. Their responsiveness and after-sales support were commendable.",
      author: "Avinesh Sewpal",
      title: "Senior IT Manager, Microsoft Africa",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#f24b00] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
          {/* Animated sound waves */}
          <div className="absolute top-1/4 left-1/4 w-2 h-16 bg-[#16213d] opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 left-1/3 w-2 h-24 bg-orange-400 opacity-40 animate-pulse delay-100"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-32 bg-orange-300 opacity-50 animate-pulse delay-200"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-20 bg-[#16213d] opacity-35 animate-pulse delay-300"></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-28 bg-orange-400 opacity-45 animate-pulse delay-400"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 bg-white text-[#f24b00] rounded-full text-sm font-bold">
                Display Systems & Audio Reinforcement
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Crystal Clear
                <span className="block bg-white bg-clip-text text-transparent">
                  Visuals & Sound
                </span>
              </h1>
              <p className="text-xl text-orange-100 max-w-lg leading-relaxed">
                Deliver breathtaking visual experiences and pristine audio quality that captivates audiences and ensures your message is seen and heard with perfect clarity.
              </p>
              
              {/* Interactive Volume Control */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl">🔊</span>
                  <span className="font-semibold">Audio Quality Preview</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm">🔇</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volumeLevel}
                    onChange={(e) => setVolumeLevel(e.target.value)}
                    className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm">🔊</span>
                  <span className="text-sm font-mono w-12">{volumeLevel}%</span>
                </div>
                <div className="mt-3 text-sm text-orange-100">
                  Experience professional-grade audio clarity
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleButtonClick}
                  className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Experience the Difference
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={digitalMediaJpg}
                  alt="Professional AV System"
                  className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f24b00] via-transparent to-transparent opacity-40 rounded-3xl"></div>
              </div>
              
              {/* Floating quality indicators */}
              <div className="absolute top-8 right-8 bg-[#16213d] text-white p-3 rounded-2xl shadow-lg animate-bounce">
                <div className="text-xs font-bold">4K ULTRA HD</div>
              </div>
              <div className="absolute bottom-8 left-8 bg-[#f24b00] text-white p-3 rounded-2xl shadow-lg animate-pulse">
                <div className="text-xs font-bold">DOLBY AUDIO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Selector */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-6">
              Professional Display
              <span className="text-[#f24b00]"> Technologies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intimate meeting rooms to grand auditoriums, we provide display solutions that deliver exceptional visual impact for every application.
            </p>
          </div>

          {/* System Type Tabs */}
          <div className="flex flex-col md:flex-row justify-center mb-12 bg-white rounded-3xl p-2 shadow-lg max-w-4xl mx-auto">
            {displaySystems.map((system, index) => (
              <button
                key={index}
                onClick={() => setActiveSystem(index)}
                className={`flex-1 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  activeSystem === index
                    ? "bg-gradient-to-r from-[#f24b00] to-[#e54600] text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-[#f24b00] hover:bg-gray-50"
                }`}
              >
                {system.type}
              </button>
            ))}
          </div>

          {/* Active System Details */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-[#16213d] mb-4">
                  {displaySystems[activeSystem].type}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {displaySystems[activeSystem].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-[#16213d] mb-4">Technical Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {displaySystems[activeSystem].specs.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-[#f24b00] rounded-full"></div>
                        <span className="text-gray-700 font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-[#16213d] mb-4">Ideal Applications</h4>
                  <div className="flex flex-wrap gap-3">
                    {displaySystems[activeSystem].applications.map((app, index) => (
                      <span key={index} className="px-4 py-2 bg-[#f24b00] text-white rounded-full text-sm font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleButtonClick}
                  className="bg-gradient-to-r from-[#f24b00] to-[#e54600] text-white px-8 py-3 rounded-2xl font-semibold hover:from-[#e54600] hover:to-[#cc3d00] transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </button>
              </div>

              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 flex items-center justify-center">
                <img
                  src={displaySystems[activeSystem].image}
                  alt={displaySystems[activeSystem].type}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute top-6 right-6 bg-white p-3 rounded-xl shadow-lg">
                  <div className="text-xs font-bold text-[#f24b00]">PROFESSIONAL GRADE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Solutions Grid */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#16213d] mb-6">
              Audio Reinforcement
              <span className="text-[#f24b00]"> Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deliver pristine audio quality with our comprehensive range of professional sound reinforcement solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audioSolutions.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-[#16213d]">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="w-2 h-2 bg-[#f24b00] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="py-20 px-4 bg-gradient-to-br from-[#f24b00] to-[#e54600] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Uncompromising Performance Standards
            </h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Our systems are engineered to exceed industry standards and deliver consistent, reliable performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "System Uptime", icon: "⚡" },
              { metric: "< 20ms", label: "Audio Latency", icon: "🎵" },
              { metric: "4K/8K", label: "Resolution Support", icon: "📺" },
              { metric: "24/7", label: "Operation Ready", icon: "🔄" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{item.metric}</div>
                <div className="text-orange-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-[#16213d] text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-[#f24b00] font-medium">
                    {testimonials[currentTestimonial].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "bg-[#f24b00] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-[#16213d] to-[#f24b00] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your
            <span className="text-orange-300"> AV Experience?</span>
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let our experts design and install a display and audio system that delivers exceptional performance and reliability for your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleButtonClick}
              className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule System Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#f24b00] transition-all duration-300">
              Download Catalog
            </button>
          </div>
        </div>
      </div>

      <BookDemo />
      {/* <Footer /> */}
    </div>
  );
}

export default DisplayAudio;