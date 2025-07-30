import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Award, Users, BookOpen, Briefcase } from 'lucide-react';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Chandan Kumar Gupta ",
      role: "CEO & Founder",
      avatar: "SJ",
      bio: "Visionary leader with 15+ years in education technology. Passionate about transforming learning experiences through innovative solutions.",
      skills: ["Leadership", "Strategy", "EdTech", "Innovation"],
      email: "sarah@edutech.com",
      linkedin: "sarah-johnson",
      specialization: "Educational Strategy"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Developer",
      avatar: "MC",
      bio: "Full-stack developer specializing in modern web technologies. Creates scalable solutions for educational platforms.",
      skills: ["React", "Node.js", "Python", "Cloud Architecture"],
      email: "michael@edutech.com",
      github: "michaelchen",
      specialization: "Technical Development"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Head of Curriculum",
      avatar: "ER",
      bio: "PhD in Educational Psychology with expertise in curriculum design and learning assessment methodologies.",
      skills: ["Curriculum Design", "Assessment", "Learning Analytics", "Research"],
      email: "emily@edutech.com",
      linkedin: "emily-rodriguez",
      specialization: "Educational Design"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Career Services Director",
      avatar: "JW",
      bio: "Former HR executive helping students transition from education to successful careers through strategic internship programs.",
      skills: ["Career Counseling", "Industry Relations", "Mentorship", "Recruitment"],
      email: "james@edutech.com",
      linkedin: "james-wilson",
      specialization: "Career Development"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "UX/UI Designer",
      avatar: "LP",
      bio: "Creative designer focused on user-centered design principles to create intuitive and engaging educational experiences.",
      skills: ["UI/UX Design", "User Research", "Prototyping", "Design Systems"],
      email: "lisa@edutech.com",
      linkedin: "lisa-park",
      specialization: "User Experience"
    },
    {
      id: 6,
      name: "David Thompson",
      role: "Business Development",
      avatar: "DT",
      bio: "Strategic partnerships and business growth expert, connecting educational institutions with innovative learning solutions.",
      skills: ["Partnership Development", "Sales Strategy", "Market Analysis", "Client Relations"],
      email: "david@edutech.com",
      linkedin: "david-thompson",
      specialization: "Business Growth"
    }
  ];

  const companyStats = [
    { icon: Users, number: "500+", label: "Students Trained" },
    { icon: Briefcase, number: "150+", label: "Internships Placed" },
    { icon: BookOpen, number: "25+", label: "Courses Offered" },
    { icon: Award, number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo -900 via-blue-900 to-sky-900">
      

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-pulse">
          Meet Our Team
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Our passionate team of educators, developers, and industry experts dedicated to transforming 
          careers through innovative courses, internships, and professional services.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-sky-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white/95 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-3xl"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-sky-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {member.avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-sky-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-xs rounded-full font-medium transform hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Specialization Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 text-sm font-medium rounded-full">
                    {member.specialization}
                  </span>
                </div>

                {/* Contact Buttons */}
                <div className="flex justify-center space-x-3">
                  <button className="p-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors duration-300 hover:scale-110 transform">
                    <Mail className="w-4 h-4" />
                  </button>
                  {member.linkedin && (
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  )}
                  {member.github && (
                    <button className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300 hover:scale-110 transform">
                      <Github className="w-4 h-4" />
                    </button>
                  )}
                 
                </div>
              </div>

              {/* Hover effect overlay */}
              {hoveredMember === member.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-3xl pointer-events-none transition-opacity duration-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white/10 backdrop-blur-lg border-t border-white/20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/90 text-lg mb-8">
            Join our community of learners and professionals. Explore our courses, internships, and services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;