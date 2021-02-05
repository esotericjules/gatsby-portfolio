import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import SideNav from "./SideNav"
import Content from "./Content"

const Layout = ({ children }) => {
  return (
    <section className={"layout"}>
      <SideNav/>
      <Content />
      {/*<div className={"main-content"}>*/}
      {/*  {children}*/}
      {/*</div>*/}
    
    </section>
  )
}

export default Layout
