import React, { useState } from "react"
import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./Navbar"

const transition = { duration: 2, ease: [0.6, -0.05, 0.01, 0.9] }
// Stagger on menu link
const parent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
}

const Content = () => {
  return (
    <AnimatePresence>
      <motion.article
        className={"content"}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 5 }}
        // className={"layout"}
        tabIndex={0}
      >
        <Navbar />
        <Hero />
        {/* <Skills /> */}
        <Projects />
        <Contact />
        <Footer />
      </motion.article>
      {/* <Panels /> */}
    </AnimatePresence>
  )
}

export default Content

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
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
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
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="right-panel-background"
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete)
        }}
      ></motion.div>
    </>
  )
}
