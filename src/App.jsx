import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OrbitBanner from "./components/OrbitBanner";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import Project from "./components/Projects";
import Resume from "./components/Resume";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-sans min-h-screen">
      <Navbar />
      <Hero />
      <WorkExperience />
      <Project />
      <TechStack />
      <Resume />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
