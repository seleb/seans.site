import Link from "next/link"
import { ComponentProps } from "react"
import { Preview } from "./preview"
import Project from "./project"

export default function Gallery({
  projects,
  project,
}: {
  projects: (ComponentProps<typeof Project>["project"] &
    ComponentProps<typeof Preview>["project"] & { slug: string })[]
  project?: string
}) {
  return (
    <>
      {projects.map((p) =>
        p.slug === project ? (
          <Preview project={p} />
        ) : (
          <Link
            prefetch={false}
            key={p.slug}
            href={`/project/${p.slug}#preview`}
          >
            <a className={`project${p.showcase ? ' showcase' : ''}`}>
              <Project project={p} />
            </a>
          </Link>
        )
      )}
    </>
  )
}
