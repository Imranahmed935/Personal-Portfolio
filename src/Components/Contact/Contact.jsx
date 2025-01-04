import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaTwitter } from "react-icons/fa";
import {FaMapLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div id="#contact" className="lg:mt-32 p-4 rounded lg:w-8/12 mx-auto">
      <section className="bg-gray-100 py-12 lg:p-10">
        <div className="flex items-center">
          <div className="lg:w-5/12">
            <div className=" bg-black p-2 rounded-lg  shadow-lg">
            <h2 className="text-3xl font-extrabold text-white mb-2">
            Contact me
            </h2>
            <p className="text-lg text-white mb-6">
              Have a question or want to work together? Feel free to reach out.
            </p>
            </div>
            <div className="shadow-xl space-y-4 bg-white rounded-lg  p-14">
              <div className="flex items-center gap-2 border-b-2 border-b-grey-700">
                <MdLocalPhone />
                <h1 className="text-xl">+8801732890724</h1>
              </div>
              <div className="flex items-center gap-2 border-b-2 border-b-grey-700">
                <FaEnvelope />
                <h1 className="text-xl">imrantahir9918@gmail.com</h1>
              </div>
              <div className="flex items-center gap-2 border-b-2 border-b-grey-700">
                <FaMapLocationDot />
                <h1 className="text-xl">Companiganj, sylhet, Bangladesh</h1>
              </div>
              <div className="flex items-center lg:ml-60 pt-10 gap-4 ">
                <div className="text-2xl hover:scale-105"><FaLinkedin/></div>
                <div className="text-2xl hover:scale-105"><FaFacebook/></div>
                <div className="text-2xl hover:scale-105"><FaGithub/></div>
                <div className="text-2xl hover:scale-105"><FaTwitter/></div>
              </div>
            </div>
          </div>

          <form className=" mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn btn-outline  font-semibold py-3 rounded-md shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
