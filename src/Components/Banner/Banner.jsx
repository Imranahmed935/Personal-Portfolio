import React from "react";
import picture from "../../assets/images/banner-2.png";

const Banner = () => {
  return (
    <div id="home" className="bg-gradient-to-b from-[#def1f6a2] to-[#ecf6f9a2] lg:w-8/12 mx-auto sm:flex items-center sm:p-16">
      <div className="lg:w-3/4 space-y-6 px-2 mt-4">
        <h1 className="text-xl font-semibold">Welcome! I’m Imran Ahmed.</h1>
        <p className="lg:text-5xl text-3 font-bold text-gray-600">
          A passionate Frontend Web Developer.
        </p>
        <p className="text-gray-600">
          As a Frontend Developer specializing in CSS, TailwindCSS, <br /> JavaScript,
          and React.
        </p>
        <button className="btn bg-[#0d9488] text-white rounded-full">
          <a
            href={picture}
            download="My_CV.png"
            className="no-underline text-current"
          >
            Download CV
          </a>
        </button>
      </div>
      <div className="lg:w-1/2">
        <img className="px-2 rounded-full -ml-16" src={picture} alt="" />
      </div>
    </div>
  );
};

export default Banner;
