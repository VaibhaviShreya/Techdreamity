import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Testimonials from "./Testimonials";
import Technologies from "./Technologies";
import Benefits from "./Benefits";
import FAQSection from "./FAQ";
import { useSelector } from "react-redux";



const Hero = () => {
 

const user = useSelector((state) => state.auth.user);


  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-sky-100 via-white to-sky-200 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse top-10 -left-32 z-0"></div>
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-ping bottom-10 -right-32 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl font-bold text-sky-800 mb-6"
          >
            <span className="animate-pulse">Shape Your Future</span> with Us!
          </motion.h1>

          {/* Conditional CTA / Profile */}
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
  {user ? (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-lg"
        title={user.email}
      >
        {user.username.charAt(0).toUpperCase()}
      </div>
      <p className="text-lg text-sky-800 font-medium">{user.username}</p>
    </div>
  ) : (
    <>
      <Link
        to="/login"
        className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md text-lg transition duration-200"
      >
        Start Your Journey
      </Link>
      <button className="border border-sky-600 text-sky-600 hover:bg-sky-100 px-6 py-3 rounded-md text-lg transition duration-200">
        Watch Demo
      </button>
    </>
  )}
</div>


          {/* Statistics */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700 font-medium">
            <div className="text-center">
              <p className="text-3xl font-bold text-sky-700">500+</p>
              <p>Students Placed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-sky-700">98%</p>
              <p>Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-sky-700">50+</p>
              <p>Partner Companies</p>
            </div>
          </div>
        </div>
      </section>
  
     <Benefits/>
     <Technologies/>
     <Testimonials/>
     
     <FAQSection/>
    </div>
  );
};

export default Hero;
