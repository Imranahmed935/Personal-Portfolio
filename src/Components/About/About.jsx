import React, { useEffect } from "react";
import logo from "../../assets/images/banner-2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="about" className="lg:mt-32 px-6 a">
      {/* About Me Heading */}
      <div className="text-center">
        <h1 
          data-aos="fade-up" 
          data-aos-delay="100" 
          className="text-4xl font-bold text-gray-800"
        >
          About Me
        </h1>
        <p 
          data-aos="fade-up" 
          data-aos-delay="200" 
          className="text-lg text-gray-600 mt-2"
        >
          The Person Behind the Projects.
        </p>
      </div>

      {/* About Content Section */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="300" 
        className="lg:w-8/12 mx-auto mt-12 flex flex-col lg:flex-row items-center  rounded-lg"
      >
        {/* Left Image Section */}
        <div className="lg:w-4/12">
          <img
            data-aos="fade-right" 
            data-aos-delay="400" 
            className="border border-indigo-600 w-full rounded-3xl rounded-br-none"
            src={logo}
            alt="Profile"
          />
        </div>

        {/* Right Text Section */}
        <div className="p-8 lg:w-7/12 space-y-6">
          <h2 
            data-aos="fade-left" 
            data-aos-delay="500" 
            className="text-2xl font-semibold text-gray-800"
          >
            Hello, I’m Imran Ahmed
          </h2>
          <p 
            data-aos="fade-left" 
            data-aos-delay="600" 
            className="text-gray-600 mt-4 text-justify"
          >
            A dedicated Frontend Developer with a focus on building responsive,
            interactive, and user-centric web interfaces. My expertise spans
            across React, TailwindCSS, JavaScript, and various modern web
            technologies. Outside of work, I’m a coffee enthusiast with a deep
            passion for movies, reading, and continuously expanding my skill
            set. I’m always eager to connect and collaborate on innovative
            projects. Let’s build something exceptional together.
          </p>

          {/* Practice Projects and Contact Button */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="700" 
            className="flex justify-start items-center space-x-10 mt-6"
          >
            {/* Practice Projects */}
            <div className="text-center">
              <span 
                data-aos="zoom-in" 
                data-aos-delay="800" 
                className="lg:text-4xl text-2xl font-bold text-indigo-500 rounded-full py-2 px-4"
              >
                70+
              </span>
              <h3 
                data-aos="fade-up" 
                data-aos-delay="900" 
                className="mt-4 text-gray-700"
              >
                Practice Projects
              </h3>
            </div>

            {/* Contact Me Button */}
            <a
              href="#contact"
              data-aos="zoom-in" 
              data-aos-delay="1000" 
              className="relative overflow-hidden px-6 py-2 rounded-full border border-gray-400 text-white bg-[#0d9488] hover:text-[#0d9488] transition-all duration-300 group"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;