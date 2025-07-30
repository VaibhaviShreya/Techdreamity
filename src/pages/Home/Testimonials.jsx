import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Software Engineer",
    company: "Google",
    rating: 5,
    quote:
      "The training helped me build confidence and land my dream job. Everything was hands-on and practical!",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Frontend Developer",
    company: "Microsoft",
    rating: 4,
    quote:
      "I loved the structured roadmap and projects. It truly prepared me for the challenges of a real job.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Data Analyst",
    company: "Accenture",
    rating: 4,
    quote:
      "The support and mentorship were top-notch. I still use what I learned here every day in my work.",
  },
  {
  id: 4,
  name: "Sneha Kapoor",
  role: "UI/UX Designer",
  company: "Adobe",
  rating: 3,
  quote:
    "This program gave me a solid foundation in design principles and Figma. I got placed right after completing it.",
},
{
  id: 5,
  name: "Kunal Joshi",
  role: "Backend Developer",
  company: "Amazon",
  rating:3 ,
  quote:
    "The backend modules were super detailed. I especially liked the real-world API development section.",
},
{
  id: 6,
  name: "Ishita Roy",
  role: "Machine Learning Engineer",
  company: "NVIDIA",
  rating: 5,
  quote:
    "Great mentors, well-structured curriculum, and helpful career support. I owe my success to this platform.",
}

];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 py-12 bg-sky-50 mt-10">
        <h2 className="text-4xl font-bold text-center text-sky-800 mb-10">
          Alumni Success Stories
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote */}
              <p className="text-gray-700 text-sm mb-4 italic">“{t.quote}”</p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < t.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              {/* Person */}
              <div>
                <p className="font-semibold text-lg text-sky-700">{t.name}</p>
                <p className="text-sm text-gray-600">
                  {t.role} @ <span className="font-medium">{t.company}</span>
                </p>
                <p className="text-xs text-green-500 mt-1">✅ Verified Alumni</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Testimonials; 