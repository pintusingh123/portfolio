import React from "react";
import TypingAnimatedText from "./TypingText";
// import Projects from "./Projects";
import Services from "./Services";
import Experience from "./Experience";
// import Skill from "./Games";
import Education from "./Education";
import Contact from "./Contact";
import Skil from "./Skil";
// import ProjectsSection from "./ProjectsSection";
import ProjectShowcase from "./ProjectShowcase";
// Footer is rendered once in App.jsx; avoid rendering it here.

// import ScrollStack from "./ScrollStack";

function Home() {
  const velocity = 100;

  return (
    <div className="h-auto w-full bg-black text-white">
      <TypingAnimatedText />

      {/* ✅ Updated CardList renders multiple cards dynamically */}
      {/* <ScrollStack /> */}
      {/* <ProjectsSection /> */}
      <ProjectShowcase />

      <Skil
        texts={["React Bits", "Scroll Down"]}
        velocity={velocity}
        className="custom-scroll-text"
      />

      <Services />
      <Experience />
      <Education />

      <Contact />
    </div>
  );
}

export default Home;
