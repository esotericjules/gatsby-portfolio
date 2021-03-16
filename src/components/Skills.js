import React from "react"
import SkillCards from "./SkillCards"
import { FaStar } from "react-icons/fa"
import SectionTitle from "./reusable-components/section-title"

const Skills = () => {
  return (
    <section className="skills">
      <SectionTitle title={"Skills"} />
      <div className="skills__wrapper">
        <div className="skills__card-container">
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
          <SkillCards
            icons={
              <div>
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
                <FaStar className="skills-card_icon" />
              </div>
            }
          />
        </div>
      </div>

      {/* <p>
        I'm baby try-hard sartorial blog poke crucifix. Retro yuccie cliche,
        microdosing lyft pinterest kitsch four loko hashtag direct trade
        vexillologist. DIY unicorn migas iceland, cred kickstarter humblebrag
      </p>
      <p>
        Iscenester offal jean shorts taxidermy crucifix ennui hell of. Ethical
        chillwave celiac cronut chartreuse migas. Quinoa poutine celiac lyft.
        Salvia cardigan flexitarian street art. Sustainable skateboard tumeric
        readymade.
      </p> */}
    </section>
  )
}

export default Skills
