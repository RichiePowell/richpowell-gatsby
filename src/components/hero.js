import React from "react"
import heroStyles from "./hero.module.scss"
import TextLoop from "react-text-loop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = ({ background, title, subTitles }) => {
  return (
    <section className={`hero is-fullheight ${heroStyles.hero}`} style={{backgroundImage: `url(${ background })`}}>
      <div className={`hero-body ${heroStyles.heroBody}`}>
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div class="column is-full">
              <div class={`${heroStyles.columnLeft}`}>
                <h1 className={heroStyles.title}>{ title }</h1>
              </div>

              <div class={`${heroStyles.columnRight}`}>
                <p className={heroStyles.subTitle}>
                  <TextLoop
                    interval={3000}
                  >
                    { subTitles.map((subTitle) => <span>{subTitle}</span>)}
                  </TextLoop>
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div className={`${heroStyles.social}`}>
                {/* <div className="is-pulled-right">
                  <FontAwesomeIcon icon="mobile-alt" /> +44(0)7583607722
                </div> */}
                
                <a href="https://www.facebook.com/richpowell.co.uk"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                <a href="https://www.linkedin.com/in/richard-powell-1b5362ba/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                {/* <a href=""><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a href=""><FontAwesomeIcon icon={['fab', 'instagram']} /></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`hero-footer ${heroStyles.heroFooter}`}>
        <a href="#projects" className="more-below">
          <FontAwesomeIcon icon="chevron-down" />
          View Projects
        </a>
      </div> */}
    </section>
  )
}

export default Hero;