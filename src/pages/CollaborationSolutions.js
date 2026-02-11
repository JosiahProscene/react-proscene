import React, { useEffect, useState } from "react";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import collaborationJpg from "../components/assets/ed.jpg";
import collaboration1Media from "../components/assets/unc-surgical.jpg";
import supportMedia from "../components/assets/Support1.jpg";
import cloudMedia from "../components/assets/Boardroom3.jpg";
import BookDemoToday from "../components/BookDemo";
import FAQ from "./Faq";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SupportMaintain from "../components/SupportMaintain";
import Stats from "../components/StatsSection.js";

function CollaborationSolutions() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/bookDemo")
    };
  const swipeTexts = [
    //"Enhance teamwork and streamline communication with tailored collaboration tools.",
    "Boost productivity by connecting teams with the right technology.",
    "Empower your business with seamless, innovative collaboration solutions.",
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
    { id: "feature1", label: "Unified Platforms" },
    { id: "feature2", label: "Real-Time Sync" },
    { id: "feature3", label: "Cloud-Based Tools" },
    { id: "feature4", label: "Secure Channels" },
    { id: "feature5", label: "Custom Workflows" },
    { id: "feature6", label: "24/7 Support" },
  ];

  const content = {
    feature1: {
      title: "Unified Collaboration Platforms",
      description:
        "Centralize communication, task management, and file sharing on a single platform, tailored to streamline team workflows.",
      image:
        collaboration1Media,
    },
    feature2: {
      title: "Real-Time Synchronization",
      description:
        "Enable teams to work together seamlessly, with updates and notifications synchronized in real time.",
      image:
        supportMedia,
    },
    feature3: {
      title: "Cloud-Based Collaboration Tools",
      description:
        "Access and edit documents, share ideas, and manage projects from anywhere with our secure cloud solutions.",
      image:
        cloudMedia,
    },
    feature4: {
      title: "Secure Communication Channels",
      description:
        "Ensure the safety of sensitive information with encrypted communication and data-sharing solutions.",
      image:
        cloudMedia,
    },
    feature5: {
      title: "Custom Workflows for Teams",
      description:
        "Design tailored workflows that align with your team's unique needs, maximizing efficiency and output.",
      image:
        collaboration1Media,
    },
    feature6: {
      title: "24/7 Support for Seamless Collaboration",
      description:
        "Our dedicated support team is available around the clock to resolve any issues and keep your operations running smoothly.",
      image:
        supportMedia,
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
              Collaborate Smarter, Not Harder.
            </h1>
            <p className="text-lg mb-6">{swipeTexts[currentIndex]}</p>
            <div className="button-Center">
              <button className="border border-white text-white py-2 px-6 rounded-2xl hover:bg-[#e54600]"
              onClick={handleButtonClick}>
                Get Started
              </button>
            </div>
          </div>

          <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img
              src={collaborationJpg}
              alt="collaboration"
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

      {/* key features */}
      <div className="p-4">
        <h2 className="text-center onsitesubheads font-bold mb-4">Key Features</h2>
        {/* Links Row */}
        <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-1 items-center px-32">
            {links.map((link) => (
            <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-4 py-2 ${
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
            className="absolute bottom-0 left-0 h-[2px] bg-[#f24b00] transition-transform"
            style={{
            transform: `translateX(${links.findIndex((link) => link.id === activeLink) * 100}%)`,
            }}
        />
        </div>
        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-32" style={{maxWidth:'1100px', margin:'0 auto'}}>
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
      <div id="faqs" className="flex flex-col mt-9 pt-6 justify-center items-center pb-5">
        <h3 className="onsitesubheads">Frequently Asked Questions</h3>
          <FAQ />         
        </div>
        <SupportMaintain/>
        <Stats/>
        <BookDemoToday/>
      <Footer />
    </div>
  );
}

export default CollaborationSolutions;