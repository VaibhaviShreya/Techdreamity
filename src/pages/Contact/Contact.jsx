import React, { useState } from "react";

const Contact = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCancelFile = () => {
    setFile(null);
    document.getElementById("file").value = ""; // Reset file input
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  if (file) {
    formData.append("file", file);
  }

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
      setFile(null);
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    alert("An error occurred.");
  }
};


  return (
    <div className="mt-[8ch] px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-sky-800 mb-6 text-center">
        Contact Us
      </h2>
      
       {/* Info Message */}
        <p className="text-lg text-gray-600 text-center pb-6">
          Have any questions? We'd love to hear from you. Fill out the form and
          our team will get back to you soon.
        </p>

      <div className="bg-white shadow-md rounded-lg p-8">
        <form   onSubmit={handleSubmit}className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="col-span-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Program Dropdown */}
          <div className="col-span-1">
            <label
              htmlFor="program"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Program
            </label>
            <select
              id="program"
              name="program"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            >
              <option value="">-- Select a program --</option>
              <option value="Full Stack Web Development">
                Full Stack Web Development
              </option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Data Science & Analytics">
                Data Science & Analytics
              </option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="DevOps & Cloud">DevOps & Cloud</option>
              <option value="Cyber Security Basics">
                Cyber Security Basics
              </option>
            </select>
          </div>
{/* service */}
         <div className="col-span-1">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service required
            </label>
            <textarea
              id="service"
              name="service"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Service you required......"
              required
            ></textarea>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* File Upload */}
          {/* File Upload with Cancel Button */}
          <div className="col-span-2">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Attach File 
            </label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="w-full sm:w-auto border border-gray-300 rounded-md px-4 py-2 text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-sky-600 file:text-white hover:file:bg-sky-700"
              />
              {file && (
                <button
                  type="button"
                  onClick={handleCancelFile}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                >
                  Cancel
                </button>
              )}
            </div>
            {file && (
              <p className="text-sm text-gray-600 mt-1">
                Selected file: <span className="font-medium">{file.name}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default Contact;
