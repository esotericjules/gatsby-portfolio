import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import  profileImage from "../assets/hero-img-6.png"
// ...GatsbyImageSharpFluid
console.log(profileImage)
const Hero = () => {
  return(
    <section className={"hero"}>
        <div className={"hero-message"}>
          <h1>Hello, </h1>
          <p>I’m Juliet, a front-end engineer with solid experience building robust and functional web applications. I have spent most of my career building applications that provide solutions that curb corruption for enterprises in different sectors.  </p>
          <p>To unwind I binge-watch TV-series, read a good book or visit friends.</p>
        </div>
        <div className={"hero-img"}>
        {/*<img src={profileImage} />*/}
        </div>
    </section>
  )
}

export default Hero
