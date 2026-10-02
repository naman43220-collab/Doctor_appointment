import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 rounded-3xl px-6 md:px-10 lg:px-20 overflow-hidden shadow-2xl animate-fadeIn">
      {/* Decorative floating circles */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-0 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] relative z-10">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight animate-slideInLeft">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div
          className="flex flex-col md:flex-row items-center gap-3 text-white/90 text-sm font-light animate-slideInLeft"
          style={{ animationDelay: ".15s" }}
        >
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="group flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-slideInLeft"
          style={{ animationDelay: ".3s" }}
        >
          Book appointment
          <img
            className="w-3 transition-transform group-hover:translate-x-1"
            src={assets.arrow_icon}
            alt=""
          />
        </a>
      </div>

      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-3xl animate-slideInRight"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
