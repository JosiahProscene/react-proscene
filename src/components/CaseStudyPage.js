import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// Import your JSON file - adjust path as needed
import caseStudiesData from "./data/caseStudies.json";

function CaseStudyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Find the case study by ID from URL params
    const study = caseStudiesData.caseStudies.find((cs) => cs.id === id);
    if (study) {
      setCaseStudy(study);
      window.scrollTo(0, 0); // Scroll to top when page loads
    } else {
      console.log("Case study not found for id:", id);
    }
  }, [id]);

  // Loading state
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {id ? "Case Study Not Found" : "Loading..."}
          </h2>
          <button
            onClick={() => navigate("/case-studies")}
            className="text-[#3b37e6] hover:underline font-semibold"
          >
            ← Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-[#3b37e6] transition-colors"
            >
              Home
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => navigate("/case-studies")}
              className="text-gray-600 hover:text-[#3b37e6] transition-colors"
            >
              Case Studies
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{caseStudy.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#3b37e6] to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                  {caseStudy.industry}
                </span>
                <span className="text-blue-100">{caseStudy.projectDate}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                {caseStudy.subtitle}
              </p>
              <div className="flex items-center space-x-2 text-blue-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{caseStudy.location}</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = "/DSCF1370_1.jpg";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-300 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Overview */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Results at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b37e6] mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Challenge</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudy.keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b37e6] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Used */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Technologies Deployed
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {caseStudy.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center text-sm font-medium text-gray-700 hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Project Gallery
          </h2>
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-200">
              <img
                src={caseStudy.gallery[activeImageIndex]}
                alt={`Gallery ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/DSCF1370_1.jpg";
                }}
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {caseStudy.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 aspect-video ${
                    activeImageIndex === index
                      ? "ring-4 ring-[#3b37e6] shadow-lg scale-105"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/DSCF1370_1.jpg";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <div className="py-16 px-4 bg-gradient-to-br from-[#3b37e6] to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <svg
              className="w-16 h-16 text-blue-300 mx-auto mb-6 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="space-y-1">
              <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
              <div className="text-blue-100">{caseStudy.testimonial.position}</div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom AV solution that meets your unique needs and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/bookDemo")}
              className="bg-[#3b37e6] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={() => navigate("/case-studies")}
              className="border-2 border-[#3b37e6] text-[#3b37e6] px-8 py-3 rounded-2xl font-semibold hover:bg-[#3b37e6] hover:text-white transition-colors duration-300"
            >
              View More Case Studies
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CaseStudyPage;