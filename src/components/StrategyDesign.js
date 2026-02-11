import React from 'react';
import { useNavigate } from 'react-router-dom';
import strategyDesign from './assets/brief-1.jpg';

const StrategyDesign = () => {
    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        navigate("/bookDemo");
    }

    return (
        <div className="bg-[#f24b00] min-h-screen flex items-center justify-center py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h2 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-10 lg:mb-14 uppercase tracking-wide">
                        Strategy & Design
                    </h2>
                    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug md:leading-tight mb-6 md:mb-8">
                        Turning up <br className="hidden sm:block" />
                        the volume <br className="hidden sm:block" />
                        on your values
                    </h1>
                    <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                        Global teams can easily become fragmented. An anchored, amplified
                        mission keeps everyone focused on the same goals. Diversified's team
                        of experts works with global leaders to design exceptional corporate
                        auditoriums and broadcast studios that ensure messages are delivered
                        in the most impactful way—uniting teams through a common purpose.
                    </p>
                    <button 
                        className="border border-white hover:bg-white text-white hover:text-[#f24b00] mt-6 md:mt-10 lg:mt-14 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        onClick={handleButtonClick}
                    >
                        Book a Demo
                    </button>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-xl mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                    <img
                        src={strategyDesign}
                        alt="Auditorium"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default StrategyDesign;