import Head from 'next/head'
import Layout from "../components/Layout"
// import Logos from "../components/Logos"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rich Powell - Freelance Web Developer in Mid-Wales</title>
        <meta name="description" content="I'm Rich Powell and I'm a a freelance full-stack web developer who works with PHP, React, Wordpress, and more. Based in mid-Wales." />
        <meta property="og:image" content="richpowell-og.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero title="Rich Powell" subTitles={["Web Developer", "Web Designer", "Web Admin"]} background="/images/digital-world-2.jpg" />
      {/* <Logos /> */}
      {/* <Projects /> */}
      <Testimonials />
    </Layout>
  )
}
