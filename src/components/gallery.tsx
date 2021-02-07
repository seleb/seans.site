import Link from "next/link"
import { ComponentProps } from "react"
import { Preview } from "./preview"
import Project from "./project"

export default function Gallery({
  projects,
  project,
}: {
  projects: (ComponentProps<typeof Project>["project"] & { slug: string })[]
  project?: ComponentProps<typeof Preview>["project"]
}) {
  return (
    <>
      {project && <Preview project={project} />}
      {projects.map((p) => (
        <Link prefetch={false} key={p.slug} href={`/project/${p.slug}`}>
          <a className="project">
            <Project project={p} />
          </a>
        </Link>
      ))}
    </>
  )
}
