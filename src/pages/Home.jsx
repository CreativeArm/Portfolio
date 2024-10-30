import React from "react";
import Herosection from "../components/Herosection";
import Skills from "../components/Skills";
import Blog from "../components/Blog";

import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Herosection />
      <Skills />
      <Blog />
      <Projects />
      <Contact />
    </div>
  );
}
