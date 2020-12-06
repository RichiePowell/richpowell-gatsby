import React from "react"
import ProjectsData from "../data/projects.yaml"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "./image"

const Projects = () => (
  <section className="container py-6" id="projects">
    <h2 className="title is-1 has-text-weight-semibold has-text-centered my-6">Projects</h2>
    <div className="columns is-tablet is-multiline my-5">
      { ProjectsData.projects.map( (project, i) => {
        return (
          <div className="column is-4" key={`projects-${i}`}>
            <div className="card project" style={{height: "100%"}}>
              <a href={[project.url]}>
                { project.image ?
                  (
                    <div className="card-image">
                      <figure className="image is-4by2">
                        <Image filename={`${project.image}`} alt={ project.name } width={318} height={166} />
                      </figure>
                    </div>
                  ) : ''}
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