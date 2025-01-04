import React from "react";
import picture from "../../assets/images/portfolio.png";

const Banner = () => {
  return (
    <div className="lg:w-8/12 mx-auto sm:flex items-center gap-24 sm:p-16">
      <div className="lg:w-3/4 space-y-4 px-2 mt-4 border-l-4 border-[#7cb7c4]">
        <h1 className="text-3xl font-bold text-gradient-to-b from-white to-[#d1fffd]">
          Hello, I'm Frontend Developer.
        </h1>
        <p className="text-xl text-gray-600">
          I specialize in crafting interactive, responsive, and accessible web
          interfaces designed to deliver exceptional user experiences and
          captivate audiences.
        </p>
        <button className="btn btn-outline">
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
        <img
          className="bg-gradient-to-b from-white to-[#c9edf5a2] rounded-b-3xl px-2"
          src={picture}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
