import React from "react"
import { Link } from "gatsby"

import waterfalls from "../images/waterfalls.jpg"
import snapshot from "../images/me.jpeg"
import stones from "../images/IMG_8909.jpg"

import Image from "../components/Image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Styles/about-css-module.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="about">
      <div className="me-photos">
        <img src={stones} alt="At the Great Salt Lake"></img>
        <img src={snapshot} alt="Close up taking photos"></img>
        <img src={waterfalls} alt="Michaela by Japanese Waterfalls"></img>
      </div>
      <div className="bio">
        <h1>Hi! I'm Michaela</h1>
        <p>
          I spent the better part of my childhood dreaming about exploring
          far-flung places, but I didn't get the chance to travel much till I
          left home for school. When I wasn't busy with my classes, I spent my
          free time with people I met in the 'Outdoors Club' exploring
          California as much as I could, but eventually I set my sites further
          afield, taking several trips out of the country backpacking through
          Europe, Asia, and South America. All told I spent roughly 4 years
          travelling abroad in stints and only 'settled' down in Utah due to
          circumstance. Travelling took a toll on my wallet so I decided the
          perfect way to get back on my snowboard after so much time in tropical
          climates would be to get a job in Park City.
        </p>
        <p>
          About a week after moving in I met my partner Mitch, a Utah native,
          who works as a snowboard insructor and river rafting guide. Between
          the two of us we make a pretty solid adventure duo -- or rather trio
          since the adoption of our redtick coonhound pup Scarlett. For the past
          five years we've spent as much time as possible hitting up Utah's
          national parks and various other low-key escapes, taking road trips to
          visit the Pacific Northwest, and even a trip to Japan and South Korea.
        </p>
        <p>
          Our current goal is building out our 2004 Sprinter van into a tiny
          house so we can check out all the amazing places we haven't visited
          yet on wheels.
        </p>

        <h2>Skills and Experiences</h2>
        <ul className="skills">
          <li>Photography/Vidoegraphy</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Lightroom</li>
          <li>Adobe Premiere</li>
          <li>Avid Media Composer</li>
          <li>Canon DSLR Cameras</li>
          <li>HTML, CSS, Javascript</li>
          <li>Writing, Blogging</li>
          <li>Social Media</li>
          <li>Organized</li>
          <li>Self-starter/independent</li>
          <li>Content-Management</li>
        </ul>

        <p>
          Majored in Film Production at University of Southern California.
          Though my life took a different direction photographhy and videography
          are still something I truly love and I try to incorporate them into my
          travels.
        </p>

        <p>
          Obssessed with Lord of the Rings since the age of 10, I ditched school
          for a year to get a job on The Hobbit in New Zealand. They approved of
          my Elvish script, but sadly, production was halted when the director
          fell ill. So I bought a very low-key camper van and tripped around New
          Zealand before making my way back to school via Southeast Asia and
          Europe.
        </p>
        <p>
          After graduating I spent a few months in Brazil teaching English. From
          there I hitchiked through Boliva, Peru, Ecuador, Colombia, Venezuela,
          Chile, and Argentina before returning to the US. But I liked it so
          much I came back for round 2 during the 2014 World Cup and stayed
          about a year checking out the Brazilian coast, spending 2 months on
          friend's sailboat in Panama, trekking through the Amazon, and visting
          some out of this world locations like Chapada Diamantina and Lençois
          Maranhenses.
        </p>
        <p>
          Worked for three years as the Digital Content Editor of Park City
          Magazine, specifically writing tourism-related articles taking photos,
          and creating videos about Park City, Utah and further afield in Utah.
          Check out some of that work{" "}
          <a href="https://www.parkcitymag.com/search?query=michaela+wagner">
            here
          </a>
          .
        </p>

        <h2>Interests</h2>
        <p>
          Getting into the outdoors and exploring with Mitch and Scarlett. These
          days that involves a combination of camping, hiking, rock climbing,
          yoga, river rafting, and snowboarding. And it usually involves a fair
          amount of photographhy and videography.
        </p>
        <p>
          I also have a serious obsession languages. I speak Spanish and
          Porguguese, my Swedish is mediocre at best, can write in Elvish, and
          am currently learning Japanese and various programming
          languages/frameworks. Some of my other interests include writing,
          environment/sustainability, polictics, and cooking/eating.
        </p>
        <p>
          Just being out in nature at any time is amazing, but I have to say my
          favorite activities that really help me appreciate the outdoors even
          more. Namely, rock climbing, snowboarding, camping, hiking, river
          rafting, and yoga.
        </p>
      </div>
    </div>
  </Layout>
)

export default SecondPage
