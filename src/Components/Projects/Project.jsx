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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-4">
        {
          projects.map(project => <div className="card bg-base-100 rounded-none">
            <figure>
              <img
              className="w-96 h-64"
                src={project.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold">
               {project.name}
               
              </h2>
              <div className="flex gap-10 mt-4">
                <a className="badge badge-outline badge-secondary" href={project.link}>Live</a>
                <a className="badge badge-outline" href={project.client}>Client</a>
                <a className="badge badge-outline" href={project.server}>Server</a>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Project;
