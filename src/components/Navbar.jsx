import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const dropdownOptions = [
  {
    title: "Internships",
    description: "Get real-world experience through our internship programs.",
    iconClass: "fas fa-briefcase",
    path: "/services/internships",
  },
  {
    title: "Projects",
    description: "Hands-on projects to sharpen your skills or get support.",
    iconClass: "fas fa-tasks",
    subOptions: [
      {
        title: "Project Showcase",
        description: "Explore completed and ongoing projects.",
        path: "/services/projects",
      },
      {
        title: "Custom Project Build",
        description: "Bring your ideas, and we'll build it for you.",
        path: "/services/custom",
      },
      
    ],
  },
  {
    title: "Freelancing",
    description: "Hire or work on freelance software/design projects.",
    iconClass: "fas fa-user-tie",
    path: "/services/freelancing",
  },
];

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Programs", path: "/programs" },
    { id: 3, name: "Our Team", path: "/team" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    dispatch(logout());
    navigate("/hero");
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleCardClick = (idx) => {
    const selected = dropdownOptions[idx];
    if (selected.subOptions) {
      setActiveContent(selected.subOptions);
    } else {
      setActiveContent(null);
      navigate(selected.path);
      setShowSolutions(false);
      if (isOpen) setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SubOptions = ({ content }) => (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-sky-800 font-semibold mb-3">More Project Options:</h3>
      <div className="grid grid-cols-2 gap-4">
        {content.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setShowSolutions(false);
              navigate(item.path);
              setActiveContent(null);
            }}
            className="border p-3 rounded hover:shadow-md cursor-pointer bg-white"
          >
            <h4 className="text-sky-700 font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`w-full h-16 backdrop-blur-sm border-b border-neutral-200 flex items-center justify-between px-6 md:px-10 lg:px-16 fixed top-0 transition-all duration-300 z-50 ${
        isScrolled ? "bg-sky-50/30" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="text-lg font-semibold text-sky-700 flex items-center gap-x-2">
          <img src={logo} alt="Logo" className="w-6 h-16 object-contain" />
          TechDremity
        </Link>
      </div>

      {/* Desktop Navigation - Centered */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex items-center gap-8 text-base text-neutral-700 font-normal">
          {navItems.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => item.name === "Services" && setShowSolutions(true)}
              onMouseLeave={() => item.name === "Services" && setShowSolutions(false)}
              className="relative"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-sky-600 transition ${
                    isActive
                      ? "text-sky-700 font-semibold border-b-2 border-sky-600 pb-1"
                      : ""
                  }`
                }
              >
                {item.name}
              </NavLink>

              {/* Dropdown Services */}
              {item.name === "Services" && showSolutions && (
                <div className="absolute left-[-200px] top-full w-[800px] bg-white p-6 rounded shadow-lg z-50">
                  <h3 className="text-sky-900 mb-5 text-lg font-semibold">
                    Explore Services
                  </h3>
                  <div className="grid grid-cols-3 gap-5">
                    {dropdownOptions.map((option, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleCardClick(idx)}
                        className="bg-white border border-gray-100 rounded-lg p-5 shadow hover:shadow-md transition cursor-pointer"
                      >
                        <div className="text-sky-700 text-2xl mb-2">
                          <i className={option.iconClass}></i>
                        </div>
                        <h4 className="text-sky-900 text-base font-semibold mb-2">
                          {option.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{option.description}</p>
                      </div>
                    ))}
                  </div>

                  {activeContent && <SubOptions content={activeContent} />}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Auth Buttons - Right Side */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <div className="relative group flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold text-sm">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <span className="text-sky-800 text-sm">{user.username}</span>
            <div className="absolute top-10 right-0 w-28 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="text-sky-600 hover:text-sky-800 font-semibold">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={toggleNavbar} className="text-neutral-600">
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 h-screen w-full bg-sky-50 border-l shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-60`}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={toggleNavbar} className="text-neutral-600">
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-col items-center gap-6 p-6">
          <ul className="flex flex-col items-center gap-8 text-base text-neutral-700 font-normal">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `hover:text-sky-600 transition ${
                      isActive
                        ? "text-sky-700 font-semibold border-b-2 border-sky-600 pb-1"
                        : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col items-center gap-4 mt-6">
            {user ? (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold text-sm">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sky-800 text-sm">{user.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-sky-600 hover:text-sky-800 font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
