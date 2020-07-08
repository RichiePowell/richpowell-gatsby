import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

import HeroBG from "../images/bg.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Freelance Web Developer in Mid-Wales" />
    <section className="hero is-primary is-fullheight has-text-centered mb-6" style={{background: `url(${HeroBG}) no-repeat center center`}}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">I'm a freelance web developer.</h1>
          <p className="subtitle">And this is some text underneath.</p>
        </div>
      </div>
    </section>

    <Projects />
  </Layout>
)

export default IndexPage