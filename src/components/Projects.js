import React from "react"
import Title from "./Title"
import Project from "./Project"
import SectionTitle from "./reusable-components/section-title"
import { Link } from "gatsby"
const Projects = () => {
  return (
    <section className="projects">
      <SectionTitle title={"Projects"} />
      <Project />
    </section>
  )
}

export default Projects
