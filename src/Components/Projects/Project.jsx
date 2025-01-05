import React from "react";
import port1 from "../../assets/Port/session1.jpg";
import port2 from "../../assets/Port/session2.webp";
import port3 from "../../assets/Port/session3.jpg";
import { FaArrowUp } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Frontend Project 1",
    image: port1,
    link: "https://dazzling-horse-41d2d8.netlify.app",
  },
  {
    id: 2,
    name: "Frontend Project 2",
    image: port2,
    link: "https://stellar-moonbeam-2044ff.netlify.app",
  },
  {
    id: 3,
    name: "Frontend Project 3",
    image: port3,
    link: "https://dazzling-horse-41d2d8.netlify.app",
  },
  {
    id: 4,
    name: "Frontend Project 4",
    image: port2,
    link: "https://stellar-moonbeam-2044ff.netlify.app",
  },
  {
    id: 5,
    name: "Frontend Project 5",
    image: port3,
    link: "https://dazzling-horse-41d2d8.netlify.app",
  },
  {
    id: 6,
    name: "Frontend Project 6",
    image: port1,
    link: "https://stellar-moonbeam-2044ff.netlify.app",
  },
];

const Project = () => {
  return (
    <div id="project" className="lg:mt-44 lg:w-8/12 mx-auto px-4 lg:px-0">
      <h1 className="text-4xl text-center font-bold text-gray-800">
        My Projects
      </h1>
      <p className="text-lg text-center py-2 mb-8 text-gray-600">
        Here’s a collection of projects that demonstrate my skills and creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
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
              <span className="text-white text-lg font-bold">
                {project.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
