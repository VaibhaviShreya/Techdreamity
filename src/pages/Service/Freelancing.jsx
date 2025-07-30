import React, { useState } from 'react';
import { ChevronRight, Users, Code, Palette, Globe, Database, Smartphone, TrendingUp, Clock, Star, ArrowRight, CheckCircle, DollarSign, Calendar, Award } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';


const FreelancingPage = () => {
  const [activeTab, setActiveTab] = useState('opportunities');
 const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login'); 
  };
   const handleProjects = () => {
    navigate('/services/projects'); 
  };
  const freelanceCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack development, React, Node.js, Python",
      projects: 45,
      avgRate: "$25-50/hr",
      skills: ["React", "Node.js", "Python", "JavaScript", "HTML/CSS"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "iOS, Android, React Native, Flutter apps",
      projects: 32,
      avgRate: "$30-60/hr",
      skills: ["React Native", "Flutter", "iOS", "Android", "Swift"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User interface design, prototyping, user research",
      projects: 28,
      avgRate: "$20-45/hr",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Machine learning, data analysis, AI solutions",
      projects: 19,
      avgRate: "$35-70/hr",
      skills: ["Python", "R", "TensorFlow", "SQL", "Machine Learning"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "SEO, content marketing, social media management",
      projects: 23,
      avgRate: "$15-40/hr",
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics", "PPC"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Analysis",
      description: "Market research, business strategy, consulting",
      projects: 15,
      avgRate: "$25-55/hr",
      skills: ["Market Research", "Strategy", "Analytics", "Consulting", "Excel"]
    }
  ];

  const currentOpportunities = [
    {
      title: "E-commerce Platform Development",
      client: "RetailTech Solutions",
      budget: "$5,000 - $8,000",
      duration: "6-8 weeks",
      skills: ["React", "Node.js", "MongoDB", "Payment Integration"],
      description: "Build a comprehensive e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
      urgency: "High",
      applicants: 12
    },
    {
      title: "Mobile Banking App UI/UX",
      client: "FinanceFirst Bank",
      budget: "$3,000 - $5,000",
      duration: "4-6 weeks",
      skills: ["Figma", "Mobile Design", "User Research", "Prototyping"],
      description: "Design a modern, secure, and user-friendly mobile banking application with focus on accessibility and user experience.",
      urgency: "Medium",
      applicants: 8
    },
    {
      title: "AI Chatbot Development",
      client: "CustomerCare Inc",
      budget: "$4,000 - $6,500",
      duration: "5-7 weeks",
      skills: ["Python", "NLP", "Machine Learning", "API Integration"],
      description: "Develop an intelligent chatbot for customer service with natural language processing capabilities.",
      urgency: "High",
      applicants: 15
    },
    {
      title: "Digital Marketing Campaign",
      client: "StartupGrow",
      budget: "$2,000 - $3,500",
      duration: "3-4 weeks",
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      description: "Create and execute a comprehensive digital marketing strategy to increase brand awareness and lead generation.",
      urgency: "Medium",
      applicants: 6
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Rates",
      description: "Earn 20-30% above market rates with our premium client base"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "Work on your own schedule with flexible deadlines"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Skill Development",
      description: "Access to training resources and skill enhancement programs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Join our community of 500+ freelancers and get peer support"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Projects",
      description: "Work on vetted, high-quality projects from reputable clients"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Payments",
      description: "Get paid within 48 hours of project completion"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Apply & Register",
      description: "Submit your profile with portfolio and skills assessment"
    },
    {
      step: "02",
      title: "Skill Verification",
      description: "Complete our skill verification process and interview"
    },
    {
      step: "03",
      title: "Browse Projects",
      description: "Access our exclusive project marketplace"
    },
    {
      step: "04",
      title: "Start Working",
      description: "Get matched with clients and start earning"
    }
  ];

  return (
    
    <div className=" min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 px-">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-sky-600 to-blue-700 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Freelancing
            <span className="text-yellow-300"> Opportunities</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100">
            Join our network of elite freelancers and work on exciting projects with top-tier clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-all transform hover:scale-105 shadow-lg" onClick={handleClick}>
              Start Freelancing Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all" onClick={handleProjects}>
              View Current Projects
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-600 mb-2">500+</div>
              <div className="text-gray-600">Active Freelancers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-600 mb-2">1,200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-600 mb-2">$2M+</div>
              <div className="text-gray-600">Total Earnings</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-600 mb-2">4.9★</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'opportunities'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-sky-600'
              }`}
            >
              Current Opportunities
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'categories'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-sky-600'
              }`}
            >
              Categories
            </button>
           
          </div>
        </div>

        {/* Current Opportunities Tab */}
        {activeTab === 'opportunities' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Current Opportunities</h2>
              <p className="text-xl text-gray-600">Fresh projects posted this week</p>
            </div>
            
            <div className="grid gap-6">
              {currentOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{opportunity.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          opportunity.urgency === 'High' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {opportunity.urgency} Priority
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {opportunity.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{opportunity.applicants} applicants</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{opportunity.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <div className="text-2xl font-bold text-sky-600 mb-2">{opportunity.budget}</div>
                      <div className="text-gray-600 mb-4">Client: {opportunity.client}</div>
                      <button className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-all flex items-center gap-2">
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Freelance Categories</h2>
              <p className="text-xl text-gray-600">Choose your area of expertise</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freelanceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100 group hover:border-sky-200">
                  <div className="text-sky-600 mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <span>{category.projects} active projects</span>
                    <span className="font-semibold text-sky-600">{category.avgRate}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                    {category.skills.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{category.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-sky-50 text-sky-600 py-3 rounded-lg font-semibold hover:bg-sky-100 transition-all">
                    Explore Projects
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Freelance With Us</h2>
              <p className="text-xl text-gray-600">Join the best freelancing platform for tech professionals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100">
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-sky-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* How it Works Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                    {index < steps.length - 1 && (
                      <ChevronRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Freelancing Journey?</h2>
          <p className="text-xl mb-8 text-sky-100">
            Join our community of successful freelancers and start earning with flexible, high-paying projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-all shadow-lg">
              Register as Freelancer
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancingPage;