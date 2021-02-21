import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faLinkedin, faWordpress, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faChevronDown, faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logos from "../components/logos"
import Projects from "../components/projects"
import Testimonials from "../components/testimonials"
import Hero from "../components/hero"
import HeroBG from "../images/digital-world-2.jpg"

library.add(faReact, faPhp, faWordpress, faFacebook, faLinkedin, faMobileAlt, faChevronDown, faQuoteLeft, faChevronLeft, faChevronRight)

const IndexPage = () => (
  <Layout>
    <SEO title="Rich Powell - Freelance Web Developer in Mid-Wales" description="I'm Rich Powell and I'm a a freelance full-stack web developer who works with PHP, React, Wordpress, and more. Based in mid-Wales." ogImage="richpowell-og.png" />
    <Hero title="Rich Powell" subTitles={["Web Developer", "Web Designer", "Web Admin"]} background={HeroBG} />
    {/* <Logos /> */}
    <Projects />
    <Testimonials />
  </Layout>
)

export default IndexPage