import React from "react";
import port1 from "../../assets/Port/session1.jpg";
import port2 from "../../assets/Port/session2.webp";
import port3 from "../../assets/Port/session3.jpg";
import { FaArrowUp } from "react-icons/fa";

// Updated projects array with unique links
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
    <div className="py-24 lg:w-8/12 mx-auto">
      <h1 className="text-3xl font-bold py-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaArrowUp className="text-white text-3xl mb-2 hover:text-gray-300 transition-colors duration-300" />
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
