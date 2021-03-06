import Link from "next/link"
import { ComponentProps } from "react"
import LinkList from "./linkList"

export function Preview({
  project: { slug, title, preview, tagline, association, description, links },
}: {
  project: {
    slug: string
    title: string
    preview: string
    tagline?: string
    association?: string
    description?: string
    links?: ComponentProps<typeof LinkList>["links"]
  }
}) {
  return (
    <article key={slug} className="project-page">
      <img
        alt={`${title} preview`}
        src={preview}
        className="preview"
        loading="eager"
      />
      <Link href="/">
        <a id="preview" aria-label="Home">
          ⛢
        </a>
      </Link>
      <main>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {tagline && <h2 dangerouslySetInnerHTML={{ __html: tagline }} />}
        {association && <h3>{association}</h3>}
        {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
        {links && <LinkList links={links} />}
      </main>
    </article>
  )
}
