import React from "react"
import { data, projectDescriptionData } from "../constants/image-data"

const ProjectContext = React.createContext()

export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={{ imageData: data }}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
