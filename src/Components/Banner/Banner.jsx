import React from "react";
import picture from "../../assets/images/banner-2.png";

const Banner = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-b from-[#def1f6a2] to-[#ecf6f9a2] lg:w-8/12 mx-auto sm:flex items-center sm:p-16"
    >
      <div className="lg:w-3/4 space-y-6 px-2 p-24">
        <h1 className="text-xl lg:font-semibold">Welcome! I’m Imran Ahmed.</h1>
        <p className="lg:text-4xl text-3xl font-bold text-gray-600">
          A passionate <span className="text-indigo-500">Frontend</span> &{" "}
          <span className="text-indigo-500">MERN</span> Developer.
        </p>
        <p className="text-gray-600">
          As a Frontend Developer specializing in CSS, TailwindCSS, <br />{" "}
          JavaScript, and React.
        </p>
        <div>
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
      <div className="lg:w-1/2 hidden sm:block">
        <img
          className="px-2 border-b-8 rounded-full border-b-indigo-500 -ml-16"
          src={picture}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
