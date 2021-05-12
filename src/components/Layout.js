import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import SideNav from "./SideNav"
import Content from "./Content"
import { motion, AnimatePresence } from "framer-motion"

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }
// Stagger on menu link
const parent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
}

const Layout = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.section
        className="layout"
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        // transition={{ ...transition, delay: 1 }}
        transition={{ ...transition, delay: 1 }}

        // transition={
        //   type: "spring",
        //   mass: 0.35,
        //   stiffness: 75,
        //   duration: 0.3,
        //   delay: 1.5,
        // }}
      >
        {/* <SideNav /> */}
        {/* <Content /> */}
        {/*<div className={"main-content"}>*/}
        {children}
        {/*</div>*/}
      </motion.section>
      {/* <Panels /> */}
      <SlideRightPanel />
    </AnimatePresence>
  )
}

export default Layout

const Panels = () => {
  const [panelComplete, setPanelComplete] = useState(false)
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [window.innerHeight, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{
          ...transition,
          duration: 2,
          times: [0, 0.5, 1],
        }}
        style={{ background: panelComplete ? "#e7e7de" : "#fff" }}
        className="left-panel-background "
      ></motion.div>
      <motion.div
        style={{
          background: panelComplete ? "#e7e7de" : "#fff",
        }}
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 1, times: [0, 0.5, 1] }}
        className="right-panel-background"
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete)
        }}
      ></motion.div>
    </>
  )
}

const SlideRightPanel = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{
        // height: [0, window.innerHeight, 0],
        width: [0, window.innerWidth, 0],
        right: [window.innerWidth, 0, 0],
        bottom: [window.innerWidth, 0, 0],
      }}
      // exit={{ width: [0, window.innerHeight, 0], right: [null, 0, 0] }}
      transition={{ ...transition, duration: 1.5, times: [0, 0.5, 1] }}
      // style={{ backgroundColor: `rgba` }}
      className="slide-right-panel"
    ></motion.div>
  )
}
