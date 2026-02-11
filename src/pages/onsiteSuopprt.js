import React, { useEffect, useState } from "react";
import "./Onsitesupport.css";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import supportjpg from "../components/assets/support.jpg";
import trainingImage from "../components/assets/hero.jpg";
import training1Image from "../components/assets/115-Maintenace-Inspection-Types.png";
import training2Image from "../components/assets/Mintenance.jpg";
import training3Image from "../components/assets/service-technician-social.png";
import { motion } from "framer-motion";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import BookDemoToday from '../components/BookDemo';
import { useNavigate } from 'react-router-dom';

function OnSiteSupport() {
  const navigate  = useNavigate();
  const handleButtonClick = () => {
      navigate("/bookDemo");
  }
  
  const swipeTexts = [
    "Amplify operational efficiency, discover new opportunities, and stay agile in the rapidly changing market.",
    "Streamline your processes and innovate faster to achieve measurable success.",
    "Empower your business with cutting-edge solutions tailored to your needs.",
  ];
  
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [swipeTexts.length]);

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const [activeLink, setActiveLink] = useState("feature1");

  const links = [
    { id: "feature1", label: "On-Site Tech" },
    { id: "feature2", label: "Setup & Config" },
    { id: "feature3", label: "Live Support" },
    { id: "feature4", label: "Routine Checks" },
    { id: "feature5", label: "Staff Training" },
    { id: "feature6", label: "Backup Ready" },
  ];

  const content = {
    feature1: {
      title: "Dedicated On-Site Technician",
      description: "ProScene assigns a skilled technician to your venue or event to manage audio-visual equipment. For the corporate sector, this ensures glitch-free board meetings, while for the entertainment industry, it guarantees flawless live performances.",
      image: supportjpg,
    },
    feature2: {
      title: "Equipment Setup and Configuration",
      description: "ProScene customizes the setup of your AV equipment to suit your specific needs. Whether it's a university lecture hall or a music festival, our team ensures every detail is perfect for the occasion.",
      image: training3Image,
    },
    feature3: {
      title: "Real-Time Troubleshooting",
      description: "ProScene provides immediate issue resolution during events. From ensuring smooth virtual conferences for businesses to handling tech hitches at large-scale exhibitions, we've got you covered.",
      image: training2Image,
    },
    feature4: {
      title: "Regular Maintenance and Testing",
      description: "ProScene performs routine system inspections to prevent disruptions. Ideal for healthcare facilities requiring reliable telemedicine setups or theaters needing consistent audio clarity..",
      image: training1Image,
    },
    feature5: {
      title: "Customized Training for Staff",
      description: "ProScene offers tailored training to empower your team. From hotel staff mastering AV setups for conferences to retail employees managing digital displays, we simplify the process.",
      image: "/training.avif",
    },
    feature6: {
      title: "Backup Equipment Availability",
      description: "ProScene provides on-site backup equipment to ensure uninterrupted service. This is critical for the education sector during hybrid learning sessions or for the events industry where reliability is paramount.",
      image: trainingImage,
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="pb-5 maxWidthContainer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="bg-[#f24b00] text-white p-6 sm:p-8 lg:p-10 Br flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl h1sizing">
                Support made easy.
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
                  src={`${process.env.PUBLIC_URL}/support.jpg`}
                  alt="On-Site Support"
                  className="relative z-10 w-full h-auto Br shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Button Row */}
        <div className="flex justify-center items-center bg-white py-4 px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl">
            {[
              { text: "Competitive edge", id: "competitive-edge" },
              { text: "Key features", id: "key-features" },
              { text: "FAQs", id: "faqs" },
            ].map((button, index) => (
              <button
                key={index}
                onClick={() => handleScroll(button.id)}
                className="bg-[#e3eeff] text-[#f24b00] font-semibold px-4 sm:px-6 py-2 text-sm sm:text-base transition-colors duration-300 hover:bg-[#f24b00] hover:text-white"
                style={{ borderRadius: "3em" }}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>

        {/* Competitive Edge Section */}
        <div
          id="competitive-edge"
          className="py-12 sm:py-16 flex justify-center items-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Text Column */}
              <div className="w-full order-2 lg:order-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213d] mb-4 sm:mb-6">
                  Support That Powers Your Vision
                </h1>
                <p className="text-base sm:text-lg text-[#16213d]">
                  At ProScene, we understand that exceptional support is the
                  foundation of success in the audio-visual industry. Our
                  dedicated team is here to ensure your systems perform
                  flawlessly, offering timely troubleshooting, regular
                  maintenance, and expert guidance. Whether it's resolving a
                  technical glitch or providing on-site assistance, our commitment
                  is to keep your projects running smoothly. Reliable support
                  means your business can focus on delivering unforgettable
                  experiences while we handle the details. Together, we make your
                  vision a reality.
                </p>
              </div>

              {/* Decorative Design Column */}
              <div className="w-full relative min-h-[300px] sm:min-h-[334px] order-1 lg:order-2">
                <div className="relative w-full h-full flex justify-center lg:justify-end">
                  <div
                    className="absolute hidden sm:block"
                    style={{
                      backgroundColor: "#ecdeff",
                      border: "1px solid #f24b00",
                      borderRadius: "46px",
                      height: "334px",
                      width: "170px",
                      right: "0",
                      top: "0",
                    }}
                  ></div>

                  <div
                    className="absolute hidden sm:block"
                    style={{
                      backgroundColor: "#f24b00",
                      border: "1px solid #ecdeff",
                      borderRadius: "46px",
                      height: "334px",
                      width: "170px",
                      right: "180px",
                      top: "0",
                    }}
                  ></div>

                  <div
                    className="relative sm:absolute"
                    style={{
                      height: "259px",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundImage: `url('https://eaog2nkqckp.exactdn.com/wp-content/uploads/2024/06/2.-Featured-blog-_-closing-deals.webp?strip=all&lossy=1&ssl=1')`,
                      borderRadius: "46px",
                      width: "100%",
                      maxWidth: "422px",
                      left: "0",
                      top: "45px",
                      zIndex: 20,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Demo CTA */}
        <div
          id="key-features"
          className="py-8 sm:py-12 flex justify-center items-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl w-full mx-auto py-8 sm:py-12 lg:py-14 bg-[#e3eeff] border border-[#f24b00] rounded-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#16213d] mb-6 sm:mb-8">
              See how Proscene works for you
            </h1>
            <button 
              onClick={handleButtonClick}
              className="mx-auto block px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] bg-[#f24b00] text-white hover:bg-[#16213d] transition-all duration-300"
            >
              Book a demo today
            </button>
          </div>
        </div>

        {/* Competitive Edge Cards */}
        <div
          id="case-studies"
          className="bg-[#f3f6ff] flex justify-center items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-7xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl onsitesubheads mb-8 sm:mb-12 text-center font-bold text-[#16213d]">
              Proscene gives you a true <br className="hidden sm:block"/>competitive edge
            </h1>

            <div className="w-full pb-6 sm:pb-9">
              {/* Row 1 */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                initial="hidden"
                whileInView="visible"
                transition={{
                  staggerChildren: 0.3,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  className="bg-white shadow-xl rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl iconsize text-[#16213d]">🎯</span>
                  </div>
                  <h3 className="text-base sm:text-lg cardheaders font-bold text-center mb-2 text-[#16213d]">Tailored Solutions</h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    On-site support allows technicians to address technical
                    issues in real-time, minimizing downtime and disruptions
                    during critical events or daily operations.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white shadow-xl rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl iconsize text-[#16213d]">🚀</span>
                  </div>
                  <h3 className="text-base sm:text-lg cardheaders font-bold text-center mb-2 text-[#16213d]">
                    Improved User Confidence
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    Having professionals on-site reassures staff and event
                    organizers, providing confidence that any technical
                    challenges will be swiftly resolved.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white shadow-xl rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl iconsize text-[#16213d]">⚡</span>
                  </div>
                  <h3 className="text-base sm:text-lg cardheaders font-bold text-center mb-2 text-[#16213d]">
                    Enhanced Communication
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    Face-to-face interactions improve clarity and allow your
                    technicians to gather immediate feedback, which can lead to
                    more effective troubleshooting and service customization.
                  </p>
                </motion.div>
              </motion.div>

              {/* Row 2 */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-12"
                initial="hidden"
                whileInView="visible"
                transition={{
                  staggerChildren: 0.3,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  className="bg-white shadow-xl rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl iconsize text-[#16213d]">💵</span>
                  </div>
                  <h3 className="text-base sm:text-lg cardheaders font-bold text-center mb-2 text-[#16213d]">Cost Efficiency</h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    While on-site support may seem like an added expense, it can
                    save businesses money in the long run by preventing costly
                    delays, errors, or the need to replace improperly used
                    equipment.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white shadow-xl rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl iconsize text-[#16213d]">⌛</span>
                  </div>
                  <h3 className="text-base sm:text-lg cardheaders font-bold text-center mb-2 text-[#16213d]">
                    Immediate Problem Resolution
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    On-site support allows technicians to address technical
                    issues in real-time, minimizing downtime and disruptions
                    during critical events or daily operations.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white shadow-xl rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl iconsize text-[#16213d]">👌</span>
                  </div>
                  <h3 className="text-base sm:text-lg cardheaders font-bold text-center mb-2 text-[#16213d]">
                    Enhanced Reliability
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    On-site support ensures that businesses can rely on expert
                    assistance during high-stakes events like conferences,
                    presentations, or product launches, where flawless AV
                    performance is critical.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Training & Support Services Section */}
        <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213d] mb-3 sm:mb-4 px-4">
                Comprehensive Training & Support
              </h2>
              <p className="text-base sm:text-lg text-[#16213d] max-w-2xl mx-auto px-4">
                Empower your team with the knowledge and skills they need to succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Onboarding Staff */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f24b00] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">👥</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#16213d] mb-3 sm:mb-4">
                  Onboarding Staff
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  Seamless integration of new team members with comprehensive onboarding programs tailored to your organization's needs.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Customized orientation sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Hands-on equipment training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Role-specific skill development</span>
                  </li>
                </ul>
              </div>

              {/* Ongoing User Training */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f24b00] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🎓</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#16213d] mb-3 sm:mb-4">
                  Ongoing User Training
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  Continuous learning opportunities to keep your team up-to-date with the latest technologies and best practices.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Regular workshops and webinars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Advanced feature training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Performance optimization tips</span>
                  </li>
                </ul>
              </div>

              {/* Documentation */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f24b00] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">📚</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#16213d] mb-3 sm:mb-4">
                  Documentation
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  Comprehensive resources and guides to support your team's independent learning and problem-solving.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Detailed user manuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Quick reference guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f24b00] mr-2 flex-shrink-0">•</span>
                    <span>Video tutorials and demos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="max-w-7xl mx-auto bg-[#f3f6ff] border border-[#f24b00] rounded-xl p-4 sm:p-6 lg:p-8 mx-4 my-12 sm:my-16 lg:my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Text Column */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <p className="text-sm sm:text-base lg:text-lg text-[#16213d] mb-4 sm:mb-6">
                Schedule a no-obligation call with one of our experts to get
                expert advice on how Proscene can help streamline your
                operations.
              </p>
              <div>
                <button 
                  onClick={handleButtonClick} 
                  className="bg-[#f24b00] text-white px-6 sm:px-8 py-3 rounded-[15px] hover:bg-[#16213d] transition-colors w-full sm:w-auto"
                >
                  Contact us
                </button>
              </div>
            </div>
            {/* Image Column */}
            <div className="w-full h-48 sm:h-64 md:h-auto order-1 md:order-2">
              <img
                src="/support.jpg"
                alt="Expert consultation"
                className="w-full h-full object-cover rounded-md"
              />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-8">
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

        {/* FAQ Section */}
        <div id="faqs" className="flex flex-col py-12 sm:py-16 justify-center items-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl onsitesubheads font-bold mb-6 sm:mb-8 text-center text-[#16213d]">
            Frequently Asked Questions
          </h3>
          <div className="w-full max-w-4xl">
            <FAQ />         
          </div>
        </div>        
      </div>
      <BookDemoToday/>
      <Footer/>    
    </div>
  );
}

export default OnSiteSupport;