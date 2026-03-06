import React, { useState, useEffect, useRef } from "react";
import "../global.css";
import { useNavigate } from "react-router-dom";
import { BorderAllRounded } from "@mui/icons-material";

function DriveGrowth() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/bookDemo");
    };

    const swipeTexts = [
        "Fits your business each day, everyday. Check.",
        "Drives your growth tomorrow. Check. ",
        // "Empower your business with cutting-edge solutions tailored to your needs.",
    ];

    const swipeTopics = [
        "Transforming Spaces with Innovative Audio-Visual Solutions",
        "Digitally Transforming How We Work, Learn and Live",
        // "Be felt, be visible through all the seasons. Check.",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
                setIsAnimating(false);
            }, 500); // Match this to the animation duration
        }, 9000);

        return () => clearInterval(interval);
    }, [swipeTexts.length]);

    return (
        <div className="pb-5  maxWidthContainer" style={{paddingTop:'clamp(1.8019rem, 1.0209rem + 3.9051vw, 4.6819rem)'}}>
            <div className="flex flex-col md:flex-row items-center justify-center p-3 bg-white min-h-40">
                <div className="bg-[#f24b00] py-16 text-white sm:p-10 p-5 mb-10 mt-10 md:w-1/2 Br">
                    {/* Content with fixed height and scroll for overflow */}
                    <div
                        className="overflow-hidden relative"
                        style={{ maxHeight: `${containerHeight}px`, overflow: "hidden" }}
                    >
                        <h1
                            className={`font-bold h1sizing mx-4 transition-transform duration-500 transform ${
                                isAnimating ? "-translate-x-full" : "translate-x-0"
                            }`}
                        >
                            {swipeTopics[currentIndex]}
                        </h1>
                    </div>
                    <div
                        className="overflow-hidden relative"
                        style={{ maxHeight: `${containerHeight}px`, overflow: "hidden" }}
                    >
                        <p
                            className={`text-center md:text-left text-lg mx-4 transition-transform duration-500 transform ${
                                isAnimating ? "-translate-x-full" : "translate-x-0"
                            }`}
                            style={{ fontWeight: "300" }}
                        >
                            {swipeTexts[currentIndex]}
                        </p>
                    </div>
                    <div className="button-Center">
                        <button
                            className="bg-white text-[#f24b00] mx-4 py-2 px-6 mt-5 rounded-2xl hover:bg-[#16213d] hover:text-white border border-white transition-colors duration-300"
                            onClick={handleButtonClick}
                        >
                            Contact Our Team
                        </button>
                    </div>
                </div>

                <div className="relative md:w-1/2 flex items-center justify-center  md:mt-0 bg-growth lg:pl-5">
                    <img src={homeimg} alt="home" className="rounded-[65px] shadow-lg"/>
                </div>
            </div>
        </div>
    );
}

export default DriveGrowth;