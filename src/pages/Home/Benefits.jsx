// src/components/InternshipBenefitsSection.jsx
import React from "react";
import { FaCertificate, FaLaptopCode, FaHandshake, FaUserCheck, FaRocket } from "react-icons/fa";

const benefits = [
  {
    icon: <FaLaptopCode size={30} className="text-sky-600" />,
    title: "Real-World Experience",
    desc: "Work on live projects to gain practical, job-ready skills.",
  },
  {
    icon: <FaCertificate size={30} className="text-sky-600" />,
    title: "Certification",
    desc: "Receive an internship certificate to boost your resume.",
  },
  {
    icon: <FaHandshake size={30} className="text-sky-600" />,
    title: "Mentorship",
    desc: "Get guided by industry experts throughout the program.",
  },
  {
    icon: <FaUserCheck size={30} className="text-sky-600" />,
    title: "Placement Support",
    desc: "Access exclusive job opportunities and interview prep.",
  },
  {
    icon: <FaRocket size={30} className="text-sky-600" />,
    title: "Skill Acceleration",
    desc: "Accelerate your learning with structured training plans.",
  },
];

const Benefits = () => {
  return (
    <section className="px-6 py-14 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
          Benefits of Our Internship Program
        </h2>
        <p className="text-gray-600 mb-10">
          Unlock your career potential with these exclusive perks
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-sky-50 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
