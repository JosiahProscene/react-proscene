import React, { useState } from "react";
import Footer from "../components/Footer";
import BookDemoPage from "./BookDemoPage.js";
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const HelpSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !interest) {
      setError('Please complete this required field.');
    } else {
      setError('');
      // Handle form submission logic here
    }
  };
  const handleClick = () => {
    window.open("https://www.google.com/maps/dir/-1.31072,36.8017408/proscene+systems+ltd/@-1.3139321,36.6764244,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x182f1737f3e963d7:0xdc908ed52a11bc93!2m2!1d36.7015552!2d-1.30039?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", "_blank"); 
  }

  const renderForm = () => {
    switch (selectedOption) {
      case "sales":
        return (
          <div className="bg-blue-100 p-10 px-11 rounded-lg shadow-md  mx-auto" style={{maxWidth:'800px', marginInline:'1em', margin:'0 auto'}}>
            <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">
              Contact our sales expert
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded-2xl"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full p-2 border border-gray-300 rounded-2xl"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded-2xl"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="tel"
                  placeholder="Enter your company name"
                  className="w-full p-2 border border-gray-300 rounded-2xl"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Country
                </label>
                <input
                  type="email"
                  placeholder="Enter your country name"
                  className="w-full p-2 border border-gray-300 rounded-2xl"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Interested In
                </label>
                <input
                  type="tel"
                  placeholder="Interested in..."
                  className="w-full p-2 border border-gray-300 rounded-2xl"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  What can we help you with?
                </label>
                <input
                  type="tel"
                  placeholder="What can we help you with?"
                  className="w-full p-2 border border-gray-300 rounded-2xl resize-none h-32"
                />
              </div>
              <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-xl w-1/2"
              >
                Submit
              </button>
            </div>
            </form>
          </div>
        );
      case "representative":
        return (
          <div className="bg-orange-100 p-6 rounded-lg shadow-md mx-auto" style={{maxWidth:'800px', marginInline:'1em', margin:'0 auto'}}>
            <h2 className="text-xl font-bold text-orange-700 mb-4 text-center">
              Speak to a Proscene representative
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="tel"
                  placeholder="Enter your company name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Country
                </label>
                <input
                  type="email"
                  placeholder="Enter your country name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Interested In
                </label>
                <input
                  type="tel"
                  placeholder="Interested in..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  What can we help you with?
                </label>
                <input
                  type="tel"
                  placeholder="What can we help you with?"
                  className="w-full p-2 border border-gray-300 rounded-2xl resize-none h-32"
                />
              </div>
              <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded-xl w-1/2"
              >
                Submit
              </button>
            </div>
            </form>
          </div>
        );
      case "partner":
        return (
          <div className="bg-purple-100 p-6 rounded-lg shadow-md mx-auto" style={{maxWidth:'800px', marginInline:'1em', margin:'0 auto'}}>
            <h2 className="text-xl font-bold text-purple-700 mb-4 text-center">
              Become a Proscene Partner
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="tel"
                  placeholder="Enter your company name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Country
                </label>
                <input
                  type="email"
                  placeholder="Enter your country name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Interested In
                </label>
                <input
                  type="tel"
                  placeholder="Interested in..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  What can we help you with?
                </label>
                <input
                  type="tel"
                  placeholder="What can we help you with?"
                  className="w-full p-2 border border-gray-300 rounded-2xl resize-none h-32"
                />
              </div>
              <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-500 text-white py-2 px-4 rounded-xl w-1/2"
              >
                Submit
              </button>
            </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-12 p-0 pb-0 mt-20">
      <h1 className="contact-header text-center mb-6">How can we help?</h1>
     
      {/* <p className="text-center contact-choice mb-6">Select an option below</p> */}
      {/* <div className="flex flex-col sm:flex-row items-center gap-2 mb-8 justify-around mx-auto" style={{maxWidth:'1000px'}} >
        <div
          className={`flex flex-col items-center p-4 rounded-lg ${
            selectedOption === "sales" ? "bg-blue-200" : "bg-blue-100"
          }`}
          onClick={() => setSelectedOption("sales")}
        >
          <input
            type="checkbox"
            checked={selectedOption === "sales"}
            onChange={() => setSelectedOption("sales")}
            className="appearance-none h-5 w-5 rounded-full border-2 border-blue-500 bg-white checked:bg-blue-500 mb-2 cursor-pointer"
          />
          <span className="text-center">I’m interested in software solutions</span>
        </div>
        <div
          className={`flex flex-col items-center p-4 rounded-lg ${
            selectedOption === "representative"
              ? "bg-orange-200"
              : "bg-orange-100"
          }`}
          onClick={() => setSelectedOption("representative")}
        >
          <input
            type="checkbox"
            checked={selectedOption === "representative"}
            onChange={() => setSelectedOption("representative")}
            className="appearance-none h-5 w-5 rounded-full border-2 border-orange-500 bg-white checked:bg-orange-500 mb-2 cursor-pointer"
          />
          <span className="text-center">I’m an existing customer</span>
        </div>
        <div
          className={`flex flex-col items-center p-4 rounded-lg  ${
            selectedOption === "partner" ? "bg-purple-200" : "bg-purple-100"
          }`}
          onClick={() => setSelectedOption("partner")}
        >
          <input
            type="checkbox"
            checked={selectedOption === "partner"}
            onChange={() => setSelectedOption("partner")}
            className="appearance-none h-5 w-5 rounded-full border-2 border-purple-500 bg-white checked:bg-purple-500 mb-2 cursor-pointer"
          />
          <span className="text-center">I’d like to be a Proscene Partner</span>
        </div>
      </div> */}
      {/* <div>{renderForm()}</div> */}
      <div>
      {/* <h2 className="mt-10 text-center contact-header mb-5">Contact Us</h2> */}
      <p className="text-center contact-choice mb-6">Find us at</p>
      </div>

      {/* Contact us */}
      <div className="pb-7 pt-4 mx-auto bg-white mr-4 ml-4">
      <div className=" mx-auto p-10 bg-white border border-orange-500 rounded-lg shadow-lg" style={{maxWidth:'600px'}}>
        <div className="flex items-center mb-2">
          <FaMapMarkedAlt className="mr-2 text-xl" />
          <span className=" font-semibold text-gray-600">Nairobi Karen Southern Bypass, Kenya</span>
        </div>
        <div className="flex items-center mb-2">
          <FaPhoneAlt className="mr-2 text-xl" />
          <a href="tel:+254713761269" className=" text-gray-600 text-base hover:text-[#f24b00] transition-colors">
                      +254 713 761 269
                    </a>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-xl" />
          <a href="mailto:Sales@proscene.co.ke" className="text-gray-600 text-base hover:text-[#f24b00] transition-colors">
                      Sales@proscene.co.ke
                    </a>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-xl" />
          <a href="mailto:Info@proscene.co.ke" className="text-gray-600 text-base hover:text-[#f24b00] transition-colors">
                      Info@proscene.co.ke
                    </a>
        </div>
        {/* <a
          href="https://www.google.com/maps"
          className="text-blue-500 text-sm text-base hover:underline"
        >
          See directions &rarr;
        </a> */}
         <button
      onClick={handleClick}
      className="border mt-3 border-orange-500 text-orange-500 bg-transparent px-4 py-2 rounded-lg transition duration-1000 hover:bg-[#16213D]-500 hover:text-orange-500"
    >
      See directions
    </button>
      </div>
    </div>

    {/* email us */}
    {/* <div className="mx-auto pt-16 pb-16 pl-8 pr-8 bg-blue-50">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 justify-between border border-blue-500 rounded-2xl" style={{maxWidth:'1100px', margin:'0 auto'}}>
    <div className="pl-8 pr-6 pt-8 pb-8">
      <h2 className="text-3xl font-bold text-purple-600">Our newsletter</h2>
      <p className="text-gray-600 mt-2">Sign up for our newsletter to receive updates straight to your inbox.</p>
      
      <div className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                Business email*
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                What are you interested in?*
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select an option</option>
                <option value="product-updates">Product Updates</option>
                <option value="news">News</option>
                <option value="offers">Offers</option>
              </select>
              <p className="text-red-500 text-sm mt-1">{error && error}</p>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className="w-full max-w-xs py-3 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="flex justify-center md:justify-end">
      
      <img
        src="https://www.priority-software.com/wp-content/uploads/2023/04/group-17441.png"
        alt="Illustration"
        className="w-full max-w-xs mx-auto rounded-lg my-8"
      />
    </div>
    </div>


    </div> */}
    <div className=" max-w-full"></div>
     <BookDemoPage/>
    </div>
  );
};

export default HelpSection;
