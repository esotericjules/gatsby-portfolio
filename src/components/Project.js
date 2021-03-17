import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import BDA1 from "../assets/BDA/bda-1.png"
import BDA2 from "../assets/BDA/bda-2.png"
import BDA3 from "../assets/BDA/bda-3.png"
import BDA4 from "../assets/BDA/bda-4.png"
import BDA5 from "../assets/BDA/bda-5.png"
import BDA6 from "../assets/BDA/bda-6.png"
import BDA7 from "../assets/BDA/bda-7.png"
import ProjectImages from "./reusable-components/project-images"
import { data, projectDescriptionData } from "../constants/image-data"
import ProjectDescription from "./reusable-components/project-description"
import ProjectContext from "../context/projectContext"

const Project = () => {
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
    <div className="project">
      <h3 className={"project__title"}>EPIBS</h3>
      <div className={"project__container"}>
        {/* <h1>{value}</h1> */}
        {/* <ProjectImages /> */}
        <ProjectImages
          data={data.bda}
          mouseEnter={mouseEnter}
          imageMouseOut={imageMouseOut}
        />
        <ProjectDescription data={projectDescriptionData.bda} />

        {/* <div className="project__images project__child">
          <figure className="project__images-child project__images-child--1">
            <img
              src={BDA1}
              alt="BDA Image 1"
              className="project__images-img"
              onMouseEnter={e => mouseEnter(e)}
              onMouseLeave={e => imageMouseOut(e)}
            />
          </figure>
          <figure className="project__images-child project__images-child--2">
            <img
              src={BDA2}
              alt="BDA Image 2"
              className="project__images-img"
              onMouseEnter={e => mouseEnter(e)}
              onMouseLeave={e => imageMouseOut(e)}
            />
          </figure>
          <figure className="project__images-child project__images-child--3">
            <img
              src={BDA3}
              alt="BDA Image 3"
              className="project__images-img"
              onMouseEnter={e => mouseEnter(e)}
              onMouseLeave={e => imageMouseOut(e)}
            />
          </figure>
          <figure className="project__images-child project__images-child--4">
            <img
              src={BDA4}
              alt="BDA Image 4"
              className="project__images-img"
              onMouseEnter={e => mouseEnter(e)}
              onMouseLeave={e => imageMouseOut(e)}
            />
          </figure>
          <figure className="project__images-child project__images-child--5">
            <img
              src={BDA5}
              alt="BDA Image 5"
              className="project__images-img"
              onMouseEnter={e => mouseEnter(e)}
              onMouseLeave={e => imageMouseOut(e)}
            />
          </figure>
          <figure className="project__images-child project__images-child--6">
            <img
              src={BDA6}
              alt="BDA Image 6"
              className="project__images-img"
              onMouseEnter={e => mouseEnter(e)}
              onMouseLeave={e => imageMouseOut(e)}
            />
          </figure>
          <figure className="project__images-child project__images-child--7">
            <img
              src={BDA7}
              alt="BDA Image 7"
              className="project__images-img"
              onMouseEnter={e => mouseEnter(e)}
              onMouseLeave={e => imageMouseOut(e)}
            />
          </figure>
        </div>

        <div className=" project__child  project__descriptions">
          <p className="project__descriptions-description">
            EPIBS is an extensive billing and payment settlement suite, that
            provides transparency and business accountability, which results in
            increased cash flow as well as better business intelligence for
            Ministries, Departments and Agencies.
          </p>
          <p className="project__descriptions-description">
            I worked as the frontend lead in this project and was responsible
            for ensuring an efficient workflow between the front-end and
            back-end engineers. I built the Invoicing Module, Settings Modules.
          </p>
          <p className="project__descriptions-description">
            A major challenge I experienced in this project was having to make
            constant iterations due to incomplete/unclear business requirements
            at the inception of the project. However as the project progressed
            iterations that had to be done reduced.
          </p>
        </div> */}
      </div>
    </div>
  )
}

Project.propTypes = {}

export default Project
