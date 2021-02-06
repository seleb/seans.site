import Link from "next/link"
import React from "react"
import Project from "./project"

export default function Gallery({ projects }) {
  return projects.map((p) => (
    <Link key={p.slug} href={`/project/${p.slug}`}>
      <a className="project">
        <Project project={p} />
      </a>
    </Link>
  ))
}
