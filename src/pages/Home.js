import React from "react";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import SectorCards from "../components/SectorCards.js";
import './Home.css';
import Partners from "../components/Partners.js";
import BookDemoToday from "../components/BookDemo.js";
import SolutionsLayout from "../components/Solutions.js";
import DriveGrowth from "../components/DriveGrowth.js";
import Stats from "../components/StatsSection.js";
import TestimonialCarousel from "../components/testimonials.js";
import VideoBackground from "../components/VideoBackground.js";

function Home() {
    return (
        <div className="home-container">
        <div>
        <VideoBackground/>
        </div>
        <div>
        <Stats/>
        </div>
        <div className="my-[4rem]">
        <SolutionsLayout/>
        </div>
        {/* <div className="home-section mx-auto" style={{marginBlock:'clamp(1.5rem, 2.9915rem + 2.5424vw, 5.375rem)'}}>
        <Partners/>
        </div> */}
        <div className="home-section" style={{marginBottom:'clamp(1.5rem, 1.4492rem + 1.9542vw, 3.6875rem)'}}>
        <LogoCarousel /> 
        </div>
        <div className="sector-section maxWidthContainer">
        <SectorCards />
        </div>  
        <div className="text-center my-[6rem]">
          <h2
            className="text-4xl font-bold leading-relaxed tracking-tight text-[#16213d]"
            style={{
              fontSize: 'clamp(1.4238rem, 1.0921rem + 1.6585vw, 2.6469rem)',
            }}
          >
            GLOBAL PERFORMANCE, <br /> LOCAL PRESENCE
          </h2>
        </div>
        <div className="">
        <TestimonialCarousel/>
        </div>
        <div className = "demo-section">
        <BookDemoToday/>
        </div>        
        <Footer />
        </div>
    );
}

export default Home;
