import React from "react";
import TypingAnimatedText from "./TypingText";
import ProjectShowcase from "./ProjectShowcase";
import Services from "./Services";
import Skil from "./Skil";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";

function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-950 text-white selection:bg-amber-400 selection:text-slate-950">
      <TypingAnimatedText />
      <ProjectShowcase />
      <Services />
      <Skil />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}

export default Home;
