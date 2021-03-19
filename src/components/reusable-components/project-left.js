import React from "react"
import ProjectDescription from "./project-description"

export const ProjectLeft = ({ title, img, projectDescriptionData, link }) => {
  return (
    <div className="project__left">
      <span className="project__left-title">{title}</span>
      <div className="project__left-card">
        <div className="project__left-card__items-wrapper">
          <div className="project__left-card__thumbnail">
            <img
              src={img}
              alt=""
              className="project__left-card__thumbnail-img"
            />
          </div>
          <div className="project__left-card__description">
            <ProjectDescription data={projectDescriptionData} />
          </div>
        </div>
        <div>
          <div className="project__link">
            <a href={link} target="blank" className="project__btn-link">
              Visit Site &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ProjectRight = ({ title, img, projectDescriptionData, link }) => {
  return (
    <div className="project__right">
      <span className="project__right-title">{title}</span>
      <div className="project__right-card">
        <div className="project__right-card__items-wrapper">
          <div className="project__right-card__description">
            <ProjectDescription data={projectDescriptionData} />
          </div>
          <div className="project__right-card__thumbnail">
            <img
              src={img}
              alt=""
              className="project__right-card__thumbnail-img"
            />
          </div>
        </div>
        <div>
          <div className="project__link">
            <a href={link} target="blank" className="project__btn-link">
              Visit Site &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
