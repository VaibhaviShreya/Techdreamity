// src/components/FAQSection.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is the duration of the internship program?",
    answer: "The internship typically lasts 8 to 12 weeks, depending on the program selected.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer: "Yes, every participant will receive an official certificate of completion.",
  },
  {
    question: "Is the internship paid or unpaid?",
    answer: "Some internships come with stipends while others are unpaid but provide valuable experience and placement support.",
  },
  {
    question: "Do I need prior experience to apply?",
    answer: "No prior experience is needed. Our programs are beginner-friendly and include step-by-step learning.",
  },
  {
    question: "How do I apply for the internship?",
    answer: "You can apply by filling out the contact form or registering through the 'Start Your Journey' button on the homepage.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-14 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-10">Got questions? We’ve got answers!</p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-sky-700 focus:outline-none"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
