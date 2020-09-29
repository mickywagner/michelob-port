import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="portfolio">
            <h1>Temp page</h1>
    </div>
    <Link to="/about/">About</Link> <br />
    <Link to="/">Home</Link>
  </Layout>
)

export default PortfolioPage
