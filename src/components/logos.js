import React from "react"
import * as logoStyles from "./logos.module.scss"
// import Image from "./image"

const Logos = () => (
  <section className={`py-3 alt shadow ${logoStyles.logoBlock}`} id="logos">
    <div className="container px-5">
      {/* <div className="columns is-centered mb-0">
        <div className="column mb-0">
          <h3 className="small-head has-text-centered mt-4">Companies I've worked with</h3>
        </div>
      </div> */}
      <div className="columns is-mobile is-centered is-vcentered is-multiline">
        <div className="column is-half-mobile">
          <img src={ require("../images/logos/weaveworks.jpg")} width="200" height="100" alt="Weaveworks" />
        </div>
        <div className="column is-half-mobile">
          <img src={ require("../images/logos/motonovo.jpg")} width="200" height="100" alt="Motonovo" />
        </div>
        <div className="column is-half-mobile">
          <img src={ require("../images/logos/core.jpg")} width="200" height="100" alt="CORE" />
        </div>
        <div className="column is-half-mobile">
          <img src={ require("../images/logos/techniquest.jpg")} width="200" height="100" alt="Techniquest" />
        </div>
        <div className="column is-half-mobile">
          <img src={ require("../images/logos/samuelheath.jpg")} width="200" height="100" alt="Samuel Heath" />
        </div>
      </div>
    </div>
  </section>
)

export default Logos