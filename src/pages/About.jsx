import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  const features = [
    {
      title: "Efficiency:",
      desc: "Streamlined appointment scheduling that fits into your busy lifestyle.",
    },
    {
      title: "Convenience:",
      desc: "Access to a network of trusted healthcare professionals in your area.",
    },
    {
      title: "Personalization:",
      desc: "Tailored recommendations and reminders to help you stay on top of your health.",
    },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="text-center text-3xl pt-10">
        <p className="font-bold">
          ABOUT <span className="gradient-text">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[360px] rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 animate-slideInLeft"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 animate-slideInRight">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service.
          </p>
          <b className="text-lg gradient-text">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-2xl my-6">
        <p className="font-bold">
          WHY <span className="gradient-text">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 gap-4">
        {features.map((item, i) => (
          <div
            key={i}
            className="group border border-indigo-100 bg-white/70 backdrop-blur px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-500 text-gray-600 cursor-pointer rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2"
          >
            <b className="text-base">{item.title}</b>
            <p className="group-hover:text-white/90">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
