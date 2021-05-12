import React from "react"
import "./src/css/main.css"
import { AnimatePresence } from "framer-motion"

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)
