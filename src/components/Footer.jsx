import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 mt-40">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-500 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold mb-5 gradient-text">COMPANY</p>
          <ul className="flex flex-col gap-3 text-gray-500">
            {["Home", "About us", "Contact us", "Privacy policy"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-indigo-600 hover:pl-2 transition-all cursor-pointer"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold mb-5 gradient-text">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-3 text-gray-500">
            <li className="hover:text-indigo-600 transition-colors cursor-pointer">
              8095381183
            </li>
            <li className="hover:text-indigo-600 transition-colors cursor-pointer">
              anils.pvg1234@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-gray-200" />
        <p className="py-5 text-sm text-center text-gray-500">
          Copyright 2024 @ Prescripto — All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
