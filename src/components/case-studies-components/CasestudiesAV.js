import React, { useState } from 'react';
import caseStudies from './CaseStudiesData';
//import Footer from './Footer';

// CaseStudyModal Component (Internal)
function CaseStudyModal({ caseStudy, onClose }) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{caseStudy.title}</h2>
          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <div className="text-gray-700 leading-relaxed prose" dangerouslySetInnerHTML={{ __html: caseStudy.fullContent }} />
        </div>
      </div>
    </div>
  );
}

// CaseStudyCard Component (Internal)
function CaseStudyCard({ caseStudy, onReadMore }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{caseStudy.summary}</p>
        <button
          onClick={() => onReadMore(caseStudy)}
          className="mt-auto bg-[#3b37e6] text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

// Main CaseStudies Component
function CaseStudiesAV() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const handleReadMore = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const handleCloseModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Our Success Stories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={handleCloseModal}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default CaseStudiesAV;

