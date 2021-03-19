import React from "react"
import Title from "./Title"
import Project from "./Project"
import SectionTitle from "./reusable-components/section-title"
import { Link } from "gatsby"
import { data, projectDescriptionData, newData } from "../constants/image-data"
import BDAMOCKUP1 from "../assets/BDA/bda-mockup-1.1.jpg"
import AvicollectMockup1 from "../assets/Avicollect/avicollect-mockup-1.jpg"
import { ProjectLeft, ProjectRight } from "./reusable-components/project-left"

const Projects = () => {
  return (
    <section className="projects" tabIndex={0}>
      <div className="section-title projects__title">WORKS</div>
      <Project>
        <ProjectLeft
          title={"EPIBS"}
          img={BDAMOCKUP1}
          projectDescriptionData={projectDescriptionData.bda}
          link={"https://bdaweb.prod.vggdev.com/"}
        />
      </Project>
      <Project>
        <ProjectRight
          title={"Avicollect"}
          img={AvicollectMockup1}
          projectDescriptionData={projectDescriptionData.avicollect}
          link={"https://bdaweb.prod.vggdev.com/"}
        />
      </Project>

      {/* <Project
        title={"EPIBS"}
        img={BDAMOCKUP1}
        projectDescriptionData={projectDescriptionData.bda}
        link={"https://bdaweb.prod.vggdev.com/"}
      /> */}
      {/* <Project
        data={data.bda}
        projectDescriptionData={projectDescriptionData.bda}
        projectName={"EPIBS"}
      />
      <Project
        data={data.avicollect}
        projectDescriptionData={projectDescriptionData.avicollect}
        projectName={"Avicollect"}
      /> */}
    </section>
  )
}

export default Projects
