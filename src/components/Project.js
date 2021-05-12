import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import AvicollectMockup1 from "../assets/Avicollect/avicollect-mockup-1.jpg"
import ProjectImages from "./reusable-components/project-images"
import { data, projectDescriptionData, newData } from "../constants/image-data"
import ProjectDescription from "./reusable-components/project-description"
import ProjectContext from "../context/projectContext"
import { ProjectLeft } from "./reusable-components/project-left"

const Project = ({ title, img, link, projectDescriptionData, children }) => {
  const [holdClass, setHoldClass] = useState("")
  const value = useContext(ProjectContext)
  console.log(value)

  function mouseEnter(e) {
    // get the element that fired the event listener
    let targetElement = e.currentTarget

    //get the element that is wrapping the target element's parent element
    let grandParent = targetElement.parentElement.parentElement

    // get the immediate parent element of the target element
    let directParent = targetElement.parentElement

    //store the className of the direct parent in classToRemove variable and holdClass variable in state. This classname controls the elements position in the grid.
    let classToRemove = directParent.classList[1]
    setHoldClass(classToRemove)
    // holdClass = classToRemove

    //reomove the classname that controls the elements positon in the grid and add another className that will change it's position in the grid.
    directParent.classList.remove(classToRemove)
    directParent.classList.add("project__hovered-image")

    // remove the className that controls how the image is displayed inside its parent container and add another className that will change it's display, from cover to contain
    directParent.firstElementChild.classList.remove("project__images-img")
    directParent.firstElementChild.classList.add("project__hovered-img")

    // Get all the child elements of the grandParent
    let children = grandParent.children

    // Loop through all the children, set the opacity of all the children except the current hovered element to 0.
    for (let i = 0; i < children.length; i++) {
      if (children[i].classList.contains("project__hovered-image")) {
        children[i].style.opacity = 1
      } else {
        children[i].style.opacity = 0
      }
    }
  }

  function imageMouseOut(e) {
    // get the element that fired the event listener
    let targetElement = e.currentTarget

    //get the element that is wrapping the target element's parent element
    let grandParent = targetElement.parentElement.parentElement

    // get the immediate parent element of the target element
    let directParent = targetElement.parentElement

    // Add back the className that was removed from the directParent and remove the className that was added on mouseIn
    directParent.classList.add(holdClass)
    directParent.classList.remove("project__hovered-image")

    // add the className that controls how the image is displayed inside its parent container and remove the  className that was added to change it's display, from cover to contain
    directParent.firstElementChild.classList.add("project__images-img")
    directParent.firstElementChild.classList.remove("project__hovered-img")

    // Get all the child elements of the grandParent
    let children = grandParent.children

    // Loop through all the children, set their opacity to 1.
    for (let i = 0; i < children.length; i++) {
      children[i].style.opacity = 1
    }
  }

  return (
    <div tabIndex={0}>
      {children}
      {/* <div className="project__right">
        <span className="project__right-title">Avicollect</span>
        <div className="project__right-card">
          <div className="project__right-card__items-wrapper">
            <div className="project__right-card__description">
              <ProjectDescription data={projectDescriptionData.bda} />
            </div>
            <div className="project__right-card__thumbnail">
              <img
                src={BDAMOCKUP1}
                alt=""
                className="project__right-card__thumbnail-img"
              />
            </div>
          </div>
          <div>
            <div className="project__link">
              <a
                href={"https://bdaweb.prod.vggdev.com/"}
                target="blank"
                className="project__btn-link"
              >
                Visit Site &rarr;
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* <ProjectLeft
        title={title}
        img={img}
        projectDescriptionData={projectDescriptionData}
        link={link}
      /> */}

      {/* <ProjectRight
        title={title}
        img={img}
        projectDescriptionData={projectDescriptionData}
        link={link}
      /> */}

      {/* <div className="project__header">
        <h3 className={"project__title"}>{projectName}</h3>
        <a
          href="https://bdaweb.prod.vggdev.com/"
          target="blank"
          className="project__btn-link"
        >
          Visit Site &rarr;
        </a>
      </div> */}
      {/* <div className={"project__container"}>
        <ProjectImages
          data={data}
          mouseEnter={mouseEnter}
          imageMouseOut={imageMouseOut}
        />
        <ProjectDescription data={projectDescriptionData.bda} />
      </div> */}
    </div>
  )
}

Project.propTypes = {}

export default Project
