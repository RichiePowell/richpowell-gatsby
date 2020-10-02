import React from "react"
import ProjectsData from "../data/projects.yaml"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => (
  <section className="container py-6" id="projects">
    <h2 className="title is-2 is-uppercase has-text-weight-light has-text-centered my-6">Projects</h2>
    <div className="columns is-tablet is-multiline">
      { ProjectsData.projects.map( (project, i) => {
        return (
          <div className="column is-3" key={`projects-${i}`}>
            <div className="card project" style={{height: "100%"}}>
              <a href={[project.url]}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt={ project.name } />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="project-techs">
                    { project.technologies.map( (tech, techIndex ) => {
                      return (
                        <div className={`project-techs__tech ${ tech.toLowerCase() }`} key={`projects-${i}-${techIndex}`}>
                          <FontAwesomeIcon icon={['fab', tech.toLowerCase()]} />
                          {tech}
                        </div>
                      )
                    }) }
                  </div>
                  <h3 className="title is-5">{ project.name }</h3>
                  <p>{ project.description }</p>
                </div>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  </section>
)

export default Projects