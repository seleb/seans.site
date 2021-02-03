import React from "react"
import { Link } from "gatsby"
import Project from "./project"

const Gallery = ({ projects }) => {
  return projects.map(project => (
    <article key={project.fields.slug} className="project">
      <Link to={project.fields.slug}>
        <Project project={project} />
      </Link>
    </article>
  ))
}

export default Gallery
