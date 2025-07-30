import React, { useState } from "react";
import { Link } from "react-router-dom";
const programs = [
  {
    id: 1,
    title: "Full Stack Web Development",
    slug: "fullstack",
    duration: "6 Months",
    level: "Beginner to Advanced",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    internship: "100% Internship Guarantee",
  },
  {
    id: 2,
    title: "Data Science & ML",
    slug: "datascience",
    duration: "5 Months",
    level: "Intermediate",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow"],
    internship: "Internship Guaranteed",
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    slug: "uiux",
    duration: "3 Months",
    level: "Beginner",
    technologies: ["Figma", "Adobe XD", "Design Thinking", "Prototyping"],
    internship: "Includes Internship Project",
  },
  {
    id: 4,
    title: "DevOps & Cloud Engineering",
    slug: "devops",
    duration: "4 Months",
    level: "Intermediate",
    technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    internship: "Guaranteed Cloud Internship",
  },
  {
    id: 5,
    title: "Mobile App Development",
    slug: "mobile",
    duration: "5 Months",
    level: "Beginner to Intermediate",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
    internship: "Internship Opportunities Available",
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    slug: "cybersecurity",
    duration: "3 Months",
    level: "Intermediate",
    technologies: ["Network Security", "Ethical Hacking", "Wireshark", "Nmap"],
    internship: "Includes Security Audit Internship",
  },
  {
    id: 7,
    title: "AI with Python",
    slug: "aiml",
    duration: "6 Months",
    level: "Advanced",
    technologies: ["Python", "Keras", "OpenCV", "NLP", "PyTorch"],
    internship: "100% AI Internship Support",
  },
  {
    id: 8,
    title: "Backend API Development",
    slug: "backend",
    duration: "4 Months",
    level: "Intermediate",
    technologies: ["Node.js", "Express", "MongoDB", "Postman", "JWT"],
    internship: "Paid API Internships Available",
  },
  {
    id: 9,
    title: "Business Analytics",
    slug: "dataanalyst",
    duration: "3.5 Months",
    level: "Beginner",
    technologies: ["Excel", "SQL", "Power BI", "Tableau"],
    internship: "Business Project Internship Included",
  },
];

const Programs = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(programs.length);
  };

  return (
    <section className="mt-[8ch] px-6 py-12 bg-white">
      <h2 className="text-4xl font-bold text-center text-sky-800 mb-10">
        Our Programs
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.slice(0, visibleCount).map((program) => (
          <div
            key={program.id}
            className="bg-sky-50 rounded-xl shadow-md p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-sky-700 mb-2">
              {program.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Duration:</strong> {program.duration}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Skill Level:</strong> {program.level}
            </p>

            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {program.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-sky-100 text-sky-800 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-green-600 font-medium mb-4 mt-auto">
              🎯 {program.internship}
            </p>

            <Link to={`/programs/${program.slug}`} className="w-full">
              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Load More Button Centered Below Cards */}
      {visibleCount < programs.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Programs;
