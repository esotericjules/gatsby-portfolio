import React from "react"
import SectionTitle from "./reusable-components/section-title"
import SocialLinks from "../constants/socialLinks"
// Transition Animation

const Contact = () => {
  return (
    <div className="contact">
      {/* <SectionTitle title="Contact" /> */}
      <div className="contact__msg">
        <p className="contact__msg-first">Want to get in touch with me ?</p>
        <p className="contact__msg-second">
          {" "}
          You can hit me up through these channels
        </p>
        <div className="contact__social-links">
          <SocialLinks />
          <p className="contact__social-links--number">+2347067282979</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
