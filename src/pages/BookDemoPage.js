import React, { useState } from 'react';
import Footer from '../components/Footer';

// SVG Icon Components
const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const MouseIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
  </svg>
);

const MapIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </svg>
);

const ThumbsUpIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

function BookDemo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    role: '',
    country: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const countries = [
    "Kenya", "Uganda", "Tanzania", "DRC", "Ethiopia", "Burundi","Rwanda", "Nigeria","South Sudan", "Other"
  ];
  
  const roles = [
    "Owner/President/CEO",
    "CFO/Finance Director",
    "CTO",
    "CMO/Marketing",
    "IT Director",
    "COO/CIO",
    "Consultant",
    "Sales/Business Development",
    "Other"
  ];

  const interests = [
    "Meeting Spaces & Boardrooms",
    "Video Conferencing Solutions",
    "Digital Signage & Video Walls",
    "Auditorium AV Systems",
    "Managed Services",
    "IPTV/MATV Solutions",
    "Religious Organization AV",
    "Microsoft Modern Work Solutions",
    "Complete AV Infrastructure"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
     const serviceId = 'service_o9uxpbm';
    const templateId = 'template_307vh9s';
    const publicKey = 'WtTeYCIxNDYbZa2iM';

    // Prepare template parameters
    const templateParams = {
      from_firstName: formData.firstName,
      from_lastName: formData.lastName,
      from_company: formData.company,
      from_phone: formData.phone,
      from_email: formData.email,
      from_role: formData.role,
      from_country: formData.country,
      from_interest: formData.interest,
      from_message: formData.message || 'No additional message provided',
      to_email: 'info@proscene.co.ke'
    };

    try {
      console.log('Sending email with:', { serviceId, templateId, publicKey });
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      const responseData = await response.text();
      console.log('Response status:', response.status);
      console.log('Response data:', responseData);

      if (response.ok) {
        console.log('Email sent successfully!');
        setShowSuccessModal(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          phone: '',
          email: '',
          role: '',
          country: '',
          interest: '',
          message: ''
        });
      } else {
        console.error('EmailJS Error:', responseData);
        setShowErrorModal(true);
        throw new Error(`Failed to send email: ${responseData}`);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      console.error('Error details:', error.message);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resources = [
    {
      icon: <PhoneIcon />,
      title: "Find Support",
      description: "Get always-on access to technical support, self-help resources, and your Proscene systems.",
    },
    {
      icon: <MouseIcon />,
      title: "Experience a Demo",
      description: "See how Proscene solutions can streamline and unite your organization to achieve goals.",
    },
    {
      icon: <MapIcon />,
      title: "Locate Our Office",
      description: "We have experts in regions around Kenya and East Africa, ready to support your digital journey.",
    },
    {
      icon: <UsersIcon />,
      title: "Explore Our Impact",
      description: "Get tailored support and strategic guidance to integrate solutions and accelerate value.",
    },
    {
      icon: <ThumbsUpIcon />,
      title: "Succeed with Partnerships",
      description: "Whatever your business challenge, our ecosystem of partners will help drive results.",
    },
    {
      icon: <HeartIcon />,
      title: "Collaborate with Community",
      description: "Tap into a community of Proscene beneficiaries and success stories.",
    },
  ];

  return (
    <div className="min-h-screen mt-8 bg-white">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#16213d] mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">
                Your request has been sent successfully. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-[#f24b00] text-white py-3 rounded-xl font-semibold hover:bg-[#e04500] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#16213d] mb-2">Oops!</h3>
              <p className="text-gray-600 mb-2">
                Something went wrong while sending your request.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Please try again or contact us directly at Sales@proscene.co.ke or Info@proscene.co.ke.
              </p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="w-full bg-[#f24b00] text-white py-3 rounded-xl font-semibold hover:bg-[#e04500] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-[#f24b00] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20 text-center">
          <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-2 mt-6">
            Let's Connect
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get the Resources
            <span className="block">You Need</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Experience how Proscene can transform your workspace. Book a personalized demo or connect with our expert team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Resources */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
                  How We Can Help
                </h2>
                <p className="text-lg text-[#16213d]">
                  Discover the full range of support and services available to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#f24b00] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#16213d] mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-[#16213d] leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-[#16213d] text-white rounded-2xl p-8 mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Prefer to Talk Directly?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="text-[#f24b00]">
                      <PhoneIcon />
                    </div>
                    <a href="tel:+254713761269" className="text-white hover:text-[#f24b00] transition-colors">
                      +254 713 761 269
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:Sales@proscene.co.ke" className="text-white hover:text-[#f24b00] transition-colors">
                      Sales@proscene.co.ke
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#f24b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:Info@proscene.co.ke" className="text-white hover:text-[#f24b00] transition-colors">
                      Info@proscene.co.ke
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-[#f24b00] mt-1">
                      <MapIcon />
                    </div>
                    <p className="text-white">
                      Karen, Off Southern Bypass<br />
                      P.O BOX 66760-00800<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-[#f24b00] text-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
                    <p className="text-white">
                      Fill out the form below and our team will get back to you within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full p-3 rounded-xl bg-white text-[#16213d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="w-full p-3 rounded-xl bg-white text-[#16213d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company"
                        className="w-full p-3 rounded-xl bg-white text-[#16213d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all"
                      />
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+254 700 000 000"
                          className="w-full p-3 rounded-xl bg-white text-[#16213d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full p-3 rounded-xl bg-white text-[#16213d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all"
                        />
                      </div>
                    </div>

                    {/* Role & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Role *</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="w-full p-3 rounded-xl bg-white text-[#16213d] focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all"
                        >
                          <option value="">Select your role</option>
                          {roles.map((role, index) => (
                            <option key={index} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Country *</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full p-3 rounded-xl bg-white text-[#16213d] focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all"
                        >
                          <option value="">Select country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Interest */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Interested In *</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-xl bg-white text-[#16213d] focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all"
                      >
                        <option value="">Select area of interest</option>
                        {interests.map((interest, index) => (
                          <option key={index} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or any specific requirements..."
                        rows="4"
                        className="w-full p-3 rounded-xl bg-white text-[#16213d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16213d] transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Terms */}
                    <div className="text-sm text-white">
                      <p>
                        By submitting this form you agree to our{" "}
                        <a href="/terms" className="text-[#16213d] hover:text-gray-300 underline font-medium">
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-[#16213d] hover:text-gray-300 underline font-medium">
                          Privacy Policy
                        </a>.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#16213d] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#0f1729] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-[#16213d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted Across East Africa
            </h2>
            <p className="text-lg text-gray-300">
              Join hundreds of organizations who trust Proscene
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3000+", label: "Projects Completed" },
              { number: "7", label: "Countries Served" },
              { number: "14+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#f24b00] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BookDemo;