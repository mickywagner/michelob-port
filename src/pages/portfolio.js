import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => {
  const [allPhotos, setAllPhotos] = useState([])
  const url = "https://raw.githubusercontent.com/mickywagner/images-m-portfolio/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setAllPhotos(json))
            .catch(err => console.log(err))
    }, [])

    const images = allPhotos.map(photo => <img src={photo.src} alt="gallery photo"></img>)
    return (
      <Layout>
        <SEO title="Portfolio" />
        <div className="portfolio">
          {images}
        </div>
      </Layout>
    )
  
}

export default PortfolioPage
