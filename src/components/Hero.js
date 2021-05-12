import React, { useState } from "react"
import { motion } from "framer-motion"
import { appHelpers } from "../helpers/app.helpers"
// import Image from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import profileImage from "../assets/img-3.jpg"
import SvgComponent from "../assets/signature.js"

// ...GatsbyImageSharpFluid

//TODO:
// 1. Complete responsiveness
//2. Create Strapi backend

const Hero = () => {
  return (
    <>
      {/* <SvgComponent /> */}
      <section className={"hero"} tabIndex={0}>
        <div className="hero__greeting">
          <h1 className="hero__greeting-h1">Hi!</h1>
        </div>
        <div className="hero__intro">
          <div className="hero__intro-description">
            <div className="hero__intro-description--1">
              <h1>
                <span>
                  I’m <span className="hero__name">Juliet Onyekaoha,</span>
                </span>
                <span>
                  a{" "}
                  <span style={{ fontFamily: "Cinzel", fontWeight: 700 }}>
                    front-end engineer{" "}
                  </span>
                </span>{" "}
                <span style={{ textAlign: "left" }}> & a budding </span>
                <span style={{ fontFamily: "Cinzel", fontWeight: 700 }}>
                  mobile developer.
                </span>
                {/* <span>I’m Juliet Onyekaoha,</span>
              <span>
                a{" "}
                <span style={{ fontFamily: "Cinzel" , fontWeight: 700 }}>
                  front-end engineer{" "}
                </span>
                with{" "}
              </span>{" "}
              <span> solid experience building </span>
              <span>robust and functional web </span>{" "}
              <span>applications & a budding </span>
              <span style={{ fontFamily: "Cinzel", fontWeight: 700 }}>
                mobile developer.
              </span> */}
              </h1>
            </div>
            {/* On tablet devices, the hero__intro-tablet class will display the image
          & description--2 side by side as flex items. Also the other
          __intro-description--2 class would be hidden from the view */}

            <div className="hero__intro-description--2">
              <p className={"hero__intro-3 mb-8"}>
                I have spent most of my career building solutions that provides
                transparency and prevents revenue lekages for enterprises in
                different sectores.
              </p>
              <p className={" mb-8"}>
                I love the speed and agility that effective team work offers and
                equally the clarity of mind that comes from grinding away all by
                myself.
              </p>
              <p className={"hero__intro-3.1 mb-8"}>
                I believe that the world of tech offers endless possibilities to
                enrich our lives with better experiences and I'm always on the
                look out for the enext big thing.
              </p>
              <p className={"hero__intro-3.2 mb-8"}>
                I've recently journeyed into the topsy turyvy world of mobile
                development. On the good days, I'm loving it, on the bad days,
                oh well...we move.
              </p>
              <p className={"hero__intro-3.3 mb-8"}>
                Oh, To unwind I binge-watch TV-series.
              </p>
            </div>
          </div>
        </div>
        <div className="hero__intro-tablet">
          <div className="hero__intro-tablet--image">
            <div className="hero__intro-tablet--image-wrapper">
              <StaticImage
                src={"../assets/img-3.jpg"}
                alt="profile-image-first"
                placeholder="blurred"
              />
              <div className="hero__intro-tablet--image-wrapper__inner">
                <StaticImage
                  src={"../assets/img-3.jpg"}
                  alt="profile-image-second"
                  placeholder="blurred"
                />
              </div>
            </div>
          </div>
          <div className="hero__intro-tablet__description--2">
            <p className={"hero__intro-3 mb-8"}>
              I have spent most of my career building solutions that provides
              transparency and prevents revenue lekages for enterprises in
              different sectores.
            </p>
            <p className={"mb-8"}>
              I love the speed and agility that effective team work offers and
              equally the clarity of mind that comes from grinding away all by
              myself.
            </p>
            <p className={"hero__intro-3.1 mb-8"}>
              I believe that the world of tech offers endless possibilities to
              enrich our lives with better experiences and I'm always on the
              look out for the next big thing.
            </p>
            <p className={"hero__intro-3.2 mb-8"}>
              I've recently journeyed into the topsy turyvy world of mobile
              development. On the good days, I'm loving it, on the bad days, oh
              well...we move.
            </p>
            <p className={"hero__intro-3.3 mb-8"}>
              Oh, To unwind I binge-watch TV-series.
            </p>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image__wrapper">
            <StaticImage
              src={"../assets/img-3.jpg"}
              alt="profile-image-first"
              placeholder="blurred"
            />
            <div className="hero-image__wrapper-inner">
              {/* <img src={profileImage} /> */}
              <StaticImage
                src={"../assets/img-3.jpg"}
                alt="profile-image-second"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
