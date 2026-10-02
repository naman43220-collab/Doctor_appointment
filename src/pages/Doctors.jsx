import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="animate-fadeIn">
      <p className="text-gray-600 text-lg">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-2 px-5 rounded-full text-sm transition-all sm:hidden shadow-md ${showFilter ? "gradient-btn text-white" : "bg-white border border-gray-300"}`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>

        <div
          className={`flex-col gap-4 text-sm ${showFilter ? "flex" : "hidden sm:flex"}`}
        >
          {specialities.map((spec) => {
            const isActive = speciality === spec;
            return (
              <p
                key={spec}
                onClick={() =>
                  speciality === spec
                    ? navigate("/doctors")
                    : navigate(`/doctors/${spec}`)
                }
                className={`w-[94vw] sm:w-auto pl-4 py-2.5 pr-16 border rounded-full transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-lg"
                    : "bg-white border-gray-200 text-gray-700 hover:border-indigo-300"
                }`}
              >
                {spec}
              </p>
            );
          })}
        </div>

        <div className="w-full grid grid-cols-auto gap-5 gap-y-8">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointement/${item._id}`)}
              className="group border border-indigo-100 bg-white/80 backdrop-blur rounded-2xl overflow-hidden cursor-pointer card-hover shadow-sm"
              key={index}
            >
              <div className="overflow-hidden">
                <img
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 w-full group-hover:scale-110 transition-transform duration-700"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full animate-pulse-ring"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-semibold mt-1 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </p>
                <p className="text-gray-500 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
