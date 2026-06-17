import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Tools from "./pages/Tools/Tools";
import Pricing from "./pages/Pricing";
import Mission from "./pages/About/Mission";
import Team from "./pages/About/Team";
import LearningApproach from "./pages/About/LearningApproach";
import OpenPositions from "./pages/About/OpenPositions";
import Partners from "./pages/About/Partners";
import Testimonials from "./pages/About/Testimonials";
import Contact from "./pages/Contact";
import CaseBriefGenerator from "./pages/CaseBriefGenerator";
import Signup from "./pages/Signup/Signup";
import About from "./pages/About/About";
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/brief-generator" element={<CaseBriefGenerator />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/approach" element={<LearningApproach />} />
          <Route path="/about/careers" element={<OpenPositions />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
