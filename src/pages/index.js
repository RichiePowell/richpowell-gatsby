import React from "react"
// import { Link } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Hero from "../components/hero"
import HeroBG from "../images/digital-world-2.jpg"

library.add(fab, faMobileAlt, faChevronDown)

const IndexPage = () => (
  <Layout>
    <SEO title="Freelance Web Developer in Mid-Wales" />
    <Hero title="Rich Powell" subTitles={["Web Developer", "Web Designer", "Web Admin"]} background={HeroBG} />

    <Projects />
  </Layout>
)

export default IndexPage