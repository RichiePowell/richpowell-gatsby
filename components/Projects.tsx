import Image from 'next/image'
import ProjectsData from "../data/projects.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Fade } from 'react-reveal'

const Projects = () => (
  <section className="container py-6" id="projects">
    <h2 className="title is-1 has-text-weight-semibold has-text-centered my-6">Projects</h2>
    <p>Some of the projects that I&apos;ve worked on. This list includes my own projects, as well as a selection of client projects.</p>
    <div className="columns is-tablet is-multiline my-5">
      { ProjectsData.projects.map( (project, i) => {
        return (
          <Fade up key={`projects-${i}`}>
            <div className="column is-4">
              <div className="card project" style={{height: "100%"}}>
                <a href={ project.url }>
                  { project.image ?
                    (
                      <div className="card-image">
                        <figure className="image is-4by2">
                          <Image
                            src={`/images/portfolio/${project.image}`}
                            alt={ project.name }
                            layout="responsive"
                            objectFit="cover"
                            width={318}
                            height={166}
                          />
                        </figure>
                      </div>
                    ) : ''}
                  <div className="card-content">
                    <div className="project-techs">
                      { project.technologies.map( (tech, techIndex ) => {
                        return (
                          <div className={`project-techs__tech ${ tech.toLowerCase() }`} key={`projects-${i}-${techIndex}`}>
                            <FontAwesomeIcon icon={['fab', tech.toLowerCase() as IconName]} />
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
          </Fade>
        )
      })}
    </div>
  </section>
)

export default Projects