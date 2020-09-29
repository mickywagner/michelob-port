import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/Styles/home-css-module.css"

console.log(styles)
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
            <div className="intro">
                <h1>Michaela Wagner</h1>
                <p>Traveller + Writer + Photographer/Videographer + Developer + Adventurer Extraordinaire</p>
            </div> 
    </div>
  </Layout>
)

export default IndexPage
