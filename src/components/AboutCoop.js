import React from "react";
import { useNavigate } from "react-router-dom";
import Coop from './assets/HeroCoop.jpg';

const AboutCoop = () => {
    const navigate = useNavigate();
    const [hasAnimated, setHasAnimated] = React.useState(false);
 
    // Trigger animation on mount or first hover
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleButtonClick = () => {
        navigate("/case-studies/sbm-bank-kenya");
    }

    return (
        <div className="relative group w-full h-screen bg-[#fff] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <img
                src={Coop}
                alt="Corporate Offices Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            
            {/* Color overlay */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>
            
            {/* Content Container */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-28">
                {/* Main Heading - Slides in from left on hover (desktop) or always visible (mobile) */}
                <div className={`transform transition-all duration-500 ease-out
                    ${hasAnimated ? 'opacity-100 translate-x-0' : 'lg:opacity-0 lg:-translate-x-full opacity-100 translate-x-0'}`}>
                    <h1 className="text-white font-bold leading-tight mb-4 md:mb-6 lg:mb-8
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                        drop-shadow-lg">
                        Corporate<br />
                        Offices
                    </h1>
                </div>

                {/* Subheading - Slides in with delay */}
                <div className={`transform transition-all duration-500 delay-100 ease-out
                    ${hasAnimated ? 'opacity-100 translate-x-0' : 'lg:opacity-0 lg:-translate-x-full opacity-100 translate-x-0'}
                    mt-4 md:mt-6 lg:mt-8`}>
                    <h2 className="text-white font-semibold
                        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                        drop-shadow-lg">
                        SBM Bank Kenya
                    </h2>
                </div>

                {/* CTA Button - Slides in with more delay */}
                <div className={`transform transition-all duration-500 delay-200 ease-out
                    ${hasAnimated ? 'opacity-100 translate-x-0' : 'lg:opacity-0 lg:-translate-x-full opacity-100 translate-x-0'}
                    mt-6 md:mt-8 lg:mt-12`}>
                    <button 
                        className="bg-transparent text-white border-2 border-white 
                            px-6 py-3 md:px-8 md:py-4 
                            text-sm sm:text-base md:text-lg lg:text-xl
                            rounded-lg md:rounded-xl
                            font-semibold
                            hover:bg-white hover:text-[#f24b00] 
                            transition-all duration-300
                            shadow-lg hover:shadow-2xl
                            transform hover:scale-105
                            active:scale-95"
                        onClick={handleButtonClick}
                    >
                        VIEW CASE STUDY →
                    </button>
                </div>

                {/* Optional: Feature highlights for Corporate Offices */}
                <div className={`transform transition-all duration-500 delay-300 ease-out
                    ${hasAnimated ? 'opacity-100 translate-x-0' : 'lg:opacity-0 lg:-translate-x-full opacity-100 translate-x-0'}
                    mt-8 md:mt-10 lg:mt-16`}>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm border border-white/30">
                            Meeting Rooms
                        </span>
                        <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm border border-white/30">
                            Boardrooms
                        </span>
                        <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm border border-white/30">
                            Collaboration Spaces
                        </span>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Instruction (Optional) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 lg:hidden">
                <div className="text-white text-xs sm:text-sm opacity-75 animate-bounce">
                    Scroll down for more
                </div>
            </div>
        </div>
    );
};

export default AboutCoop;