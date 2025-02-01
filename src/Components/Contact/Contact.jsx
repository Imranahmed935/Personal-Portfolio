import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
          toast.success("Email has been sent successfully.");
          e.target.reset();
        },
        (error) => {
          toast.error(error.message);
        }
      );
  };

  return (
    <div
      id="contact"
      className="lg:mt-32 p-6 lg:w-8/12 mx-auto bg-gray-50 rounded-xl "
      data-aos="zoom-in"
    >
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8" data-aos="fade-up">
        Get in Touch
      </h2>
      <section className="bg-white py-12 lg:px-10 px-4 rounded-lg" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12 space-y-8" data-aos="fade-right">
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg text-white">
              <p className="text-lg">
                Have a question or want to work together? Feel free to reach
                out.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b-2 pb-3 border-gray-200">
                <MdLocalPhone className="text-teal-500 text-xl" />
                <p className="text-lg text-gray-800">+8801732890724</p>
              </div>
              <div className="flex items-center gap-4 border-b-2 pb-3 border-gray-200">
                <FaEnvelope className="text-teal-500" />
                <p className="text-lg text-gray-800">
                  imrantahir9918@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4 border-b-2 pb-3 border-gray-200">
                <FaMapLocationDot className="text-teal-500" />
                <p className="text-lg text-gray-800">
                  Companiganj, Sylhet, Bangladesh
                </p>
              </div>
              <div className="flex gap-4 pt-6">
                <a
                  href="https://www.linkedin.com/in/imran-ahmed-frontend-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-teal-500 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/Imranahmed935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-800 transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-6/12 bg-white rounded-lg p-8 space-y-6"
            data-aos="fade-left"
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
                  className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  name="from_email"
                  className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                name="message"
                rows="4"
                className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full relative overflow-hidden py-3 bg-teal-600 text-white font-semibold rounded-md hover:text-teal-600 transition-all duration-300 group"
              data-aos="fade-up"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;