import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import caseStudiesData from "./data/caseStudies.json";
import Footer from "../components/Footer";

function CaseStudiesListPage() {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const industries = ["all", ...new Set(caseStudiesData.caseStudies.map(cs => cs.industry))];

  const filteredCaseStudies = selectedIndustry === "all"
    ? caseStudiesData.caseStudies
    : caseStudiesData.caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#f24b00] to-[#ff6a33] text-white overflow-hidden mt-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
              Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Discover how we've helped organizations across industries transform their spaces with innovative AV solutions that drive real results.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedIndustry === industry
                    ? "bg-[#f24b00] text-white shadow-lg"
                    : "bg-white text-[#16213d] hover:bg-gray-100"
                }`}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => navigate(`/case-studies/${caseStudy.id}`)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={caseStudy.heroImage}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/DSCF1370_1.jpg";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-white text-[#f24b00] rounded-full text-sm font-semibold shadow-lg">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#16213d] mb-2 group-hover:text-[#f24b00] transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600">{caseStudy.subtitle}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{caseStudy.location}</span>
                    </div>
                    <span>{caseStudy.projectDate}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-[#f24b00] font-semibold group-hover:translate-x-2 transition-transform">
                      Read Case Study
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#f24b00] to-[#ff6a33] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-white text-lg">
              Delivering excellence across industries worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-white">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-white">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-white">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
            Let's Create Your Success Story
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your space with innovative AV solutions? Our team is here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/bookDemo")}
              className="bg-[#f24b00] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#16213d] transition-colors duration-300"
            >
              Start Your Project
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-[#f24b00] text-[#f24b00] px-8 py-3 rounded-2xl font-semibold hover:bg-[#f24b00] hover:text-white transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CaseStudiesListPage;