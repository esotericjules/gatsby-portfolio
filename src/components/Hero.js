import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import profileImage from "../assets/hero-img-6.png"
// ...GatsbyImageSharpFluid

let greeting = "Hello"
const Hero = () => {
  return (
    <section className={"hero"}>
      <div className={"hero-message"}>
        {/* <h1>Hello, </h1> */}
        <h1 className="hero-message__hello">
          <span>
            {greeting.split("").map((char, index) => {
              let style = { "animation-delay": 0.5 + index / 10 + "s" }
              return <span style={style}>{char}</span>
            })}
            {/* <span className="hero-message__hello_h">H</span>
            <span className="hero-message__hello_e">e</span>
            <span className="hero-message__hello_l-1">l</span>
            <span className="hero-message__hello_l-2">l</span>
            <span className="hero-message__hello_o">o</span> */}
          </span>
        </h1>
        {/* </div> */}
        <p className={"hero-message__intro-1"}>
          I’m Juliet, a front-end engineer with solid experience building robust
          and functional web applications. I have spent most of my career
          building solutions that curb corruption for enterprises in different
          sectors.{" "}
        </p>
        <p className={"hero-message__intro-2"}>
          Oh, To unwind I binge-watch TV-series.
        </p>
      </div>
      {/* <img src={profileImage} /> */}
      {/* <div className="hero-credits">
          <div className="hero-credits__detail hero-credits__detail_profession">
            <h4>Proffession</h4>
            <p>Software Engineering</p>
          </div>
          <div className="hero-credits__detail hero-credits__detail_specialty">
            <h4>Specialty</h4>
            <p>Frontend Engineer</p>
          </div>
          <div className="hero-credits__detail hero-credits__detail_cast">
            <h4>Cast</h4>
            <p>Juliet Onyekaoha</p>
          </div>
          <div className="hero-credits__detail hero-credits__detail_stack">
            <h4>Stack</h4>
            <p>JavaScript, React</p>
          </div>
          <div className="hero-credits__detail   hero-credits__detail_tools">
            <h4>Tools</h4>
            <p>Webstorm, Git, Jenkins, Octopus</p>
          </div>
        </div> */}
      {/* <div className={"hero-name"}>
          <p className="hero-name__j">J</p>
          <p className="hero-name__u">U</p>
          <p  className="hero-name__l">L</p>
          <p  className="hero-name__i">I</p>
          <p  className="hero-name__e">E</p>
          <p  className="hero-name__t">T</p>
        {/*<img src={profileImage} />*/}
      {/* </div> */}
    </section>
  )
}

export default Hero
