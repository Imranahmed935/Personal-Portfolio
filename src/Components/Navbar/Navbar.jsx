import React from "react";
import picture from "../../assets/images/portfolio.png";

const Navbar = () => {
  return (
    <div className="navbar lg:w-8/12 mx-auto ">
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
              <a>Home</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="text-3xl font-bold text-black">Imran</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-white menu-horizontal  px-6 bg-gray-800 rounded-full">
          <li>
            <a>Home</a>
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
        <button>
          <a
            href={picture}
            download="My_CV.png"
            className="btn btn-outline rounded-full"
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
