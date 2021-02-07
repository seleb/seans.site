import Link from "next/link"
import { ComponentProps } from "react"
import Project from "./project"

export default function Gallery({
  projects,
}: {
  projects: (ComponentProps<typeof Project>["project"] & { slug: string })[]
}) {
  return (
    <>
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
