import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-4">
      <div className="lg:w-8/12 mx-auto flex justify-between items-center">
        <aside>
          <a href="#home" className="text-2xl p-2 font-bold text-[#0d9488]">Imran</a>
        </aside>
        <aside>
          <p>© {new Date().getFullYear()}-Imran Ahmed. All right reserved.</p>
        </aside>
        <aside>
         <a href="#home"><FaArrowCircleUp className="text-3xl text-[#0d9488]  shadow-2xl" /></a>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
