import React from 'react';
import { graphql, StaticQuer } from 'gatsby'
import styled from 'styled-componets'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
    const data = useStaticQuery(graphql`
    query HomePage {
      image: file(relativePath: {eq: "IMG_8932.jpg"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  
    }
  `)
}