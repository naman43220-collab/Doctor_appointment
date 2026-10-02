import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const linkClass = ({ isActive }) =>
    `relative py-1 px-1 transition-all duration-300 hover:text-indigo-600 group ${
      isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <div className="sticky top-0 z-30 flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-200/60 glass backdrop-blur-xl rounded-b-xl px-4">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer hover:scale-105 transition-transform duration-300"
        src={assets.logo}
        alt=""
      />

      <ul className="hidden md:flex items-start gap-6 font-medium">
        {[
          { to: "/", label: "HOME" },
          { to: "/doctors", label: "ALL DOCTORS" },
          { to: "/about", label: "ABOUT" },
          { to: "/contact", label: "CONTACT" },
        ].map((item) => (
          <NavLink key={item.to} to={item.to} className={linkClass}>
            <li className="py-1 relative">
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <div className="relative">
              <img
                className="w-9 rounded-full ring-2 ring-indigo-200 group-hover:ring-indigo-400 transition-all"
                src={assets.profile_pic}
                alt=""
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <img
              className="w-2.5 transition-transform group-hover:rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 glass rounded-2xl flex flex-col gap-3 p-4 shadow-2xl animate-fadeIn">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-indigo-600 hover:pl-2 transition-all cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-indigo-600 hover:pl-2 transition-all cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-red-500 hover:pl-2 transition-all cursor-pointer border-t pt-3"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="gradient-btn text-white px-8 py-2.5 rounded-full font-light hidden md:block shadow-lg"
          >
            Create account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />

        {/* Mobile Menu */}
        <div
          className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-500`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-3 mt-5 px-5 text-lg font-medium">
            {["/", "/doctors", "/about", "/contact"].map((path, i) => (
              <NavLink key={i} onClick={() => setShowMenu(false)} to={path}>
                <p className="px-6 py-2.5 rounded-full inline-block hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                  {["HOME", "ALL DOCTORS", "ABOUT", "CONTACT"][i]}
                </p>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
