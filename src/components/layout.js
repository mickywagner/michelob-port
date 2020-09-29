/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          background:  `rgb(41, 41, 41)`,
          color: `white`,
          display: `flex`,
          fontSize: `0.5rem`,
          alignItems: `center`,
          paddingLeft: `20px`
        }}>
          <p style={{
            padding: 0,
            margin: 0,
          }}
          
          >Michaela Wagner © Built with 
          {`  `}
          {new Date().getFullYear()}
          {`  `}
          <a href="https://www.gatsbyjs.com"
            style={{color: `white`}}
          >Gatsby</a>
          </p>
          
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
