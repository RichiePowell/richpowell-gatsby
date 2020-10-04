import React from "react"
// import { Link } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faLinkedin, faWordpress, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Hero from "../components/hero"
import HeroBG from "../images/digital-world-2.jpg"

library.add(faReact, faPhp, faWordpress, faFacebook, faLinkedin, faMobileAlt, faChevronDown)

const IndexPage = () => (
  <Layout>
    <SEO title="Freelance Web Developer in Mid-Wales" description="I'm Rich Powell and I'm a a freelance full-stack web developer who works with PHP, React, Wordpress, and more. Based in mid-Wales." />
    <Hero title="Rich Powell" subTitles={["Web Developer", "Web Designer", "Web Admin"]} background={HeroBG} />

    <Projects />
  </Layout>
)

export default IndexPage