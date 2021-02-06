import Link from "next/link"
import React, { ComponentProps } from "react"
import Project from "./project"

export default function Gallery({
  projects,
}: {
  projects: (ComponentProps<typeof Project>["project"] & { slug: string })[]
}) {
  return (
    <>
      {projects.map((p) => (
        <Link key={p.slug} href={`/project/${p.slug}`}>
          <a className="project">
            <Project project={p} />
          </a>
        </Link>
      ))}
    </>
  )
}
