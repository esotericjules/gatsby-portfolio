import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import "../assets/scss/style.scss"
import { ProjectProvider } from "../context/projectContext"

export default () => {
  return (
    <>
      <ProjectProvider>
        <Layout>
          <Hero />
        </Layout>
      </ProjectProvider>
    </>
  )
}
// ...GatsbyImageSharpFluid
