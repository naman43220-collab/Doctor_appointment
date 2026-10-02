import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 overflow-hidden shadow-2xl animate-fadeIn">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 relative z-10">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white animate-slideInLeft">
          <p>Book Appointment</p>
          <p className="mt-4">
            With <span className="text-yellow-300">100+</span> Trusted Doctors
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-700 font-medium px-8 py-3 rounded-full mt-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slideInLeft"
          style={{ animationDelay: ".2s" }}
        >
          Create account
        </button>
      </div>

      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative animate-slideInRight">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md animate-float"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
