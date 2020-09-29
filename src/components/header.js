import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background:  `rgb(41, 41, 41)`,
      display: `flex`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem`,
        
      }}
    >
      <h2 style={{ 
        margin: 0,
        fontSize: `1rem`
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            padding: `0 15px`
          }}
        >
          Home
        </Link>
        <Link
          to="/about/"
          style={{
            color: `white`,
            padding: `0 15px`
          }}
        >
          About
        </Link>
        <Link
          to="/portfolio/"
          style={{
            color: `white`,
            padding: `0 15px`
          }}
        >
          Portfolio
        </Link>
        
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
