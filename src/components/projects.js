import React from "react"
import ProjectsData from "../data/projects.yaml"

const Projects = () => (
  <section className="container" id="projects">
    <h2 className="title is-2">Projects</h2>
    <div className="columns is-tablet is-multiline">
      { ProjectsData.projects.map( (project, i) => {
        return (
          <div className="column is-3" key={`projects-${i}`}>
            <div className="card" key={`projects-${i}`} style={{height: "100%"}}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt={ project.name } />
                </figure>
              </div>
              <div className="card-content">
                { project.technologies.map( (tech, techIndex ) => {
                  return (
                    <div className={`project-tech ${ tech.toLowerCase() }`} key={`projects-${i}-${techIndex}`}>
                      {tech}
                    </div>
                  )
                }) }
                <h3 className="title is-5">{ project.name }</h3>
                <p>{ project.description }</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </section>
)

export default Projects