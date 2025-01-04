import React, { useRef } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vadbk3",
        "template_pfeak1p",
        form.current,
        "7lGJvGVZeWienpTMV"
      )
      .then(
        () => {
          toast.success("email has been sent successfully.");
        },
        (error) => {
          toast.error(error.message);
        }
      );
  };

  return (
    <div id="contact" className="lg:mt-32 p-4 rounded lg:w-8/12 mx-auto">
      <section className="bg-gray-100 py-12 lg:p-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Contact Info Section */}
          <div className="lg:w-5/12">
            <div className="bg-black p-4 rounded-lg shadow-lg">
              <h2 className="text-3xl font-extrabold text-white mb-2">
                Contact Me
              </h2>
              <p className="text-lg text-white mb-6">
                Have a question or want to work together? Feel free to reach
                out.
              </p>
            </div>
            <div className="shadow-xl space-y-4 bg-white rounded-lg p-8">
              <div className="flex items-center gap-2 border-b-2 border-gray-300 pb-2">
                <MdLocalPhone />
                <h1 className="text-xl">+8801732890724</h1>
              </div>
              <div className="flex items-center gap-2 border-b-2 border-gray-300 pb-2">
                <FaEnvelope />
                <h1 className="text-xl">imrantahir9918@gmail.com</h1>
              </div>
              <div className="flex items-center gap-2 border-b-2 border-gray-300 pb-2">
                <FaMapLocationDot />
                <h1 className="text-xl">Companiganj, Sylhet, Bangladesh</h1>
              </div>
              <div className="flex items-center justify-center gap-4 pt-6">
                <a
                  href="https://www.linkedin.com/in/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-105 text-blue-500"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-105 text-blue-600"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-105 text-gray-800"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-105 text-blue-400"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-6/12 bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
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
                  name="from_name"
                  className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Your Name"
                  required
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
                  name="from_"
                  className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Your Email"
                  required
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
                name="messagel"
                rows="4"
                className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn btn-outline font-semibold py-3 rounded-md shadow-md transition"
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
