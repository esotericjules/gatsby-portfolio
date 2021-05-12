import React from "react"
import ProjectDescription from "./project-description"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Project from "../Project"
import Slider from "react-slick"
import { data } from "../../constants/image-data"
// import { Link } from "gatsby-plugin-modal-routing";

const settings = {
  customPaging: function (i) {
    return <div className="dot"></div>
  },
  dotsClass: "slick-dots slick-thumb",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // speed: 2000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  // pauseOnHover: true,
  swipeToSlide: true,
  // lazyLoad: "progressive",
  arrows: false,
  fade: true,
}

// export const ProjectLeft = ({ title, img, projectDescriptionData, link }) => {
//   return (
//     <div className="project__left">
//       <span className="project__left-title">{title}</span>
//       <div className="project__left-card">
//         <div className="project__left-card__items-wrapper">
//           <div className="project__left-card__thumbnail">
//             <div className="project__left-card__thumbnail-wrapper">
//               <img
//                 src={img}
//                 alt=""
//                 className="project__left-card__thumbnail-img"
//               />
//             </div>
//             <motion.div
//               className="project__left-learn-more"
//               drag="x"
//               dragConstraints={{ left: -100, right: 100 }}
//             >
//               {/* <Link
//                 to="/contact"
//                 asModal
//                 className="project__btn-link"
//                 state={{}}
//               >
//                 More
//               </Link> */}
//               <Link to={"/projects"} className="project__btn-link">
//                 Learn More
//               </Link>
//             </motion.div>
//           </div>
//           <div className="project__left-card__description">
//             <ProjectDescription data={projectDescriptionData} />
//             <div className="project__link">
//               <a href={link} target="blank" className="project__btn-link">
//                 Visit Site &rarr;
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export const ProjectSide = ({
  imgData,
  projectName,
  projectDescriptionData,
}) => {
  return (
    // <Project>
    <div className="project">
      <div className="project__slider-container project__slider-container ">
        <Slider {...settings} className="project__slider">
          {imgData.map(item => {
            return (
              <div key={item.id} className="project__slider-img-wrapper">
                {item.setSize ? (
                  <img src={item.src} style={{ width: "50%", height: "50%" }} />
                ) : (
                  <img src={item.src} />
                )}
              </div>
            )
          })}
        </Slider>
      </div>
      <div className="project__description">
        <div className="project__description-title project__description-title">
          {projectName}
        </div>
        <div className="project__description-msg project__description-msg">
          {projectDescriptionData.map(item => {
            return <p key={item.id}>{item.description}</p>
          })}
        </div>
        <div className="project__view">
          <a href={"#"} target="blank" className="project__view-link">
            Visit Site &rarr;
          </a>
        </div>
      </div>
    </div>
    // </Project>
  )
}

export const ProjectLeftSide = ({
  imgData,
  projectName,
  projectDescriptionData,
}) => {
  return (
    // <Project>
    <div className="project">
      <div className="project__slider-container project__slider-container--left ">
        <Slider {...settings} className="project__slider">
          {imgData.map(item => {
            return (
              <div key={item.id} className="project__slider-img-wrapper">
                {item.setSize ? (
                  <img src={item.src} style={{ width: "50%", height: "50%" }} />
                ) : (
                  <img src={item.src} />
                )}
              </div>
            )
          })}
        </Slider>
      </div>
      <div className="project__description">
        <div className="project__description-title project__description-title--left">
          {projectName}
        </div>
        <div className="project__description-msg project__description-msg--left">
          {projectDescriptionData.map(item => {
            return <p key={item.id}>{item.description}</p>
          })}
        </div>
        <div className="project__view">
          <a href={"#"} target="blank" className="project__view-link">
            Visit Site &rarr;
          </a>
        </div>
      </div>
    </div>
    // </Project>
  )
}

// export const ProjectRightSide = ({
//   imgData,
//   projectName,
//   projectDescriptionData,
// }) => {
//   return (
//     <Project>
//       <div className="project">
//         <div className="project__description">
//           <div className="project__description-title project__description-title--right">
//             {projectName}
//           </div>
//           <div className="project__description-msg project__description-msg--right">
//             {projectDescriptionData.map(item => {
//               return <p key={item.id}>{item.description}</p>
//             })}
//           </div>
//           <div className="project__view">
//             <a href={"#"} target="blank" className="project__view-link">
//               Visit Site &rarr;
//             </a>
//           </div>
//         </div>
//         <div className="project__slider-container project__slider-container--right">
//           <Slider {...settings} className="project__slider">
//             {imgData.map(item => {
//               return (
//                 <div key={item.id} className="project__slider-img-wrapper">
//                   {item.setSize ? (
//                     <img
//                       src={item.src}
//                       style={{ width: "50%", height: "50%" }}
//                     />
//                   ) : (
//                     <img src={item.src} />
//                   )}
//                 </div>
//               )
//             })}
//           </Slider>
//         </div>
//       </div>
//     </Project>
//   )
// }

// export const ProjectSmallScreen = ({
//   imgData,
//   projectName,
//   projectDescriptionData,
// }) => {
//   return (
//     <Project>
//       <div className="project">
//         <div className="project__slider-container project__slider-container--left ">
//           <Slider {...settings} className="project__slider">
//             {imgData.map(item => {
//               return (
//                 <div key={item.id} className="project__slider-img-wrapper">
//                   {item.setSize ? (
//                     <img
//                       src={item.src}
//                       style={{ width: "50%", height: "50%" }}
//                     />
//                   ) : (
//                     <img src={item.src} />
//                   )}
//                 </div>
//               )
//             })}
//           </Slider>
//         </div>
//         <div className="project__description">
//           <div className="project__description-title project__description-title--left">
//             {projectName}
//           </div>
//           <div className="project__description-msg project__description-msg--left">
//             {projectDescriptionData.map(item => {
//               return <p key={item.id}>{item.description}</p>
//             })}
//           </div>
//           <div className="project__view">
//             <a href={"#"} target="blank" className="project__view-link">
//               Visit Site &rarr;
//             </a>
//           </div>
//         </div>
//       </div>
//     </Project>
//   )
// }

// export const ProjectRight = ({ title, img, projectDescriptionData, link }) => {
//   return (
//     <div className="project__right">
//       <span className="project__right-title">{title}</span>
//       <div className="project__right-card">
//         <div className="project__right-card__items-wrapper">
//           <div className="project__right-card__description">
//             <ProjectDescription data={projectDescriptionData} />
//             <div className="project__link">
//               <a href={link} target="blank" className="project__btn-link">
//                 Visit Site &rarr;
//               </a>
//             </div>
//           </div>
//           <div className="project__right-card__thumbnail">
//             <div className="project__right-card__thumbnail-wrapper">
//               <img
//                 src={img}
//                 alt=""
//                 className="project__right-card__thumbnail-img"
//               />
//             </div>

//             <div className="project__right-learn-more">
//               <a href={link} target="blank" className="project__btn-link">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* <div> */}

//         {/* </div> */}
//       </div>
//     </div>
//   )
// }
