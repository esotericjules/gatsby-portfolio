import React from "react"

export default ({ data, mouseEnter, imageMouseOut }) => {
  return (
    <div className={"project__images project__child"}>
      {data.map(img => {
        return (
          <figure
            className={`project__images-child project__images-child--${img.id}`}
            key={img.id}
            onMouseEnter={e => mouseEnter(e)}
            onMouseLeave={e => imageMouseOut(e)}
          >
            <img
              src={img.src}
              alt={`BDA ${img.id}`}
              className="project__images-img"
            />
          </figure>
        )
      })}
    </div>
  )
}
