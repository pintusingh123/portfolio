import React from "react";
import TypingAnimatedText from "./TypingText";
import ProjectShowcase from "./ProjectShowcase";
import Services from "./Services";
import Skil from "./Skil";
import Experience from "./Experience";
import Education from "./Education";
import RecruiterFAQ from "./RecruiterFAQ";
import Contact from "./Contact";

function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0b1326] text-[#dae2fd] selection:bg-[#c0c1ff] selection:text-[#07006c]">
      <TypingAnimatedText />
      <ProjectShowcase />
      <Services />
      <Skil />
      <Experience />
      <Education />
      <RecruiterFAQ />
      <Contact />
    </main>
  );
}

export default Home;
