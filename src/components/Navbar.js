import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import { useMediaQuery } from "react-responsive";
import logoHome from "./assets/logo.png";
import solutionsimg from "./assets/adi.jpeg";

function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeMenu, setActiveMenu] = useState(null);
  // const [isActive, setIsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState({});

  // const handleToggle = () => {
  //   setIsActive((prev) => !prev);
  // }
  const handleToggle = (id) => {
    setActiveMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeAllDropdowns = () => {
    setIsSolutionsOpen(false);
    setIsSectorsOpen(false);
    setIsServicesOpen(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".navbar")) {
      closeAllDropdowns();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const solutionsSubMenuItems = [
    { label: "Audio Visual Integration", href: "/avIntegration" },
    { label: "Collaboration Solutions", href: "/collaborationSolutions" },
    { label: "Microsoft Modern Work Solutions", href: "/microsoft-modern-solutions" },
    { label: "Automation Solutions", href: "/automationSolutions" },
    { label: "Interactive Technology", href: "/interactiveTechnology" },
  ];

  const sectorsSubMenuItems = [
    { label: "Corporate", href: "/corporate" },
    { label: "Education", href: "/education" },
    { label: "Public Sector", href: "/publicSector" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "Legal Collaboration", href: "/legalCollaboration" },
  ];

  const servicesSubMenuItems = [
    { label: "Unified Communications", href: "/unifiedCommunications" },
    { label: "Training and Support", href: "/trainingAndSupport" },
    { label: "On-site Support", href: "/onSiteSupport" },
    { label: "Equipment Repair", href: "/equipmentRepair" },
    { label: "Leasing", href: "/leasing" },
    { label: "Video Conference Rental", href: "/videoConferenceRental" },
  ];

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <header
      id="site-header"
      className="site-header js-site-header site-header__sticky
     en    "
    >
      <div className="site-header__inner">
        <div
          className="container site-header__container"
          style={{ maxWidth: "1400px", margin: "0 auto", paddingInline: "1em" }}
        >
          <div className="site-header__logo">
            <a href="/" className="site-header__logo-link">
              <img
                className="style-svg site-header__logo-img"
                src={logoHome}
                style={{ maxHeight: "35px", minHeight: "25px" }}
                alt="Proscene"
              ></img>
            </a>
          </div>

          <div className="site-header__side">
            <nav className="site-header__nav">
              <ul
                id="menu-header-en"
                className="site-header__menu js-menu-wrapper"
              >
                <li
                  id="menu-item-20758"
                  className="mega-menu solutions menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children active"
                >
                  <a href="/solutions">
                    <span>Solutions</span>
                  </a>
                  <div className="sub-menu-wrapper mega-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="tab-header retail-management style-purple menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a href="/avIntegration" data-tab="20803">
                          <span>Audio Visual Integration</span>
                        </a>
                      </div>
                      <div
                        id="tab-20803"
                        className="tab-pane retail-management style-purple menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20814"
                              className="columns-menu products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="/#">
                                <span>Products</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-29135"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="/#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20794"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>
                                              Customer loyalty management
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20796"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="/">
                                            <span>E-commerce</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20816"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>
                                                    OneCore Full Cart Mode
                                                  </span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>
                                        <li
                                          id="menu-item-20799"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Gift Card Management</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20800"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="/">
                                            <span>Head Office</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20819"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>Inventory control</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20818"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>Omnichannel CRM</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20817"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>Purchasing</span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    id="menu-item-29136"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="/">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20805"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Order Management</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20807"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="/">
                                            <span>POS & Back Office</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20820"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>
                                                    Mobile Back Office
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20808"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>Priority POS</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20810"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>
                                                    Self Service Kiosk
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20811"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>TPOS</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20809"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="/">
                                                  <span>QPOS</span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>
                                        <li
                                          id="menu-item-20812"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Replenishment</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20821"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Retail ERP Software</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-27776"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Priority MyBranch</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            <li
                              id="menu-item-20815"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="/#">
                                <span>Categories</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-29137"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="/#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20788"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Apparel & Footwear</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20789"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>
                                              Bookstores & Record shops
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20790"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>
                                              Building Material, Garden
                                              Equipment, and Hardware
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20791"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>
                                              Cellular, Electronics & Computers
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20792"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Convenience Stores</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20793"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Cosmetics</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20795"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Duty Free</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    id="menu-item-29138"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="/#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20797"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>
                                              Electrical Appliances & Lighting
                                              Showrooms
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20798"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Furniture & Home Decor</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20801"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Jewelry</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20802"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>
                                              Liquor / Spirits / Tobacco
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20804"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>
                                              Office Supplies & General Retail
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20806"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Pet and Animal Supplies</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20813"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="/">
                                            <span>Sporting Goods</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner purple">
                          <div className="banner-description">
                            See how Proscene AV Solutions works for you
                          </div>
                          <a className="btn" href="/bookDemo">
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header erp style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        {/* active above */}
                        <a href="/collaborationSolutions" data-tab="20759">
                          <span>Collaboration Solutions</span>
                        </a>
                      </div>
                      <div
                        id="tab-20759"
                        className="tab-pane erp style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children active"
                      >
                        {/* active above */}
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20774"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="/">
                                <span>Spaces</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20761"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/RoomBasedAV">
                                      <span>
                                        Room-based AV (conference rooms,
                                        classrooms, auditoriums)
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-31540"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/DigitalSignage">
                                      <span>
                                        Digital signage and wayfinding
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20763"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="DisplaySystems">
                                      <span>
                                        Display systems and audio reinforcement
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20765"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/teams-and-zoom-rooms">
                                      <span>Microsoft Teams / Zoom Rooms</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20766"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/hybrid-solutions">
                                      <span>Hybrid meeting solutions</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20769"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/wireless-presentation-systems">
                                      <span>Wireless presentation systems</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20773"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/iptv">
                                      <span>IPTV</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20776"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/video-walls-and-LED-systems">
                                      <span>Video walls & LED displays</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20777"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/interactive-kiosk-and-screens">
                                      <span>
                                        Interactive kiosks and screens
                                      </span>
                                    </a>
                                  </li>

                                  
                                  <li
                                    id="menu-item-20778"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/room-scheduling-systems">
                                      <span>Room scheduling systems</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20779"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/touch-panel-control">
                                      <span>Touch panel control</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20780"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/av-automation">
                                      <span>
                                        Building-wide AV automation (via
                                        Crestron, Extron)
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20780"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/digitalMedia">
                                      <span>
                                        Digital Media
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20770"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/localizations">
                                      <span>Localizations</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            
                            <li
                              id="menu-item-20775"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="/">
                                <span>Proscene</span>
                              </a>
                              <div className="block-area blue custom-image">
                                <div className="block-image">
                                  <img
                                    src={solutionsimg}
                                    className="menu-item-image"
                                    style={{
                                      borderRadius: "10px",
                                      maxHeight: "200px",
                                    }}
                                    alt=""
                                    data-lazy-src=""
                                  ></img>
                                </div>
                                <div className="item-content-area">
                                  <div className="item-content-area-title dark">
                                    Certified for your AV Solution in 2025
                                  </div>
                                  <div className="item-content-area-description">
                                    Insight Report on AV Solutions.
                                  </div>
                                  <div className="item-content-area-button">
                                    <a href="/certifications" className="btn blue p-2">
                                      See certifications
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner blue">
                          <div className="banner-description">
                            See how Proscene works for you
                          </div>
                          <a
                            className="btn"
                            style={{
                              backgroundColor: "#f24b00",
                              padding: ".7em",
                              color: "#fff",
                              borderRadius: "10px",
                            }}
                            href="/bookDemo"
                          >
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header hospitality-management style-light-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a href="/microsoft-modern-solutions" data-tab="20822">
                          <span>Microsoft Modern Work Solutions</span>
                        </a>
                      </div>
                      <div
                        id="tab-20822"
                        className="tab-pane hospitality-management style-light-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20829"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="/#">
                                <span>Products</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20828"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima PMS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20823"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Channel Manager</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20826"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima Cloud PMS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24708"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima CRM</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20827"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima Marketplace</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24794"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima POS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30733"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima Service Center</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-23483"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima Event Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30722"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima Anywhere</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30724"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Optima Spa Management</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            <li
                              id="menu-item-20830"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="/">
                                <span>Categories</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-23482"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Boutique hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24700"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Business hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24701"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Hostels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20824"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>
                                        Hotel chains and groups management
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20825"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Independent hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24702"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Resorts management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-28921"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Vacation resorts</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner light-blue">
                          <div className="banner-description">
                            See how the Proscene Solution works for you
                          </div>
                          <a className="btn" href="/bookDemo">
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header school-management style-coral menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a href="/automationSolutions" data-tab="20831">
                          <span>Automation Solutions</span>
                        </a>
                      </div>
                      <div
                        id="tab-20831"
                        className="tab-pane school-management style-coral menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-29128"
                              className="one-row menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <div className="block-area apricot">
                                <div className="block-area-image">
                                  {/* <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20281%20150'%3E%3C/svg%3E" className="menu-item-image" width="281" height="150" alt="" data-lazy-src="https://www.priority-software.com/wp-content/uploads/2024/03/10-reasons-for-choosing-priority-2-281x150.jpg"><noscript><img src="https://www.priority-software.com/wp-content/uploads/2024/03/10-reasons-for-choosing-priority-2-281x150.jpg" className="menu-item-image" width="281" height="150" alt=""></noscript> */}
                                </div>
                                <div className="item-content-area">
                                  <div className="item-content-area-title dark">
                                    10 Reasons for choosing Priority
                                  </div>
                                  <div className="item-content-area-description"></div>
                                  <div className="item-content-area-button">
                                    <a href="/" className="btn blue">
                                      Read more
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              id="menu-item-20834"
                              className="one-column menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="/">
                                <span>Features</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20833"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Teachers</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20832"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="/">
                                      <span>Students and Parents</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20835"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="/sectors">
                    <span>Sectors</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-32670"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue custom-image">
                            <div className="block-image">
                              <img
                                src={solutionsimg}
                                className="menu-item-image"
                                style={{ borderRadius: "10px" }}
                                alt=""
                                data-lazy-src=""
                              ></img>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title dark">
                                Recognized as the top AV Solution in 2025
                              </div>
                              <div className="item-content-area-description">
                                Insight Report on AV Solutions for SMBs
                              </div>
                              <div className="item-content-area-button">
                                <a href="/contact" className="btn blue p-2">
                                  Contact us
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-33327"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a href="/corporate" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">Corporate</span>
                            </span>
                            <span className="item-content-area-title">
                              Find the perfect ERP partner to help you unlock
                              the full potential of your business
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20837"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a href="/education" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">Education</span>
                            </span>
                            <span className="item-content-area-title">
                              Grow your business by joining Priority's extensive
                              Partner Network
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20838"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a href="/publicSector" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">Public Sector</span>
                            </span>
                            <span className="item-content-area-title">
                              Utilize Priority’s global reach and expertise to
                              identify new opportunities
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20839"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a href="/healthcare" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">Healthcare</span>
                            </span>
                            <span className="item-content-area-title">
                              Priority utilizes the AWS global network to
                              dynamically allocate resources and optimize the
                              system's performance
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20840"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a href="/legalCollaboration" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">
                                Legal Collaboration
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Explore our network of technology partners and
                              discover new solutions and API's
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20841"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="/company">
                    <span>Company</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-31865"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue">
                            <div className="block-area-image">
                              <a href="/case-studies">
                                <img
                                  src={solutionsimg}
                                  className="menu-item-image"
                                  style={{ borderRadius: "10px" }}
                                  alt=""
                                  data-lazy-src=""
                                ></img>
                              </a>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title dark">
                                Experience how K24 and other Organizations transformed their operational
                                efficiency and control
                              </div>
                              <div className="item-content-area-description"></div>
                              <div className="item-content-area-button">
                                <a href="/gallery" className="btn blue p-2">
                                  Visit Gallery
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-20844"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a href="/about" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">About us</span>
                            </span>
                            <span className="item-content-area-title">
                              Priority specializes in providing organizations
                              with cutting-edge cloud-based business management
                              solutions.
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20842"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a href="/case-studies" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">Case studies</span>
                            </span>
                            <span className="item-content-area-title">
                              Real world examples of how forward-thinking
                              businesses use Priority to improve and grow
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-23000"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a href="/contact" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">Contact us</span>
                            </span>
                            <span className="item-content-area-title">
                              With offices and support worldwide, we are here
                              for you - let's connect!
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20847"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="/services">
                    <span>Services</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-36405"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue">
                            <div className="block-area-image">
                              <a href="/bookDemo">
                                
                                <img
                                  src={solutionsimg}
                                  className="menu-item-image"
                                  style={{ borderRadius: "10px" }}
                                  alt=""
                                  data-lazy-src=""
                                ></img>
                              </a>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title purple">
                                Proscene periodical
                              </div>
                              <div className="item-content-area-description">
                                Download our brochure today
                              </div>
                              <div className="item-content-area-button">
                                <a 
                                href={`${process.env.PUBLIC_URL}/ProsceneCompanyProfile.pdf`} 
                                  download="Proscene_Company_Profile.pdf"
                                  className="btn blue p-2"
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  Download now
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-20849"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="/unifiedCommunications"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Unified Communications
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Explore latest insights, trends, and updates in
                              business and technology
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20850"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a href="/trainingAndSupport" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">
                                Training And Support
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Browse and view brochures for detailed information
                              on our products, services, and solutions
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20851"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a href="/onSiteSupport" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">
                                On-Site Support
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Tune in for in-depth knowledge, industry trends,
                              and expert insights
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20852"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a href="/equipmentRepair" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">
                                Equipment Repair
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Browse our video library for product demos,
                              stories and advice
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20848"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a href="/leasing" className="item-link">
                            <span className="item-title-area">
                              <span className="item-title">Leasing</span>
                            </span>
                            <span className="item-content-area-title">
                              Commonly asked questions and answers to help you
                              reach your full potential
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20854"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/videoConferenceRental"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Video Conference Rental
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Dive into in-depth blog posts for unique
                              perspectives, expert opinions and great tips
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20853"
                  className="menu-item menu-item-type-custom menu-item-object-custom"
                >
                  <a href="/support">
                    <span>Support</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="site-header__button-wrapper">
              <a href="/bookDemo" className="site-header__button">
                Get a Demo
              </a>
            </div>

            <button
              type="button"
              className={`site-header__mobile-menu-btn js mobile-menu-btn ${
                isMobileMenuOpen ? "open" : ""
              }`}
              aria-label="Mobile nenu"
              title="Mobile menu"
              data-role="mobile-menu-action"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="mobile-menu-overlay js-mobile-menu-overlay"
        data-role="mobile-menu-action"
      ></div>
      <div
  id="mobile-menu"
  className={`mobile-menu js-mobile-menu ${
    isMobileMenuOpen ? "show" : ""
  }`}
>
  <div className="mobile-menu__container">
    <nav className="mobile-menu__nav">
      <ul
        id="menu-mobile-en"
        className="mobile-menu__menu sub-menu js-menu-wrapper"
      >
        {/* Solutions Menu */}
        <li
          id="mobile-menu-item-solutions"
          onClick={() => handleToggle("solutions")}
          className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${
            activeMenu["solutions"] ? "active" : ""
          }`}
        >
          <a
            href="/solutions"
            className="nav__link"
            onClick={(e) => e.preventDefault()}
          >
            Solutions<span className="sub-menu-toggle"></span>
          </a>
          <ul
            className={`sub-menu ${
              activeMenu["solutions"] ? "active" : ""
            }`}
            style={{
              maxHeight: activeMenu["solutions"] ? "1500px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            {/* Audio Visual Integration */}
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
              onClick={(e) => {
                e.stopPropagation();
                handleToggle("avIntegration");
              }}
            >
              <a href="/avIntegration" onClick={(e) => e.preventDefault()}>
                AV Integration
              </a>
              <ul
                className={`sub-menu ${
                  activeMenu["avIntegration"] ? "active" : ""
                }`}
                style={{
                  maxHeight: activeMenu["avIntegration"] ? "300px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <li className="menu-item">
                  <a href="/RoomBasedAV">Room-based AV</a>
                </li>
                <li className="menu-item">
                  <a href="/DigitalSignage">Digital Signage</a>
                </li>
                <li className="menu-item">
                  <a href="/DisplaySystems">Display Systems</a>
                </li>
              </ul>
            </li>

            {/* Collaboration Solutions */}
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
              onClick={(e) => {
                e.stopPropagation();
                handleToggle("collaborationSolutions");
              }}
            >
              <a href="/collaborationSolutions" onClick={(e) => e.preventDefault()}>
                Collaboration
              </a>
              <ul
                className={`sub-menu ${
                  activeMenu["collaborationSolutions"] ? "active" : ""
                }`}
                style={{
                  maxHeight: activeMenu["collaborationSolutions"] ? "400px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <li className="menu-item">
                  <a href="/teams-and-zoom-rooms">Teams & Zoom</a>
                </li>
                <li className="menu-item">
                  <a href="/hybrid-solutions">Hybrid Meetings</a>
                </li>
                <li className="menu-item">
                  <a href="/wireless-presentation-systems">Wireless Systems</a>
                </li>
                <li className="menu-item">
                  <div className="mobile-menu-banner">
                    <div className="banner-content">
                      <div className="banner-title">Certified for your AV Solution in 2025</div>
                      <div className="banner-description">Insight Report on AV Solutions.</div>
                      <a href="/certifications" className="btn-mobile">See certifications</a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            {/* Digital Media */}
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
              onClick={(e) => {
                e.stopPropagation();
                handleToggle("microsoft-modern-solutions");
              }}
            >
              <a href="/microsoft-modern-solutions" onClick={(e) => e.preventDefault()}>
                Microsoft Modern Work Solutions
              </a>
              <ul
                className={`sub-menu ${
                  activeMenu["microsoft-modern-solutions"] ? "active" : ""
                }`}
                style={{
                  maxHeight: activeMenu["microsoft-modern-solutions"] ? "300px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <li className="menu-item">
                  <a href="/iptv">IPTV</a>
                </li>
                <li className="menu-item">
                  <a href="/video-walls-and-LED-systems">Video Walls</a>
                </li>
                <li className="menu-item">
                  <a href="/interactive-kiosk-and-screens">Interactive Kiosks</a>
                </li>
              </ul>
            </li>

            {/* Automation Solutions */}
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
              onClick={(e) => {
                e.stopPropagation();
                handleToggle("automationSolutions");
              }}
            >
              <a href="/automationSolutions" onClick={(e) => e.preventDefault()}>
                Automation
              </a>
              <ul
                className={`sub-menu ${
                  activeMenu["automationSolutions"] ? "active" : ""
                }`}
                style={{
                  maxHeight: activeMenu["automationSolutions"] ? "300px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <li className="menu-item">
                  <a href="/room-scheduling-systems">Room Scheduling</a>
                </li>
                <li className="menu-item">
                  <a href="/touch-panel-control">Touch Control</a>
                </li>
                <li className="menu-item">
                  <a href="/av-automation">Building Automation</a>
                </li>
              </ul>
            </li>

            {/* Interactive Technology */}
            <li className="menu-item">
              <a href="/interactiveTechnology">Interactive Tech</a>
            </li>
          </ul>
        </li>

        {/* Sectors Menu */}
        <li
          id="mobile-menu-item-sectors"
          onClick={() => handleToggle("sectors")}
          className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${
            activeMenu["sectors"] ? "active" : ""
          }`}
        >
          <a
            href="/sectors"
            className="nav__link"
            onClick={(e) => e.preventDefault()}
          >
            Sectors<span className="sub-menu-toggle"></span>
          </a>
          <ul
            className={`sub-menu ${
              activeMenu["sectors"] ? "active" : ""
            }`}
            style={{
              maxHeight: activeMenu["sectors"] ? "600px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <li className="menu-item">
              <div className="mobile-menu-banner">
                <div className="banner-content">
                  <div className="banner-title">Recognized as the top AV Solution in 2025</div>
                  <div className="banner-description">Insight Report on AV Solutions for SMBs</div>
                  <a href="/contact" className="btn-mobile">Contact us</a>
                </div>
              </div>
            </li>
            {sectorsSubMenuItems.map((item, index) => (
              <li
                key={index}
                className="menu-item menu-item-type-custom menu-item-object-custom"
              >
                <a href={item.href}>
                  <span className="item-title">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>

        {/* Company Menu */}
        <li
          id="mobile-menu-item-company"
          onClick={() => handleToggle("company")}
          className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${
            activeMenu["company"] ? "active" : ""
          }`}
        >
          <a
            href="/company"
            className="nav__link"
            onClick={(e) => e.preventDefault()}
          >
            Company<span className="sub-menu-toggle"></span>
          </a>
          <ul
            className={`sub-menu ${
              activeMenu["company"] ? "active" : ""
            }`}
            style={{
              maxHeight: activeMenu["company"] ? "500px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <li className="menu-item">
              <div className="mobile-menu-banner">
                <div className="banner-content">
                  <div className="banner-title">See how we transformed operational efficiency</div>
                  <a href="/gallery" className="btn-mobile">Visit Gallery</a>
                </div>
              </div>
            </li>
            <li className="menu-item">
              <a href="/about">About Us</a>
            </li>
            <li className="menu-item">
              <a href="/case-studies">Case Studies</a>
            </li>
            <li className="menu-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </li>

        {/* Services Menu */}
        <li
          id="mobile-menu-item-services"
          onClick={() => handleToggle("services")}
          className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${
            activeMenu["services"] ? "active" : ""
          }`}
        >
          <a
            href="/services"
            className="nav__link"
            onClick={(e) => e.preventDefault()}
          >
            Services<span className="sub-menu-toggle"></span>
          </a>
          <ul
            className={`sub-menu ${
              activeMenu["services"] ? "active" : ""
            }`}
            style={{
              maxHeight: activeMenu["services"] ? "700px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <li className="menu-item">
              <div className="mobile-menu-banner">
                <div className="banner-content">
                  <div className="banner-title">Proscene periodical</div>
                  <div className="banner-description">Download our brochure today</div>
                  <a 
                    href="/data/profile.pdf" 
                    download="Proscene_Company_Profile.pdf"
                    className="btn-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download now
                  </a>
                </div>
              </div>
            </li>
            {servicesSubMenuItems.map((item, index) => (
              <li
                key={index}
                className="menu-item menu-item-type-custom menu-item-object-custom"
              >
                <a href={item.href}>
                  <span className="item-title">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>

        {/* Support Menu */}
        <li className="menu-item menu-item-type-custom menu-item-object-custom">
          <a href="/support">Support</a>
        </li>
      </ul>
    </nav>

    {/* Demo Button */}
    <a href="/bookDemo" className="mobile-menu__button">
      Get Demo
    </a>
  </div>
</div>
    </header>
  );
}

export default Navbar;
