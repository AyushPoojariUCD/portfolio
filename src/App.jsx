import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import ProjectShowcase from "./components/ProjectShowcase";
import DeliverSection from "./components/DeliverSection";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-sans min-h-screen">
      <Navbar />
      <Hero />
      <WorkExperience />
      <TechStack />
      <ProjectShowcase />
      <DeliverSection />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
