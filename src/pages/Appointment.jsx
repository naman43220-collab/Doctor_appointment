import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="animate-fadeIn">
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img
              className="relative bg-gradient-to-br from-indigo-50 to-purple-50 w-full sm:max-w-72 rounded-2xl"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-indigo-100 rounded-2xl p-8 py-7 bg-white/80 backdrop-blur mx-2 sm:mx-0 mt-[-80px] sm:mt-0 shadow-xl">
            <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-2 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-3 border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-4">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-2 leading-6">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-5">
              Appointment fee:{" "}
              <span className="gradient-text font-bold text-lg">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700">
          <p className="text-lg">Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4 pb-2">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-2xl cursor-pointer transition-all duration-300 ${
                    slotIndex === index
                      ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                      : "border border-gray-200 bg-white hover:border-indigo-300 hover:-translate-y-1"
                  }`}
                  key={index}
                >
                  <p className="text-xs">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p className="text-lg font-bold">
                    {item[0] && item[0].datetime.getDate()}
                  </p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-5">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                    item.time === slotTime
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                      : "text-gray-500 border border-gray-300 bg-white hover:border-indigo-400 hover:text-indigo-600"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <button className="gradient-btn text-white text-sm font-medium px-14 py-3 rounded-full my-6 shadow-lg">
            Book an appointment
          </button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
