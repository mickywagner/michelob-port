import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
            <div className="intro">
                <h1>Michaela Wagner</h1>
                <p>Traveller + Writer + Photographer/Videographer + Developer + Adventurer Extraordinaire</p>
            </div> 
    </div>
    <Link to="/about/">About</Link> <br />
    <Link to="/portfolio/">Portfolio</Link>
  </Layout>
)

export default IndexPage
