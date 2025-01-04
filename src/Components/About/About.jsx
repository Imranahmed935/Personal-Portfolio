import React from "react";
import logo from '../../assets/images/portfolio.png'

const About = () => {
  return (
    <div className="lg:w-9/12 mt-10 mx-auto space-y-4 bg-slate-100 p-4 rounded">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-xl text-gray-600">
        Hello, I’m Imran Ahmed, a dedicated Frontend Developer with a focus on
        building responsive, interactive, and user-centric web interfaces. My
        expertise spans across React, TailwindCSS, JavaScript, and various
        modern web technologies. In addition to my development work, I am a
        proud member of Bangladesh Police, Outside of work, I’m a coffee
        enthusiast with a deep passion for movies, reading, and continuously
        expanding my skill set. I’m always eager to connect and collaborate on
        innovative projects. Let’s build something exceptional together.
      </p>
      <div className="flex justify-between">
       <div className="space-y-2">
       <span className="text-xl font-bold p-2 bg-black rounded-full text-white">70+</span>
       <h1>Practice Projects</h1>
       </div>
       <div>
        <img className="w-14 h-14 rounded-full" src={logo} alt="" />
       </div>
      </div>
    </div>
  );
};

export default About;
