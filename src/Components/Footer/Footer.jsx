import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-6">
      <div className="lg:w-8/12 mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        {/* Logo Section */}
        <aside>
          <a href="#home" className="text-2xl font-bold text-[#0d9488]">
            Imran
          </a>
        </aside>

        {/* Copyright Text */}
        <aside>
          <p className="text-center text-sm lg:text-base">
            © {new Date().getFullYear()} - Imran Ahmed. All rights reserved.
          </p>
        </aside>

        {/* Scroll to Top Icon */}
        <aside>
          <a href="#home">
            <FaArrowCircleUp className="text-3xl text-[#0d9488]" />
          </a>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

