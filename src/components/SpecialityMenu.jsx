import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800 animate-fadeIn"
      id="speciality"
    >
      <h1 className="text-3xl md:text-4xl font-bold">
        Find by <span className="gradient-text">Speciality</span>
      </h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-500">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-x-scroll px-2">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="group flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-500 shadow-md group-hover:shadow-xl">
              <img
                className="w-16 sm:w-20 mb-1 rounded-full"
                src={item.image}
                alt=""
              />
            </div>
            <p className="mt-2 font-medium group-hover:text-indigo-600 transition-colors">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
