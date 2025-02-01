import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#d6eff5a2] lg:w-8/12 mx-auto fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <a className="text-2xl p-2 font-bold text-[#0d9488] ">Imran</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-white menu-horizontal px-6 bg-[#0d9488] rounded-full">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="navbar-end">
          <a
            href="https://drive.google.com/uc?export=download&id=1-4TDgLsnwXCmnJ1un6M1z3b6-n0APVZl"
            className="btn bg-[#0d9488] text-white hover:text-[#0d9488] transition-all duration-300 rounded-full relative overflow-hidden group"
            download
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
