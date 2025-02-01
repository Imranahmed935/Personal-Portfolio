import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";
import pickify from "../../assets/pickify/pickify.png";
import champion from "../../assets/pickify/champion-2.png";
import pms from "../../assets/pickify/pms.png";

const projects = [
  {
    id: 1,
    name: "Product Recommendation System",
    client: "https://github.com/Imranahmed935/Pickify",
    server: "https://github.com/Imranahmed935/Pickify_server",
    image: pickify,
    link: "https://dazzling-horse-41d2d8.netlify.app",
  },
  {
    id: 2,
    name: "E-commerce website",
    client: "https://github.com/Imranahmed935/Champion",
    server: "https://github.com/Imranahmed935/Champion-Server",
    image: champion,
    link: "https://fir-two-e9ce5.web.app",
  },
  {
    id: 3,
    name: "Parcel Management System",
    client: "https://github.com/Imranahmed935/Parcel-Management-Client",
    server: "https://github.com/Imranahmed935/Parcel-Management-Server",
    image: pms,
    link: "https://swiftships.netlify.app",
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="project" className="lg:mt-32 lg:w-8/12 mx-auto px-4 lg:px-0">
      <h1 className="text-4xl text-center font-bold text-gray-800" data-aos="zoom-in">
        My Projects
      </h1>
      <p className="text-lg text-center py-2 mb-8 text-gray-600" data-aos="zoom-in">
        Here’s a collection of projects that demonstrate my skills and creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
            data-aos="zoom-in"
          >
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className="w-full h-64 bg-cover bg-center"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaArrowUp className="text-white text-5xl mb-4 hover:scale-110 transition-transform duration-300" />
              </a>
              <span className="text-white text-lg font-bold">{project.name}</span>
            </div>
          </div>
        ))}
        {projects.map((project) => (
          <div className="space-y-2" key={project.id} data-aos="zoom-in">
            <h1 className="text-lg">{project?.name}</h1>
            <div className="flex gap-10">
              <a className="font-bold text-blue-500" href={project.client}>Client</a>
              <a className="font-bold text-blue-500" href={project.server}>Server</a>
              <a className="font-bold text-blue-500" href={project.link}>Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
