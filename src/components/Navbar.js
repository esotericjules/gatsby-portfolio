import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import SvgComponent, { Signature } from "../assets/signature.js"

const Navbar = () => {
  return (
    <nav className="navbar" aria-labelledby="main navigation">
      <div className="navbar__logo">
        {/* <SvgComponent /> */}
        <Signature />
      </div>
      <ul className="navbar__list">
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
