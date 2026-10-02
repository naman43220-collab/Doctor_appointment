import Hero from "../components/Hero";
import DoctorCard from "../components/DoctorCard";
import SpecialityCard from "../components/SpecialityCard";
import { doctors, specialities } from "../data/doctors";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* ===== Hero Section ===== */}
      <Hero />

      {/* ===== Find by Speciality ===== */}
      <section className="section-padding" id="speciality">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Find by Speciality</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <div className="row g-3 g-md-4 justify-content-center">
            {specialities.map((spec) => (
              <SpecialityCard key={spec.name} speciality={spec} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Top Doctors ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Top Doctors to Book</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Simply browse through our extensive list of trusted doctors.
            </p>
          </div>
          <div className="row">
            {doctors.slice(0, 8).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link
              to="/doctors"
              className="btn btn-primary-custom px-5 rounded-pill"
            >
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Trust Banner ===== */}
      <section className="section-padding bg-primary-custom text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">
            Book Appointment With 100+ Trusted Doctors
          </h2>
          <Link
            to="/login"
            className="btn btn-light btn-lg rounded-pill mt-3 px-4 fw-semibold"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
