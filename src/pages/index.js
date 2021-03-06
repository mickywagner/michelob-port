import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Styles/home-css-module.css"



const IndexPage = () => {
  return (
    <Layout>
    <SEO title="Home" />
    <div className="home"
    >
            <div className="intro">
                <h1>Michaela Wagner</h1>
                <p>Traveller + Writer + Photographer/Videographer + Developer + Adventurer Extraordinaire</p>
            </div> 
    </div>
  </Layout>
  )

}
export default IndexPage
