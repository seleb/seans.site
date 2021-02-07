import Link from "next/link"
import { ComponentProps } from "react"
import LinkList from "./linkList"

export function Preview({
  project,
}: {
  project: {
    slug: string
    title: string
    preview: string
    tagline: string
    association: string
    description: string
    links: ComponentProps<typeof LinkList>["links"]
  }
}) {
  return (
    <article key={project.slug} className="project-page">
      <img
        alt={`${project.title} preview`}
        src={project.preview}
        className="preview"
        loading="eager"
      />
      <Link href="/">
        <a aria-label="Home">⛢</a>
      </Link>
      <main>
        <h1 dangerouslySetInnerHTML={{ __html: project.title }} />
        <h2 dangerouslySetInnerHTML={{ __html: project.tagline }} />
        <h3>{project.association}</h3>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
        <LinkList links={project.links} />
      </main>
    </article>
  )
}
