import React, { useState } from 'react';
import { Star, Award, Users, Clock, BookOpen, TrendingUp, ChevronLeft, ChevronRight, CheckCircle, MapPin, Calendar, ArrowRight } from 'lucide-react';

const internshipPositions = [
  { id: 1, title: 'Frontend Developer', duration: '3 months', skills: ['React', 'JavaScript', 'CSS'], level: 'Beginner' },
  { id: 2, title: 'Data Science Intern', duration: '6 months', skills: ['Python', 'ML', 'Analytics'], level: 'Intermediate' },
  { id: 3, title: 'Machine Learning Engineer', duration: '6 months', skills: ['TensorFlow', 'Python', 'AI'], level: 'Advanced' },
  { id: 4, title: 'Cloud Architect', duration: '3 months', skills: ['AWS', 'Docker', 'DevOps'], level: 'Intermediate' },
  { id: 5, title: 'DevOps Intern', duration: '6 months', skills: ['Kubernetes', 'CI/CD', 'Linux'], level: 'Intermediate' },
  { id: 6, title: 'UI/UX Designer', duration: '3 months', skills: ['Figma', 'Design', 'User Research'], level: 'Beginner' },
  { id: 7, title: 'Full Stack Developer', duration: '6 months', skills: ['Node.js', 'React', 'MongoDB'], level: 'Intermediate' },
  { id: 8, title: 'Data Analyst', duration: '3 months', skills: ['SQL', 'Excel', 'Tableau'], level: 'Beginner' },
  { id: 9, title: 'Product Manager', duration: '6 months', skills: ['Strategy', 'Analytics', 'Agile'], level: 'Advanced' },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Frontend Developer Intern → Junior Developer at Google",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0ea5e9&color=fff&size=150",
    content: "The mentorship I received was incredible. I went from knowing basic HTML to building complex React applications. Now I'm working at my dream company!",
    rating: 5,
    batch: "2024 Batch"
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Data Science Intern → ML Engineer at Microsoft",
    image: "https://ui-avatars.com/api/?name=Rahul+Patel&background=0ea5e9&color=fff&size=150",
    content: "The hands-on projects were game-changing. I worked on real datasets and deployed ML models to production. The experience was invaluable.",
    rating: 5,
    batch: "2023 Batch"
  },
  {
    id: 3,
    name: "Sneha Gupta",
    role: "UI/UX Intern → Senior Designer at Flipkart",
    image: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=0ea5e9&color=fff&size=150",
    content: "From wireframes to user testing, I learned the complete design process. The portfolio I built here helped me land my current role.",
    rating: 5,
    batch: "2024 Batch"
  }
];

const stats = [
  { icon: <Users className="w-8 h-8" />, number: "500+", label: "Successful Interns" },
  { icon: <Award className="w-8 h-8" />, number: "95%", label: "Job Placement Rate" },
  { icon: <TrendingUp className="w-8 h-8" />, number: "₹8L", label: "Average Package" },
  { icon: <Star className="w-8 h-8" />, number: "4.9/5", label: "Intern Rating" }
];

const perks = [
  { icon: <Award className="w-6 h-6" />, title: "Certificate of Completion", desc: "Industry-recognized certification" },
  { icon: <BookOpen className="w-6 h-6" />, title: "Letter of Recommendation", desc: "Based on your performance" },
  { icon: <Users className="w-6 h-6" />, title: "Industry Expert Mentorship", desc: "1-on-1 guidance from professionals" },
  { icon: <Clock className="w-6 h-6" />, title: "Flexible Working Hours", desc: "Work-life balance guaranteed" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Real-world Projects", desc: "Build production-ready applications" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Job Assistance", desc: "Resume building & interview prep" }
];

const companies = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Paytm", "Zomato", "Swiggy", "BYJU'S"
];

const InternshipPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleApply = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfHFFMvhVrt9FVZKiSO23f-vQ9ZfMGtZf49VSO2PtLgCwAf9Q/viewform?usp=sharing&ouid=106162453872637721865_blank'
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50  py-16 px-4">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-700 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Launch Your <span className="text-yellow-300">Tech Career</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join India's fastest-growing internship program. Learn from industry experts, work on real projects, and land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleApply}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now - Limited Seats! <ArrowRight className="inline w-5 h-5 ml-2" />
            </button>
            <div className="flex items-center text-yellow-200">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Next Batch: August 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
     
      {/* {perk secure} */}
      


      {/* Internship Positions */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our internship opportunities across different domains and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition duration-300">
                    {position.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(position.level)}`}>
                    {position.level}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Duration: {position.duration}</span>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-sky-100 text-sky-700 rounded-md text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleApply}
                  className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 transform group-hover:scale-105"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perks</h2>
            <p className="text-xl text-gray-600">Comprehensive benefits designed for your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 hover:from-sky-100 hover:to-indigo-100 transition duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-lg flex items-center justify-center">
                  {perk.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{perk.title}</h4>
                  <p className="text-gray-600">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perks Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="py-20 px-6 bg-gradient-to-r from-sky-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl opacity-90">Hear from our alumni who are now thriving in top companies</p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white/30"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentTestimonial].name)}&background=0ea5e9&color=fff&size=150`;
                  }}
                />
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <h4 className="text-xl font-bold mb-1">{testimonials[currentTestimonial].name}</h4>
                <p className="text-sky-200 mb-2">{testimonials[currentTestimonial].role}</p>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {testimonials[currentTestimonial].batch}
                </span>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Alumni Work At</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {companies.map((company, index) => (
              <div key={index} className="text-xl font-semibold text-gray-600 hover:text-sky-600 transition duration-300">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful interns who started their journey with us. Your future in tech awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleApply}
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey Today
            </button>
            <div className="flex items-center text-yellow-200">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Remote & On-site Options Available</span>
            </div>
          </div>
          <div className="mt-8 text-sm opacity-75">
            🔥 Limited seats available • Early bird discount: 20% off • No hidden fees
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
