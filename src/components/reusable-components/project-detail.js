import React, { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
// Transition Animation

const transition = { duration: 2, ease: [0.6, -0.05, 0.01, 0.9] }
// Stagger on menu link
const parent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
}

const ProjectDetail = () => {
  return (
    <AnimatePresence>
      <>
        <motion.section
          initial={{
            opacity: 0,
            x: -100,
            backgroundColor: "#000",
            height: "100vh",
            color: "#000",
          }}
          animate={{
            opacity: 1,
            x: 0,
            backgroundColor: "#fff",
            height: "100vh",
            color: "#000",
          }}
          transition={{ ...transition, times: [0, 1, 2] }}
        >
          <motion.h1>
            Project
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              reprehenderit ipsum pariatur velit, dolores sint, id corporis unde
              a alias at perferendis voluptates cum facere quo atque quod,
              blanditiis nihil.
            </p>
          </motion.h1>
        </motion.section>
        <Panels />
      </>
    </AnimatePresence>
  )
}

export default ProjectDetail

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

const SlideRightPanel = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{
        height: [0, window.innerHeight, 0],
        bottom: [window.innerHeight, 0, 0],
      }}
      exit={{}}
      transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      style={{ backgroundColor: "#000" }}
      className="slide-right-panel"
    ></motion.div>
  )
}
