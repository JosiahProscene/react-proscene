import React from "react";
import './Footer.css';
import logo from './assets/log.png';
import avixamember from './assets/avixamember.png';
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Copyright from "./Copyright";

const Footer = () => {
    const solutionsSubMenuItems = [
        { label: 'Audio Visual Integration', href: '/avIntegration' },
        { label: 'Collaboration Solutions', href: '/collaborationSolutions' },
        { label: 'Digital Media', href: '/digitalMedia' },
        { label: 'Automation Solutions', href: '/automationSolutions' },
        { label: 'Interactive Technology', href: '/interactiveTechnology' },
        {label: 'About', href: '/about'}
    ];

    const sectorsSubMenuItems = [
        { label: 'Corporate', href: '/corporate' },
        { label: 'Education', href: '/education' },
        { label: 'Public Sector', href: '/publicSector' },
        { label: 'Healthcare', href: '/healthcare' },
        { label: 'Legal Collaboration', href: '/legalCollaboration' },
    ];

    const servicesSubMenuItems = [
        { label: 'Unified Communications', href: '/unifiedCommunications' },
        { label: 'Training and Support', href: '/trainingAndSupport' },
        { label: 'On-site Support', href: '/onSiteSupport' },
        { label: 'Equipment Repair', href: '/equipmentRepair' },
        { label: 'Leasing', href: '/leasing' },
        { label: 'Video Conference Rental', href: '/videoConferenceRental' },
    ];

    return (
        <div className="footer">
            <main className="main-container">
                {/* Logo Section - Full width on mobile, positioned on desktop */}
                <div className="footer-logo-section">
                    <Link to="/" className="footer-logo-link">
                        <img src={logo} alt="Company Logo" className="footer-logo" />
                    </Link>
                </div>

                {/* Content Grid - Responsive layout */}
                <div className="footer-content-grid">
                    {/* Solutions Section */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Solutions</h3>
                        <div className="footer-links">
                            {solutionsSubMenuItems.map(item => (
                                <Link key={item.href} to={item.href} className="footer-link">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sectors Section */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Sectors</h3>
                        <div className="footer-links">
                            {sectorsSubMenuItems.map(item => (
                                <Link key={item.href} to={item.href} className="footer-link">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Services</h3>
                        <div className="footer-links">
                            {servicesSubMenuItems.map(item => (
                                <Link key={item.href} to={item.href} className="footer-link">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="footer-section footer-social-section">
                        <h3 className="footer-heading">Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/proscenesystems" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebook />
                            </a>
                            <a href="https://x.com/AudioVisualEA" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaSquareXTwitter />
                            </a>
                            <a href="https://www.linkedin.com/company/proscene-systems-limited/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/proscenesystems/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            
            {/* Bottom Legal Section */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="avixa-logo-section">
                        <Link to="/" className="avixa-logo-link">
                            <img src={avixamember} alt="Avixa Logo" className="avixa-logo" />
                        </Link>
                    </div>
                    
                    <div className="legal-section">
                        <div className="legal-links">
                            <Link to="/terms" className="legal-link">
                                Terms & Conditions
                            </Link>
                            <Link to="/privacy-policy" className="legal-link">
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="copyright-section">
                            <Copyright/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
