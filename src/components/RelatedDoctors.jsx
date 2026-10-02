import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId,
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-bold">
        Top <span className="gradient-text">Doctors</span> to Book
      </h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-500">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-5 pt-8 gap-y-8 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointement/${item._id}`);
              scrollTo(0, 0);
            }}
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
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="mt-10 px-12 py-3 rounded-full font-medium text-gray-700 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-500 shadow-md hover:shadow-xl"
      >
        more
      </button>
    </div>
  );
};

export default RelatedDoctors;
