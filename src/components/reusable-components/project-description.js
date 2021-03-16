import React from "react"

export default ({ data }) => {
  return (
    <div className=" project__child  project__descriptions">
      {data.map(item => {
        return (
          <p className="project__descriptions-description">
            {item.description}
          </p>
        )
      })}
    </div>
  )
}
