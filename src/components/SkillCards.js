import React from "react"
import { FaStar } from "react-icons/fa"

import PropTypes from "prop-types"

const SkillCards = ({ icons }) => {
  return (
    <div className="skills-card">
      <span>JavaScript</span>
      <div className="skills-card__icon-container">
        {icons}
        {/* <FaStar className="skills-card_icon" />
        <FaStar className="skills-card_icon" />
        <FaStar className="skills-card_icon" /> */}
      </div>
    </div>
  )
}

SkillCards.propTypes = {}

export default SkillCards
