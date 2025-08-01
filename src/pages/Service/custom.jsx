import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaMobile, 
  FaDesktop, 
  FaDatabase, 
  FaCloud, 
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaCog,
  FaUsers
} from 'react-icons/fa';

const CustomProjectPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaDesktop className="text-4xl text-sky-600" />,
      title: "Web Applications",
      description: "Full-stack web applications with modern frameworks",
      features: ["React/Vue/Angular", "Node.js/Express", "Database Integration", "Responsive Design"],
      price: "Starting from $500"
    },
    {
      icon: <FaMobile className="text-4xl text-sky-600" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["React Native", "Flutter", "iOS/Android", "Push Notifications"],
      price: "Starting from $800"
    },
    {
      icon: <FaDatabase className="text-4xl text-sky-600" />,
      title: "Backend Systems",
      description: "Robust server-side solutions and APIs",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Deployment"],
      price: "Starting from $400"
    },
    {
      icon: <FaCloud className="text-4xl text-sky-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud-based applications",
      features: ["AWS/Azure/GCP", "Microservices", "Docker/Kubernetes", "CI/CD Pipeline"],
      price: "Starting from $600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your requirements and create a detailed project roadmap",
      icon: <FaLightbulb className="text-3xl text-sky-600" />
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Create wireframes, mockups, and technical architecture",
      icon: <FaCog className="text-3xl text-sky-600" />
    },
    {
      step: "03",
      title: "Development",
      description: "Build your project with regular updates and feedback loops",
      icon: <FaCode className="text-3xl text-sky-600" />
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Thorough testing and seamless deployment to production",
      icon: <FaRocket className="text-3xl text-sky-600" />
    }
  ];

  const benefits = [
    "100% Custom Solution",
    "Scalable Architecture",
    "Modern Technology Stack",
    "24/7 Support",
    "Source Code Ownership",
    "Post-Launch Maintenance"
  ];

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 min-h-screen  py-16 px-4">
      {/* Header */}
      <div className="bg-sky-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Custom Project Build</h1>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Transform your innovative ideas into powerful digital solutions. 
              We build custom applications tailored to your specific needs.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Custom Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of development services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-sky-500 mr-2 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-sky-600 font-bold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-sky-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Why Choose Our Custom Solutions?</h2>
                <p className="text-xl text-sky-100 mb-8">
                  We don't just code; we craft digital experiences that drive results and exceed expectations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheckCircle className="text-sky-200 mr-3" />
                      <span className="text-sky-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-xl p-8">
                  <FaUsers className="text-6xl text-sky-200 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-sky-100 mb-6">
                    Let's discuss your project and turn your vision into reality
                  </p>
                  <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied clients who trust us with their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition flex items-center justify-center">
              Start Your Project <FaArrowRight className="ml-2" />
            </button>
            <Link 
              to="/contact" 
              className="border-2 border-sky-600 text-sky-400 px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomProjectPage;
