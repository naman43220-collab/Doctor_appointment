import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center text-3xl pt-10">
        <p className="font-bold">
          CONTACT <span className="gradient-text">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-12 mb-28 text-sm items-center">
        <img
          className="w-full md:max-w-[360px] rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 animate-slideInLeft"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6 animate-slideInRight">
          <p className="font-semibold text-lg gradient-text">OUR OFFICE</p>
          <p className="text-gray-500 leading-7">
            Bangalore Medical College and Research Institute,
            <br />
            Fort, Krishna Rajendra Rd, Kalasipalya, Bengaluru, Karnataka 560002
          </p>
          <p className="text-gray-500 leading-7">
            Tel: (08136) 313466 <br />
            Email: anils.pvg@gmail.com
          </p>
          <p className="font-semibold text-lg gradient-text">
            Careers at PRESCRIPTO
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="gradient-btn text-white px-8 py-4 text-sm rounded-full shadow-lg">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
