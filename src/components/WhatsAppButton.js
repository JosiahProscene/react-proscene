import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/254716147610?text=Hello%20Proscene%20Systems,%20I%20would%20like%20assistance%20with%20AV%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={22} />
      <span className="font-semibold">Chat</span>
    </a>
  );
};

export default WhatsAppButton;
