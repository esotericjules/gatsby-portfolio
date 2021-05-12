import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
    clickFn: false,
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
    clickFn: false,
  },
  {
    id: 3,
    icon: <FaEnvelopeOpen className="social-icon"></FaEnvelopeOpen>,
    url: "https://www.twitter.com",
    clickFn: false,
  },
  // {
  //   id: 4,
  //   icon: <FaPhoneAlt className="social-icon"></FaPhoneAlt>,
  //   clickFn: true,
  //   // url: "https://www.twitter.com",
  // },

  // {
  //   id: 4,
  //   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //   url: "https://www.twitter.com",
  // },
  // {
  //   id: 5,
  //   icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  //   url: "https://www.twitter.com",
  // },
]

let displayNumberClass
const displayNo = () => {
  displayNumberClass = "displayNumber"
}

// Let phoneNo =
const links = data.map(link => {
  return (
    <li key={link.id} onClick={link.clickFn && displayNo}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
