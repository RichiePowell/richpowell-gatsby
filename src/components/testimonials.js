import React from "react"
import style from "./testimonials.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Testimonials = () => (
  <section className={`py-6 alt shadow ${style.testimonial}`} id="testimonials">
    <CarouselProvider
      naturalSlideWidth={100}
      isIntrinsicHeight
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <div className="container py-6">
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop px-6">
                <FontAwesomeIcon icon="quote-left" className={style.testimonial__icon} />
                <blockquote className="mt-6">
                  <p>Exceptional service provided by Richard, he went above and beyond through all stages of the new website and exceeded all expectations!</p>
                  <p>I'm more than happy with with my new website and the overall experience with dealing with Richard, thank you for all your hard work!</p>
                  <hr />
                  <footer><cite>Simon Curley</cite><br />
                  <a href="https://www.curleylocks.co.uk/">Curley Locks Cardiff Locksmith</a></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </Slide>

        <Slide index={1}>
          <div className="container py-6">
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop px-6">
                <FontAwesomeIcon icon="quote-left" className={style.testimonial__icon} />
                <blockquote className="mt-6">
                  <p>I engaged Richard to design me a bespoke Web Site, from inception to completion he was totally professional and listened to my requirements.</p>
                  <p>Richard is contactable and reacts to requests instantly but most of all his work is exemplary. I am the proud owner of a Web Site that looks great and performs really well.</p>
                  <hr />
                  <footer><cite>Bernard Morgan</cite><br />
                  <a href="https://btmorganheatingengineers.co.uk/">BT Morgan Heating Engineers</a></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </Slide>

        <Slide index={3}>
          <div className="container py-6">
            <div className="columns is-centered">
              <div className="column is-two-thirds-desktop px-6">
                <FontAwesomeIcon icon="quote-left" className={style.testimonial__icon} />
                <blockquote className="mt-6">
                  <p>This role was dependent on having a good eye for design and the ability to convert a mock up design into a fully functional website.</p>
                  <p>Richard built up good relationships with our clients. He would be an asset to any employer and we wish him well for any endeavor he chooses to pursue.</p>
                  <hr />
                  <footer>
                    <cite>Gareth John</cite><br />
                    ITCS
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </Slide>
      </Slider>
      <ButtonBack className={style.testimonial__prev}><FontAwesomeIcon icon="chevron-left" /></ButtonBack>
      <ButtonNext className={style.testimonial__next}><FontAwesomeIcon icon="chevron-right" /></ButtonNext>
    </CarouselProvider>
  </section>
)

export default Testimonials