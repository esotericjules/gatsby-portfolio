import React from 'react';
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact"
import Footer from "./Footer"

const Content = () => {
  return (
    <article class={"content"}>
      <Hero />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer />
    </article>
  )
}

export default Content;