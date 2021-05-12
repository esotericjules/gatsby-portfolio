import React, { useEffect } from "react"
import { appHelpers } from "../helpers/app.helpers"
import Title from "./Title"
import Project from "./Project"
import SectionTitle from "./reusable-components/section-title"
import { Link } from "gatsby"
import { data, projectDescriptionData, newData } from "../constants/image-data"
import BDA1 from "../assets/BDA/bda-1-resized.jpg"
import BDA2 from "../assets/BDA/bda-2.png"
import BDAMOCKUP1 from "../assets/BDA/landing.png"
import BDAMOCKUP2 from "../assets/BDA/create-new-invoice.png"
import BDAMOCKUP3 from "../assets/BDA/dashboard.png"
import BDAMOCKUP4 from "../assets/BDA/search-invoice-white.png"
import BDAMOCKUP5 from "../assets/BDA/user-mapping.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AvicollectMockup1 from "../assets/Avicollect/avicollect-mockup-1.jpg"
import {
  ProjectLeft,
  ProjectRight,
  ProjectLeftSide,
  ProjectRightSide,
  ProjectSide,
} from "./reusable-components/project-left"
import Slider from "react-slick"

let BaseUrl = "../assets/BDA"
//TODO
//1. Replace previous font-sizes in projects.scss with the accurate name.
// 2. On hover display a message telling the user that the slider is paused.
// 3. Remove unused imports
// 5. Reduce padding for layout when screen size decreases
// Work on Accessibility
// Add browser compatibility plugin
//Reduce size of project Name to match Name
const settings = {
  customPaging: function (i) {
    return <div className="dot"></div>
  },
  dotsClass: "slick-dots slick-thumb",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // speed: 2000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  // pauseOnHover: true,
  swipeToSlide: true,
  // lazyLoad: "progressive",
  arrows: true,
  fade: true,
}

const Projects = () => {
  useEffect(() => {
    appHelpers.modifyFirstWord(".project__descriptions")
  }, [])

  return (
    <section className="projects" tabIndex={0}>
      <div className="section-title projects__title">WORKS</div>

      <ProjectSide
        imgData={data.bda}
        projectName={"Epibs"}
        projectDescriptionData={projectDescriptionData.bda}
      />
      <ProjectSide
        imgData={data.bda}
        projectName={"Avicollect"}
        projectDescriptionData={projectDescriptionData.avicollect}
      />
      <ProjectSide
        imgData={data.bda}
        projectName={"Avicollect"}
        projectDescriptionData={projectDescriptionData.bda}
      />
      <ProjectSide
        imgData={data.bda}
        projectName={"MDB"}
        projectDescriptionData={projectDescriptionData.avicollect}
      />
      {/* <ProjectSide
        imgData={data.bda}
        projectName={"Test"}
        projectDescriptionData={projectDescriptionData.avicollect}
      /> */}
      {/* <ProjectRightSide
        imgData={data.bda}
        projectName={"Avicollect"}
        projectDescriptionData={projectDescriptionData.avicollect}
      />
      <ProjectLeftSide
        imgData={data.bda}
        projectName={"MDB"}
        projectDescriptionData={projectDescriptionData.bda}
      /> */}
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
