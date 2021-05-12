import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import "../assets/scss/style.scss"
import { ProjectProvider } from "../context/projectContext"
import Content from "../components/Content"
import AnimatedCursor from "react-animated-cursor"

export default () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        color="255, 180, 5"
        outerAlpha={0.7}
        innerScale={0.7}
        outerScale={5}
      />
      <ProjectProvider>
        <Layout>
          <Content />
        </Layout>
      </ProjectProvider>
    </>
  )
}
// ...GatsbyImageSharpFluid
