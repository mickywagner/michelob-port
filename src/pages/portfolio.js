import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Styles/portfolio-css-module.css"
// import { getClass } from "../utils/getclass"

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
      query Images {
        images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
          nodes {
            id
            name
            childImageSharp {
              fixed(width: 400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
  `) 

  const images = data.images.nodes.map(image => <Img key={image.id} fixed={image.childImageSharp.fixed}></Img>)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <main className="photos">
        <p>images</p>
         {images}
      </main>
    </Layout>
  )
}

export default PortfolioPage
