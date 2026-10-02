import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%] relative">
      {/* Decorative background blobs */}
      <div className="fixed top-0 -left-40 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 -right-40 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointement/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
