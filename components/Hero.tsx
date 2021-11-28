import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import TextLoop from "react-text-loop";
import heroStyles from "../styles/hero.module.scss"
import Image from "next/image"
import { Fade } from "react-reveal"

interface HeroProps {
  background: any,
  title: string,
  subTitles: string[],
}

const Hero: React.FC<HeroProps> = ({ background, title, subTitles }) => {
  return (
    <section className={`hero is-fullheight ${heroStyles.hero}`}>
      <Image
        className={heroStyles.heroImage}
        src={ background }
        alt="Rich Powell"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={`hero-body ${heroStyles.heroBody}`}>
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-full">
              <Fade left>
                <div className={`${heroStyles.columnLeft}`}>
                  <h1 className={heroStyles.title}>{ title }</h1>
                </div>
              </Fade>

              <Fade right>
                <div className={`${heroStyles.columnRight}`}>
                  <div className={heroStyles.subTitle}>
                    <TextLoop
                      interval={3000}
                    >
                      { subTitles.map((subTitle, idx) => <span key={idx}>{subTitle}</span> ) }
                    </TextLoop>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <Fade up>
            <div className="columns">
              <div className="column">
                <div className={`${heroStyles.social}`}>
                    {/* <div className="is-pulled-right">
                      <FontAwesomeIcon icon="mobile-alt" /> +44(0)7583607722
                    </div> */}
                    
                    <a href="https://www.facebook.com/richpowell.co.uk"><FontAwesomeIcon icon={['fab', 'facebook' as IconName]} /></a>
                    <a href="https://www.linkedin.com/in/richard-powell-1b5362ba/"><FontAwesomeIcon icon={['fab', 'linkedin' as IconName]} /></a>
                    {/* <a href=""><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    <a href=""><FontAwesomeIcon icon={['fab', 'instagram']} /></a> */}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* <Fade up>
        <div className={`hero-footer ${heroStyles.heroFooter}`}>
          <a href="#projects" className="more-below">
            <FontAwesomeIcon icon="chevron-down" />
            View Projects
          </a>
        </div>
      </Fade> */}
    </section>
  )
}

export default Hero;