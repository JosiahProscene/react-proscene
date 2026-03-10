import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const statsData = [
    { value: 20, label: 'Team Members', suffix: '' },
    { value: 500, label: 'Projects Completed', suffix: '+' },
    { value: 15, label: 'Years Experience', suffix: '+' },
    { value: 98, label: 'Client Satisfaction', suffix: '%' },
  ];

  const [inView, setInView] = useState(false); // Tracks if the stats are visible
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
        <div className="flex flex-col justify-center">
          <h2 className="" style={{fontWeight:'700', color:'#16213d', lineHeight:'1' , fontSize:'clamp(2.8019rem, 1.0209rem + 3.9051vw, 4.6819rem) '}}>
            We are  <span className="text-[#f24b00]"> <br />Proscene</span>
          </h2>
          <p className="mt-8"  style={{fontSize:'clamp(1.2656rem, 1.0692rem + 0.9822vw, 1.99rem)',color:'#16213d'}}>
            We are building a world without boundaries - where every experience transcends the technology that enables it.
          </p>
          <p className="mt-8"  style={{fontSize:'clamp(1rem, 0.9661rem + 0.1695vw, 1.125rem)',color:'#16213d'}}>
            Delivering innovative AV solutions that transform spaces and create unforgettable experiences.
          </p>
        </div>

       
        <div className="flex justify-center items-center">
        <div 
          className="relative w-[450px] h-[450px] rounded-xl border-4 border-white-500 overflow-hidden"
        >
          <iframe width="450" height="450" src="https://www.youtube-nocookie.com/embed/ErBsPANTpqM?si=LTSZlDgEEBTWNwrj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      </div>
    </div>
      </div>
      <div className="bg-[#fff] py-1 pb-12" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center relative">
                {/* Divider line */}
                {index !== 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#f24b00] mx-auto hidden md:block"></div>
                )}
                {/* Countup animation */}
                <div className="" style={{fontSize:'clamp(1.8019rem, 1.0209rem + 3.9051vw, 4.6819rem)', fontWeight:'700', color:'#16213d'}}>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      suffix={stat.suffix || ''}
                      duration={3}
                      decimals={stat.label.includes('Satisfaction') ? 0 : 0}
                    />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="mt-2 text-lg text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Stats;