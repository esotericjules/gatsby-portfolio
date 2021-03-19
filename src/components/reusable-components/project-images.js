import React, { useContext } from "react"
import ProjectContext from "../../context/projectContext"

export default ({ data, mouseEnter, imageMouseOut }) => {
  const value = useContext(ProjectContext)
  const { imageData } = value
  console.log(value)
  return (
    <div className={"project__images project__child"} tabIndex={0}>
      {data.map(img => {
        return (
          <figure
            tabIndex={0}
            className={`project__images-child project__images-child--${img.id}`}
            key={img.id}
            // onMouseEnter={e => mouseEnter(e)}
            // onMouseLeave={e => imageMouseOut(e)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="project__images-img"
              onMouseEnter={e => mouseEnter(e)}
              onMouseLeave={e => imageMouseOut(e)}
            />
          </figure>
        )
      })}
    </div>
  )
}
