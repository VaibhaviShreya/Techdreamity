import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Sign In";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import CoursePage from "./pages/Service/Cousre";
import Programs from "./pages/Service/Programs";
import Hero from "./pages/Home/Hero";
import Team from "./components/Team";
import Chatbot from "./components/Chatbot";
import ProjectShowcase from "./pages/Service/Project";
import InternshipPage from "./pages/Service/Intership";
import FreelancingPage from "./pages/Service/Freelancing";
import CustomProjectPage from "./pages/Service/custom";

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:programName" element={<CoursePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
    <Route path="/services/projects" element={<ProjectShowcase />} />
    <Route path="/services/freelancing" element={<FreelancingPage />} />
       <Route path="/services/courses" element={<Programs />}/>
            <Route path="/services/custom" element={<CustomProjectPage />} />

        <Route path="/services/internships" element={<InternshipPage />}/>

            <Route path="/services" element={<Hero />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
        <Chatbot/>
      </main>
    </Router>
  );
}

export default App;