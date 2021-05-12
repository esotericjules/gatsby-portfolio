/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "WebDev Portfolio",
    description: "This is WebDev Portfolio Site",
    author: "@webdev",
    twitterUsername: "@john_smilga",
    image: "/twitter-img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cinzel Decoratice\:400,700,900`,
          `Cinzel\:400,500,600,700,800,900`,
          `Josefin Slab\:100,200,400,500,600,700`,
          `Cormorant\:300,400,500,600,700`,
          `Cormorant Upright\:300,400,500,600,700`,
          `Source Sans Pro\:200,300,400,600,700,900`,
          `Oswald\:200,300,400,600,700`,
          `Lato\:100,300,400,700,900`,
          `Roboto\:100,300,400,500,700,900`,
          `Raleway\:100,200,300,400,500,700,900`,
          `Tangerine\:400,700`,
          `Italiana\:400`,
          `Mate SC\:400`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [],
        singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: "#___gatsby",

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          style: {
            overlay: {
              position: `fixed`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(103, 99, 99, 0.75)`,
              display: `flex`,
              justifyContent: `center`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              background: `none`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
            button: {
              color: `red`,
            },
          },
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Roboto",
    //           variants: ["400", "700"],
    //         },
    //         { family: "Open Sans" },
    //       ],
    //     },
    //   },
    // },
  ],
}
