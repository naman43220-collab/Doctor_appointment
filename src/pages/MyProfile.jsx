import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "anis.pvg1234@gmail.com",
    phone: "998000750",
    Address: {
      line1: "57th Cross Richmond",
      line2: "Circle, Church Road, India",
    },
    gender: "Male",
    dob: "2000-05-04",
  });

  const [isEdit, setIsEdit] = useState(false);

  const inputCls =
    "bg-indigo-50/60 focus:bg-white border border-transparent focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 outline-none rounded-lg px-3 py-1.5 transition-all w-full";

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm animate-fadeIn">
      <div className="relative group w-36">
        <img
          className="w-36 rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
          src={userData.image}
          alt=""
        />
        <div className="absolute inset-0 rounded-2xl ring-2 ring-indigo-400/0 group-hover:ring-indigo-400/60 transition-all"></div>
      </div>

      {isEdit ? (
        <input
          className="bg-indigo-50/60 text-3xl font-medium max-w-60 mt-4 rounded-lg px-3 py-1 focus:ring-2 focus:ring-indigo-200 outline-none"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-bold text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-gray-200 h-[1px] border-none my-2" />

      <div>
        <p className="gradient-text font-semibold underline mt-3">
          CONTACT INFORMATION
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-4 text-neutral-700 items-center">
          <p className="font-medium">Email id:</p>
          <p className="text-indigo-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className={inputCls + " max-w-52"}
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-indigo-500">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div className="flex flex-col gap-2">
              <input
                className={inputCls}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    Address: { ...prev.Address, line1: e.target.value },
                  }))
                }
                value={userData.Address.line1}
                type="text"
              />
              <input
                className={inputCls}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    Address: { ...prev.Address, line2: e.target.value },
                  }))
                }
                value={userData.Address.line2}
                type="text"
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {userData.Address.line1}
              <br />
              {userData.Address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="gradient-text font-semibold underline mt-4">
          BASIC INFORMATION
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-4 text-neutral-700 items-center">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-24 bg-indigo-50/60 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-indigo-200"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-40 bg-indigo-50/60 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-indigo-200"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="gradient-btn text-white px-8 py-2.5 rounded-full shadow-lg font-medium"
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className="border-2 border-indigo-400 text-indigo-600 px-8 py-2.5 rounded-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 font-medium"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
