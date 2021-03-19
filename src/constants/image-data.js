import React from "react"
import { Link } from "gatsby"
import BDA1 from "../assets/BDA/bda-1.png"
import BDA2 from "../assets/BDA/bda-2.png"
import BDA3 from "../assets/BDA/bda-3.png"
import BDA4 from "../assets/BDA/bda-4.png"
import BDA5 from "../assets/BDA/bda-5.png"
import BDA6 from "../assets/BDA/bda-6.png"
import BDA7 from "../assets/BDA/bda-7.png"

import AVI1 from "../assets/Avicollect/avicollect-1.png"
import AVI2 from "../assets/Avicollect/avicollect-2.png"
import AVI3 from "../assets/Avicollect/avicollect-3.png"
import AVI4 from "../assets/Avicollect/avicollect-4.png"
import AVI5 from "../assets/Avicollect/avicollect-5.png"

export const data = {
  bda: [
    {
      id: 1,
      src: BDA1,
      alt: "EPIBS Welcome Screen",
    },
    {
      id: 2,
      src: BDA2,
      alt: "EPIBS Dashboaed",
    },
    {
      id: 3,
      src: BDA3,
      alt: "EPIBS Create Invoice",
    },
    {
      id: 4,
      src: BDA4,
      alt: "EPIBS Search Invoice",
    },
    {
      id: 5,
      src: BDA5,
      alt: "EPIBS extended menu",
    },
    {
      id: 6,
      src: BDA6,
      alt: "EPIBS Create User",
    },
    {
      id: 7,
      src: BDA7,
      alt: "EPIBS Workflow management",
    },
  ],
  avicollect: [
    {
      id: 1,
      src: AVI1,
      alt: "Avicollect timeline",
    },
    {
      id: 2,
      src: AVI2,
      alt: "Avicollect security charge report",
    },
    {
      id: 3,
      src: AVI3,
      alt: "Avicollect ticket setup",
    },
    {
      id: 4,
      src: AVI4,
      alt: "Avicollect IATA Invoicing",
    },
    {
      id: 5,
      src: AVI5,
      alt: "Avicollect IATA Records",
    },
  ],
}

export const projectDescriptionData = {
  bda: [
    {
      id: 1,
      description:
        "EPIBS is an extensive billing and payment settlement suite, that provides transparency and business accountability, which results in increased cash flow as well as better business intelligence for Ministries, Departments and Agencies.",
    },
    {
      id: 2,
      description:
        "I worked as the frontend lead in this project and was responsible for ensuring an efficient workflow between the front-end and back-end engineers. I built the Invoicing Module, Settings Modules.",
    },
    {
      id: 2,
      description:
        "A major challenge I experienced in this project was having to make constant iterations  due to incomplete/unclear business requirements at the inception of the project. However as the project progressed iterations that had to be done reduced.",
    },
  ],
  avicollect: [
    {
      id: 1,
      description:
        "Avicollect is a data automation platform that enables automatic capture of passenger information required for the billing of statutory charge. It also caters for distribution to respective agencies, as well as the statistical inference of such data for informed business decisions.",
    },
    {
      id: 2,
      description:
        "I was tasked with building the Ticket Sales Setup, Security Charge and Report Modules and I also currently run routine maintenance and addition of new features in the project.",
    },
    {
      id: 2,
      description:
        "The challenge I encountered with this project was that it was my first react project on production and I joined the team half way into the project, so I had to quickly understand the code base and make meaning out of the react, redux concepts that was being used in the project. Luckily my team mates Moses Adebayo and Tunde Ojediran were always ready to provide insights were I needed it.",
    },
  ],
}

export const combinedProjectData = [
  {
    bda: {
      images: [
        {
          id: 1,
          text: "lorem ipsulum dolor",
          src: BDA1,
        },
        {
          id: 2,
          text: "Meta sit",
          src: BDA2,
        },
        {
          id: 3,
          text: "Kalje jdos jjd",
          src: BDA3,
        },
        {
          id: 4,
          text: "lsli jfkls wjdjdjd",
          src: BDA4,
        },
        {
          id: 5,
          text: "contact Kkajak hhdjeej",
          src: BDA5,
        },
        {
          id: 6,
          text: "Bskele Kkajak hhdjeej",
          src: BDA6,
        },
        {
          id: 7,
          text: "fish is a cool hhdjeej",
          src: BDA7,
        },
      ],
      descriptions: [
        {
          id: 1,
          description:
            "EPIBS is an extensive billing and payment settlement suite, that provides transparency and business accountability, which results in increased cash flow as well as better business intelligence for Ministries, Departments and Agencies.",
        },
        {
          id: 2,
          description:
            "I worked as the frontend lead in this project and was responsible for ensuring an efficient workflow between the front-end and back-end engineers. I built the Invoicing Module, Settings Modules.",
        },
        {
          id: 2,
          description:
            "A major challenge I experienced in this project was having to make constant iterations  due to incomplete/unclear business requirements at the inception of the project. However as the project progressed iterations that had to be done reduced.",
        },
      ],
    },
  },
  {
    avicollect: {
      images: [
        {
          id: 1,
          text: "vexillologist austin humblebrag actually",
          src: AVI1,
        },
        {
          id: 2,
          text: "I'm baby kinfolk venmo organic",
          src: AVI2,
        },
        {
          id: 3,
          text: "meta dolor sit di",
          src: AVI3,
        },
        {
          id: 4,
          text: "squid whatever hella cronut tote",
          src: AVI4,
        },
        {
          id: 5,
          text: "Direct trade taiyaki literally cronut 8-bit poke chartreuse",
          src: AVI5,
        },
      ],
      descriptions: [
        {
          id: 1,
          description:
            "Avicollect is a data automation platform that enables automatic capture of passenger information required for the billing of statutory charge. It also caters for distribution to respective agencies, as well as the statistical inference of such data for informed business decisions.",
        },
        {
          id: 2,
          description:
            "Along with a team of frontend engineers I was tasked with building the Ticket Sales Setup, Security Charge and Report Modules and also running routine maintenance and addition of new features in the project.",
        },
        {
          id: 2,
          description:
            "The challenge I encountered with this project was that it was my first react project on production and I joined the team half way into the project, so I had to quickly understand the code base and make meaning out of the react, redux concepts that was being used in the project. Luckily my team mates Moses Adebayo and Tunde Ojediran were always ready to provide insights were I needed it.",
        },
      ],
    },
  },
]

export const newData = [
  {
    project: { name: "epibs", image: [{ id: 1, src: BDA1 }] },
  },
  {
    project: { name: "avicollect", image: [{ id: 1, src: BDA2 }] },
  },
]
