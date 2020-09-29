import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="about">
            <div className="me-photos">
                
            </div>
            <div className="bio">
                <h1>Hi! I'm Michaela</h1>
                <p>While I spent the better part of my childhood dreaming about exploring far-flung places, I didn't get the chance to travel much till I left home for school. I won't bore you with my entire life story, but you can check out some of, what I deem, to be the highlights of my 30 some revolutions around the sun.</p>
                
                <h2>Interests</h2>
                <p>Travel, yoga, photography, videography, web development, writing, animals, and, of course, nature!</p>
                <p>
                    Just being out in nature at any time is amazing, but I have to say my favorite activities that really help me appreciate the outdoors even more. Namely, rock climbing, snowboarding, camping, hiking, river rafting, and yoga.
                </p>
                
                <h2>Skills and Experiences</h2>

                <ul>
                    <li>New Zealand trying to get a job on the Hobbit</li>
                    <li>Hitchhiking around South America - Favorite places Lencois Maranhenses, Chapada Dimantina, Mt Roraima, Torres Del Paine</li>
                    <li>Film school at USC</li>
                    <li>Meeting my adventure partner</li>
                    <li>Park City Magazine - Checkout My Writing</li>
                    <li>Sail Boat Life</li>
                    <li>European henagins</li>
                    <li>Buying a 2004 Sprinter to build my very first mobile home with my partner</li>
                </ul>

            </div>
        </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
