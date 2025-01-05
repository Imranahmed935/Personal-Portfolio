import React from "react";
import logo from "../../assets/images/banner-2.png";

const About = () => {
  return (
    <div id="about" className="lg:mt-44 px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="text-lg text-gray-600 mt-2">
          The Person Behind the Projects.
        </p>
      </div>

      <div className="lg:w-8/12 mx-auto mt-12 flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg">
        {/* Left Image Section */}
        <div className=" lg:w-4/12">
          <img
            className="border border-[#0d9488] w-full rounded-lg"
            src={logo}
            alt="Profile"
          />
        </div>

        {/* Right Text Section */}
        <div className="p-8 lg:w-7/12 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Hello, I’m Imran Ahmed
          </h2>
          <p className="text-gray-600 mt-4 text-justify">
            A dedicated Frontend Developer with a focus on building responsive,
            interactive, and user-centric web interfaces. My expertise spans
            across React, TailwindCSS, JavaScript, and various modern web
            technologies. Outside of work, I’m a coffee enthusiast with a deep
            passion for movies, reading, and continuously expanding my skill
            set. I’m always eager to connect and collaborate on innovative
            projects. Let’s build something exceptional together.
          </p>

          <div className="flex justify-start items-center space-x-10 mt-6">
            {/* Practice Projects */}
            <div className="text-center">
              <span className="text-4xl font-bold bg-gray-800 text-white rounded-full py-2 px-4">
                70+
              </span>
              <h3 className="mt-4 text-gray-700">Practice Projects</h3>
            </div>

            {/* Social Links */}
              <button className="btn bg-[#0d9488] text-white">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

