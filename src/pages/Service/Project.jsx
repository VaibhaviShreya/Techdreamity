import React from "react";


import { Rocket, Code, Star, Brain, Camera, MessageCircle, ShieldCheck, Music, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Text Generator",
    description: "A powerful tool that predicts and auto-completes text using GPT-based models.",
    link: "#",
    icon: <Rocket size={36} className="text-sky-600" />,
  },
  {
    title: "E-Commerce Dashboard",
    description: "A full-stack admin dashboard for monitoring sales, products, and users.",
    link: "#",
    icon: <Code size={36} className="text-sky-600" />,
  },
  {
    title: "Weather App",
    description: "Live weather tracking app with location-based forecasts and AQI readings.",
    link: "#",
    icon: <Star size={36} className="text-sky-600" />,
  },
  {
    title: "AI Image Classifier",
    description: "Detects and classifies objects in uploaded images using a trained CNN model.",
    link: "#",
    icon: <Brain size={36} className="text-sky-600" />,
  },
  {
    title: "Smart Chatbot",
    description: "Real-time chatbot using Socket.IO and AI responses with a memory system.",
    link: "#",
    icon: <MessageCircle size={36} className="text-sky-600" />,
  },
  {
    title: "Secure Login System",
    description: "A JWT-authenticated login/register system with hashed passwords and role-based access.",
    link: "#",
    icon: <ShieldCheck size={36} className="text-sky-600" />,
  },
  {
    title: "AR Face Filter App",
    description: "React Native app using MLKit to apply real-time face filters and effects.",
    link: "#",
    icon: <Camera size={36} className="text-sky-600" />,
  },
  {
    title: "Lofi Music Player",
    description: "Minimal music app for streaming relaxing Lofi tracks with themed UI.",
    link: "#",
    icon: <Music size={36} className="text-sky-600" />,
  },
];

  
const ProjectShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white 6 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
           Projects by Our Organization
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          We build impactful, scalable, and innovative solutions that matter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 text-left border-t-4 border-sky-400"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sky-100 p-3 rounded-full">{project.icon}</div>
                <h3 className="text-xl font-semibold text-sky-800">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium transition"
              >
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
