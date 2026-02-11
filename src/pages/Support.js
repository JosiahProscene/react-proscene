import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homeSvg from "../components/assets/support.jpg";
import Footer from "../components/Footer";

function Support() {
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState("technical");

    const supportCategories = [
        {
            id: "technical",
            name: "Technical Support",
            icon: "🔧",
            description: "Get help with system issues and troubleshooting"
        },
        {
            id: "sales",
            name: "Sales Inquiry",
            icon: "💼",
            description: "Questions about products and solutions"
        },
        {
            id: "training",
            name: "Training & Resources",
            icon: "📚",
            description: "Learn how to use your AV systems"
        },
        {
            id: "maintenance",
            name: "Maintenance",
            icon: "🛠️",
            description: "Schedule service or preventive maintenance"
        }
    ];

    const openTawkChat = () => {
        const checkTawk = setInterval(() => {
            if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
            window.Tawk_API.maximize();
            window.Tawk_API.setAttributes({
                message: "Hi, I want to submit a ticket regarding AV support."
            });
            clearInterval(checkTawk);
            }
        }, 500);
        };

    const supportOptions = [
        {
            icon: "📞",
            title: "24/7 Dedicated AV Contact Centre",
            description: "Get immediate assistance from our expert support team, available around the clock.",
            cta: "Call +254 713 761 269",
            link: "tel:+254713761269",
            highlight: true
        },
        {
            icon: "💬",
            title: "Live Chat Support",
            description: "Connect with our support team instantly through live chat for quick resolutions.",
            cta: "Start Chat",
            link: "https://wa.me/254716147610?text=Hello%20Proscene%20Systems,%20I%20need%20assistance%20with%20AV%20solutions."
        },
        {
            icon: "📧",
            title: "Email Support",
            description: "Send us detailed information about your issue and get expert guidance.",
            cta: "Email Us",
            link: "mailto:info@proscene.co.ke"
        },
        {
            icon: "🎫",
            title: "Submit a Ticket",
            description: "Create a support ticket and track the progress of your request.",
            cta: "Open Ticket",
            link: "#ticket",
            onClick: openTawkChat
        },
        {
            icon: "📖",
            title: "Knowledge Base",
            description: "Browse our comprehensive library of guides, tutorials, and FAQs.",
            cta: "Browse Articles",
            link: "#kb"
        },
        {
            icon: "🎓",
            title: "Training Sessions",
            description: "Schedule personalized training for your team on AV system operation.",
            cta: "Book Training",
            link: "/bookDemo"
        }
    ];

    const faqs = [
        {
            question: "What is covered under the 1-year workmanship warranty?",
            answer: "Every new installation includes 1 year of free workmanship support, covering installation-related issues, system configuration, and technical assistance for the installed equipment."
        },
        {
            question: "How quickly can I expect a response to my support request?",
            answer: "Our 24/7 contact centre ensures immediate response to critical issues. For non-urgent requests, you'll receive a response within 4 business hours."
        },
        {
            question: "Do you offer on-site support?",
            answer: "Yes! We provide both remote and on-site field support across Kenya and East Africa. Our certified technicians can be dispatched to your location as needed."
        },
        {
            question: "Can you help with systems not installed by Proscene?",
            answer: "Absolutely. We're certified service providers for all major AV and UC vendors and can support existing infrastructure regardless of who installed it."
        },
        {
            question: "What is included in your managed services?",
            answer: "Our managed services include proactive monitoring, preventive maintenance, firmware updates, resource scheduling, video conference production, and comprehensive reporting dashboards."
        },
        {
            question: "Do you provide training for our staff?",
            answer: "Yes, we offer comprehensive training and adoption programs as part of our professional services. Training can be customized to your team's needs."
        }
    ];

    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen mt-6 bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#f24b00] to-[#ff6a33] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                                We're Here to Help
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Support That's Always
                                <span className="block text-[#16213d]">There For You</span>
                            </h1>
                            <p className="text-xl text-white leading-relaxed">
                                Get always-on access to technical support, self-help resources, and expert guidance. Our team is ready to ensure your AV systems run flawlessly.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="bg-white text-[#f24b00] px-8 py-3 rounded-2xl font-semibold hover:bg-[#16213d] hover:text-white transition-colors duration-300 shadow-lg"
                                >
                                    Contact Support
                                </button>
                                <button
                                    onClick={() => document.getElementById('support-options').scrollIntoView({ behavior: 'smooth' })}
                                    className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-[#f24b00] transition-colors duration-300"
                                >
                                    Explore Options
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src="/support.jpg"
                                    alt="Support"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#16213d] rounded-full opacity-30"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f24b00] rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="py-12 px-4 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "⏱️", stat: "24/7", label: "Support Available" },
                            { icon: "⚡", stat: "<4hrs", label: "Response Time" },
                            { icon: "🎯", stat: "99.8%", label: "System Uptime" },
                            { icon: "🏆", stat: "14+", label: "Years Experience" }
                        ].map((item, index) => (
                            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
                                <div className="text-3xl mb-2">{item.icon}</div>
                                <div className="text-3xl font-bold text-[#f24b00] mb-1">{item.stat}</div>
                                <div className="text-sm text-gray-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Support Categories */}
            <div className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
                            What Do You Need Help With?
                        </h2>
                        <p className="text-lg text-[#16213d]">
                            Select a category to get started
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`p-6 rounded-2xl text-center transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? "bg-gradient-to-br from-[#f24b00] to-[#ff6a33] text-white shadow-xl scale-105"
                                        : "bg-gray-50 hover:bg-gray-100 text-[#16213d]"
                                }`}
                            >
                                <div className="text-4xl mb-3">{category.icon}</div>
                                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                                <p className={`text-sm ${activeCategory === category.id ? "text-white" : "text-gray-600"}`}>
                                    {category.description}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Support Options */}
            <div id="support-options" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
                            How Would You Like to Get Help?
                        </h2>
                        <p className="text-lg text-[#16213d]">
                            Choose the support channel that works best for you
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {supportOptions.map((option, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                                    option.highlight ? "ring-2 ring-[#f24b00]" : ""
                                }`}
                            >
                                {option.highlight && (
                                    <div className="inline-block px-3 py-1 bg-[#f24b00] text-white text-xs font-bold rounded-full mb-3">
                                        PRIORITY SUPPORT
                                    </div>
                                )}
                                <div className="text-5xl mb-4">{option.icon}</div>
                                <h3 className="text-xl font-bold text-[#16213d] mb-2 group-hover:text-[#f24b00] transition-colors">
                                    {option.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {option.description}
                                </p>
                                <a
                                href={option.link || "#"}
                                target={option.link.startsWith("http") ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    if (option.onClick) {
                                    e.preventDefault(); // prevent default navigation
                                    option.onClick();   // call Tawk API
                                    } else if (option.link.startsWith("/")) {
                                    e.preventDefault();
                                    navigate(option.link);
                                    }
                                }}
                                className={`inline-flex items-center font-semibold transition-all group-hover:translate-x-2 ${
                                    option.highlight ? "text-[#f24b00]" : "text-gray-700 group-hover:text-[#f24b00]"
                                }`}
                                >
                                {option.cta}
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Level Agreement */}
            <div className="py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
                            Our Service Commitment
                        </h2>
                        <p className="text-lg text-[#16213d]">
                            Service is at the forefront of our system integration model
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "🛡️",
                                title: "1 Year Workmanship Warranty",
                                description: "Every new installation includes free support for the first year"
                            },
                            {
                                icon: "🔄",
                                title: "Preventative Maintenance",
                                description: "Regular system checks to prevent issues before they occur"
                            },
                            {
                                icon: "⚡",
                                title: "Break/Fix Support",
                                description: "Fast response to system failures and technical issues"
                            },
                            {
                                icon: "📊",
                                title: "System Monitoring",
                                description: "Proactive monitoring and issue resolution"
                            },
                            {
                                icon: "🔧",
                                title: "Field Services",
                                description: "On-site support across Kenya and East Africa"
                            },
                            {
                                icon: "📱",
                                title: "Remote Support",
                                description: "Quick assistance via remote access when possible"
                            }
                        ].map((service, index) => (
                            <div key={index} className="flex gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                                <div className="text-4xl flex-shrink-0">{service.icon}</div>
                                <div>
                                    <h3 className="font-bold text-lg text-[#16213d] mb-2">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-[#16213d]">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-[#16213d] pr-4">{faq.question}</span>
                                    <svg
                                        className={`w-6 h-6 text-[#f24b00] flex-shrink-0 transition-transform duration-300 ${
                                            openFaq === index ? "rotate-180" : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Emergency Support CTA */}
            <div className="py-16 px-4 bg-gradient-to-r from-[#f24b00] to-[#ff6a33] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-5xl mb-4">🚨</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Critical Issue? We're Here 24/7
                    </h2>
                    <p className="text-xl text-white mb-8">
                        For urgent system failures or critical support needs, contact our emergency hotline immediately
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+254713761269"
                            className="bg-white text-[#f24b00] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#16213d] hover:text-white transition-colors duration-300 shadow-lg inline-flex items-center justify-center"
                        >
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Emergency Hotline
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#16213d] mb-6">
                        Still Need Help?
                    </h2>
                    <p className="text-lg text-[#16213d] mb-8">
                        Our support team is ready to assist you with any questions or concerns
                    </p>
                    <button
                        onClick={() => navigate("/contact")}
                        className="bg-[#f24b00] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#e04500] transition-colors duration-300 shadow-lg"
                    >
                        Contact Support Team
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Support;