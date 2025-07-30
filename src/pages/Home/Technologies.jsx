// src/components/TechDomainsSection.jsx
import React from "react";
import { FaLaptopCode, FaPython, FaBrain, FaChartBar } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const domains = [
  {
    name: "Full Stack",
    icon: <FaLaptopCode size={48} className="text-sky-600" />,
  },
  {
    name: "Python",
    icon: <FaPython size={48} className="text-yellow-400" />,
  },
  {
    name: "Data Science",
    icon: <FaChartBar size={48} className="text-emerald-500" />,
  },
  {
    name: "AI / ML",
    icon: <GiArtificialIntelligence size={48} className="text-purple-600" />,
  },
  {
    name: "Data Analyst",
    icon: <SiTensorflow size={48} className="text-orange-500" />,
  },
];

const Technologies = () => {
  return (
    <section className="px-6 py-14 mt-8 bg-sky-50 text-center">
      <h2 className="text-3xl font-bold text-sky-800 mb-8">Technologies We Work With</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
          >
            {domain.icon}
            <p className="text-sm font-medium text-gray-700">{domain.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
