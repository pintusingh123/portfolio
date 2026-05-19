import React from "react";
import TypingAnimatedText from "./TypingText";
// import Projects from "./Projects";
import Services from "./Services";
import Experience from "./Experience";
// import Skill from "./Games";
import Education from "./Education";
import Contact from "./Contact";
import Skil from "./Skil";
import ProjectsSection from "./ProjectsSection";

// import ScrollStack from "./ScrollStack"; 

function Home() {
  const velocity = 100;

  return (
    <div className="h-auto w-full bg-black text-white">
      <TypingAnimatedText />

      {/* ✅ Updated CardList renders multiple cards dynamically */}
      {/* <ScrollStack /> */}
      <ProjectsSection/>

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
