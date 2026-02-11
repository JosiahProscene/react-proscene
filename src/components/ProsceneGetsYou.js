import React from "react";
import avaya from './assets/avaya.jpg';
import barco from './assets/barco.jpg';
import creston from './assets/creston.jpg';
import logo from './assets/logo.png';

function ProsceneGetYou() {

    const features = [
  { image: logo, text: 'Robust, feature-rich, experienced AV installation and integration.',},
  { image: logo, text: 'Telemedicine, collaboration, MDT, AV solutions.',},
  { image: logo, text: 'Collaborative, durable, vibrant display solutions.',},
  { image: logo, text: 'Interactive learning, collaboration, and technology accessibility'},
  { image: logo, text: 'Flexible and modular legal collaboration software.', },
  { image: logo, text: 'Expert audio-visual solutions, innovative efficiency.',},
];

const FeatureCard = ({ image, text,}) => (
  <div className="bg-white rounded-2xl border border-[#f24b00] p-6 flex items-start w-auto min-w-[250px] hover:shadow-lg transition-shadow duration-300">
    <div className="mr-4 flex flex-col items-center">
      <img src={image} alt="" className="w-10 h-10 object-contain" />
    </div>
    <div>
      <p className="text-gray-800 text-md">{text}</p>
    </div>
  </div>
);

const FeatureGrid = () => (
  <div className="container mx-auto py-16 px-4 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
      {features.map((feature, index) => (
        <div key={index} className="flex justify-center">
          <FeatureCard {...feature} />
        </div>
      ))}
    </div>
  </div>
);
    return (
        <div className="pt-10 pb-10">
        {/* title */}
        <div className="text-center text-2xl font-bold text-[#16213d]">With Proscene you will get:</div>
        <FeatureGrid/>
        </div>
    );
}

export default ProsceneGetYou