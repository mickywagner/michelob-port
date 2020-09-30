import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Styles/portfolio-css-module.css"

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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)


  const images = data.images.nodes.map((image, i) => (

      <Img
        key={image.id}
        fluid={image.childImageSharp.fluid}
        className="image-grid"
      ></Img>
  ))

  return (
    <Layout>
      <SEO title="Portfolio" />

      <main className="photos">{images}</main>
    </Layout>
  )
}

export default PortfolioPage
