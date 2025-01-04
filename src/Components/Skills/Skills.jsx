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

const Skills = () => {
  return (
    <div className="lg:mt-32 bg-slate-100 p-4 rounded lg:w-9/12 mx-auto">
      <h1 className="text-3xl font-bold">Essential Tools I use</h1>
      <p className="text-xl text-gray-600">
        Building great websites with modern tools and technologies.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <div className="flex gap-2 w-80 border border-gray-500 px-2 rounded-lg">
          <img className="w-14 h-14 rounded" src={html1} alt="" />
          <div>
            <h1 className="font-bold">HTML</h1>
            <h1>web Structure</h1>
          </div>
        </div>
        <div className="flex w-80 border border-gray-500 px-2 rounded-lg py-2 gap-2">
          <img className="w-14 h-14 rounded" src={css1} alt="" />
          <div>
            <h1 className="font-bold">CSS</h1>
            <h1>User Interface</h1>
          </div>
        </div>
        <div className="flex w-80 border  border-gray-500 px-2 rounded-lg py-2 gap-2">
          <img className="w-14 h-14 rounded" src={tail1} alt="" />
          <div>
            <h1 className="font-bold">TailwindCSS</h1>
            <h1>User Interface</h1>
          </div>
        </div>
        <div className="flex w-80 border  border-gray-500 px-2 rounded-lg py-2 gap-2">
          <img className="w-14 h-14 rounded" src={java1} alt="" />
          <div>
            <h1 className="font-bold">Javascript</h1>
            <h1>Interaction</h1>
          </div>
        </div>
        <div className="flex w-80 border border-gray-500 px-2 rounded-lg py-2 gap-2">
          <img className="w-14 h-14 rounded"src={react} alt="" />
          <div>
            <h1 className="font-bold">React</h1>
            <h1>Framework</h1>
          </div>
        </div>
        <div className="flex w-80 border border-gray-500 px-2 rounded-lg py-2 gap-2">
          <img className="w-14 h-14 rounded" src={git1} alt="" />
          <div>
            <h1 className="font-bold">Git</h1>
            <h1>Version Control</h1>
          </div>
        </div>
        <div className="flex w-80 border border-gray-500 px-2 rounded-lg py-2 gap-2">
          <img className="w-14 h-14 rounded" src={image1} alt="" />
          <div>
            <h1 className="font-bold">MongoDB</h1>
            <h1>Database</h1>
          </div>
        </div>
        <div className="flex w-80 border border-gray-500 px-2 rounded-lg py-2 gap-2">
          <img className="w-14 h-14 rounded" src={node1} alt="" />
          <div>
            <h1 className="font-bold">NodeJS</h1>
            <h1>Web Server</h1>
          </div>
        </div>
        <div className="flex w-80 border border-gray-500 px-2 rounded-lg py-2 gap-2">
          <img className="w-14 h-14 rounded" src={ex1} alt="" />
          <div>
            <h1 className="font-bold">ExpressJS</h1>
            <h1>Node Framework</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
