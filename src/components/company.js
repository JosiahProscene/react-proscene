import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Company() {
  const navigate = useNavigate();

  const stats = [
    { number: "14+", label: "Years of Excellence" },
    { number: "3000+", label: "Projects Completed" },
    { number: "7", label: "Countries Served" },
    { number: "50+", label: "Businesses Supported" }
  ];

  const services = [
    {
      icon: "🎯",
      title: "Professional Services",
      description: "PMP- and industry-certified engineers lead your project from design through training",
      features: [
        "Collaboration program design",
        "System engineering",
        "Implementation services",
        "Training and adoption"
      ]
    },
    {
      icon: "🛡️",
      title: "Support & Field Services",
      description: "24/7 Customer Care ensuring reliability and minimizing downtime",
      features: [
        "Four 24/7 Global Services Operations Centers",
        "Warranty services",
        "Preventative maintenance",
        "Break/fix support"
      ]
    },
    {
      icon: "☁️",
      title: "Managed Services",
      description: "Proactive monitoring and management with Unify ME Symphony™ platform",
      features: [
        "Proactive issue resolution",
        "Resource scheduling",
        "Hosted infrastructure services",
        "Real-time monitoring and reporting"
      ]
    }
  ];

  const sectors = [
    { name: "Corporate Sector", icon: "🏢" },
    { name: "Public Sector", icon: "🏛️" },
    { name: "Education Sector", icon: "🎓" },
    { name: "Health Sector", icon: "🏥" },
    { name: "Legal Collaboration", icon: "⚖️" },
    { name: "Religious Organizations", icon: "⛪" }
  ];

  const brands = [
    "Crestron", "Microsoft", "Poly", "Extron", "Logitech", "EPSON",
    "Panasonic", "Christie", "NEC", "ClearOne", "Lenovo", "SMART"
  ];

  const featuredProjects = [
    {
      client: "Microsoft Kenya",
      description: "Supply, Installation, Configuration, Testing and Training of Audio-Visual and Teleconferencing equipment"
    },
    {
      client: "International Centre for Research in Agroforestry",
      description: "Boardroom installation, training and commissioning of Televic Delegate System"
    },
    {
      client: "Adventist University of Africa",
      description: "Auditorium installation of LED walls, RCF sound system, Panasonic cameras"
    },
    {
      client: "Central Bank Kenya",
      description: "Supply, Installation, Configuration, Testing and Training of Audio-Visual equipment"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#f24b00] to-[#e54600] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center space-y-8">
            <div className="inline-block px-6 py-3 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
              About Proscene Systems Limited
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Digitally Transforming How We
              <span className="block text-orange-200">Work, Learn, and Live</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              East Africa's most experienced and innovative provider of Audio Visual solutions, 
              serving corporate, education, public sector, and religious organizations for over 14 years.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f24b00] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Director's Message - Fixed Responsive Layout */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Avatar Section */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#f24b00] to-[#e54600] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                  PS
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1  md:text-left">
                <div className="inline-block px-4 py-1 bg-orange-100 text-[#f24b00] rounded-full text-sm font-medium mb-4">
                  Message from Director
                </div>
                <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  "Since 2015, Proscene Systems Limited has been dedicated to delivering exceptional quality 
                  and unparalleled service in innovative audio-visual solutions, driven by a passion for technology and excellence."
                </blockquote>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  As a female leader, I value diversity and innovation, prioritizing trust and integrity. Our success 
                  comes from enduring client relationships, mutual respect, and outstanding results. We aim to exceed 
                  expectations through cutting-edge installations, support, and maintenance, earning strong client 
                  recommendations and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Company */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
                About Proscene Systems Limited
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Proscene is a full-service Audio Visual System Integrator with over 20+ full-time staff based in our 
                Nairobi office. We provide integrated and professional Audio Visual solutions designed to help clients 
                collaborate and communicate effectively in the modern business environment.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                We serve as a trusted partner to numerous organizations worldwide as they undergo digital workplace 
                transformation. Our aim is to ignite success and generate tangible impact for your business.
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-[#f24b00] mb-1">20+</div>
                  <div className="text-gray-600 text-xs md:text-sm">Dedicated Staff</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-[#f24b00] mb-1">7</div>
                  <div className="text-gray-600 text-xs md:text-sm">Country Offices</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#f24b00] to-[#e54600] rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Our Guiding Principles</h3>
              <div className="space-y-4">
                {[
                  { icon: "📊", principle: "Standardized", desc: "Consistent, reliable solutions" },
                  { icon: "🎯", principle: "Simple", desc: "User-friendly experiences" },
                  { icon: "📈", principle: "Scalable", desc: "Growth-ready infrastructure" },
                  { icon: "🔧", principle: "Serviceable", desc: "Easy maintenance and support" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 md:space-x-4">
                    <div className="text-xl md:text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-bold text-sm md:text-base">{item.principle}</div>
                      <div className="text-orange-100 text-xs md:text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end Audio Visual solutions from design to ongoing support and management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#16213d] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#f24b00] rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#16213d] mb-8 text-center">
              Specialized Service Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Meeting Spaces",
                  icon: "💬",
                  description: "Room design standards, implementation, and ongoing support for collaboration spaces",
                  features: ["Huddle rooms", "Boardrooms", "Interactive displays", "Audio design"]
                },
                {
                  title: "Digital Media & Signage",
                  icon: "📺",
                  description: "Engaging customer experiences through wayfinding and interactive signage",
                  features: ["Content design", "Hosting & management", "Mobile experiences", "Traditional signage"]
                },
                {
                  title: "AV Systems Control",
                  icon: "🎛️",
                  description: "Seamless integration and remote management of AV and UC systems",
                  features: ["Intelligent scheduling", "Proactive monitoring", "Usage analytics", "Network integration"]
                }
              ].map((area, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{area.icon}</div>
                  <h4 className="text-lg font-bold text-[#16213d] mb-2">{area.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  <div className="space-y-1">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-500">• {feature}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sectors We Serve */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by organizations across multiple industries in East Africa and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-3xl md:text-4xl mb-3">{sector.icon}</div>
                <div className="font-semibold text-gray-800 text-sm md:text-base">{sector.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands & Partnerships */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Our Technology Partners
            </h2>
            <p className="text-lg text-gray-600">
              Certified partnerships with world-leading AV and technology brands
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {brands.map((brand, index) => (
                <div key={index} className="text-center p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="font-semibold text-gray-800 text-xs md:text-sm">{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Delivering exceptional AV solutions for leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f24b00] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#16213d] mb-2">{project.client}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#f24b00] to-[#e54600] text-white p-8 md:p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-orange-100 mb-8 text-base md:text-lg">
              Join 3000+ satisfied clients who trust Proscene for their audio-visual solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/contact")}
                className="bg-white text-[#f24b00] px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => navigate("/gallery")}
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-white hover:text-[#f24b00] transition-all duration-300 text-sm md:text-base"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Company;