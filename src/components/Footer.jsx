// src/components/Footer.jsx
import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-sky-100 border-t border-neutral-300 text-neutral-700 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding: Logo and Company Name */}
        <div className="flex items-center gap-2">
         
          <span className="text-lg font-semibold text-sky-700">TechDreamity</span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          &copy; {currentYear} TechDreamity. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
