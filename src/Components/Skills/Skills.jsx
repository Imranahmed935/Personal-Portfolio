import React from "react";
import html1 from "../../assets/skills/html.jpg";
import css1 from "../../assets/skills/css3.webp";
import git1 from "../../assets/skills/git.webp";
import image1 from "../../assets/skills/images.png";
import java1 from "../../assets/skills/JavaScript-logo.png";
import tail1 from "../../assets/skills/tailwind.png";
import react from "../../assets/skills/react.png";
import ex1 from "../../assets/skills/e555.webp";
import node1 from "../../assets/skills/node44.jpg";
import nextjs from '../../assets/skills/nextj.png';

const Skills = () => {
  return (
    <div className="lg:mt-32 px-8 py-12 ">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        My Skills
      </h1>
      <p className="text-xl text-center mb-14 text-gray-600">
        Crafting seamless experiences with modern technologies.
      </p>
      <div
        id="skills"
        className="w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  p-4"
      >
        {[ 
          { src: html1, title: "HTML", description: "Web Structure" },
          { src: css1, title: "CSS", description: "User Interface" },
          { src: tail1, title: "TailwindCSS", description: "UI Design" },
          { src: java1, title: "JavaScript", description: "Interactivity" },
          { src: react, title: "React", description: "Library" },
          { src: nextjs, title: "Next.js", description: "Framework" },
          { src: git1, title: "Git", description: "Version Control" },
          { src: image1, title: "MongoDB", description: "Database" },
          { src: node1, title: "NodeJS", description: "Web Server" },
          { src: ex1, title: "ExpressJS", description: "Node Framework" },
        ].map(({ src, title, description }, index) => (
          <div
            key={title}
            className="bg-white rounded-lg border border-gray-300 hover:border-teal-500 transition-all duration-300 ease-in-out p-4"
            data-aos="flip-left"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
          >
            <div className="flex justify-center items-center mb-4">
              <img className="w-24 h-24 rounded-full object-cover" src={src} alt={title} />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;