import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="animate-fadeIn">
      <p className="pb-3 mt-12 font-semibold text-lg text-zinc-700 border-b">
        My <span className="gradient-text">Appointments</span>
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-5 border-b border-gray-200 hover:bg-indigo-50/40 transition-colors rounded-lg px-2"
            key={index}
          >
            <div className="relative">
              <img
                className="w-32 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-md"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold text-base">
                {item.name}
              </p>
              <p className="text-indigo-500">{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-2">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-sm mt-2">
                <span className="text-neutral-700 font-medium">
                  Date & Time:
                </span>{" "}
                25, July, 2024 8:30 PM
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-indigo-600 text-center sm:min-w-48 py-2 border border-indigo-300 rounded-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-gray-300 rounded-full hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500 hover:text-white hover:border-transparent transition-all duration-300">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
