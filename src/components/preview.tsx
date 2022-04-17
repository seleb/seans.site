import Link from "next/link"
import { ComponentProps } from "react"
import LinkList from "./linkList"

export function Preview({
  project: { slug, title, preview, tagline, association, description, links },
}: {
  project: {
    slug: string
    title: string
    preview: {
      url: string
      width?: number
      height?: number
    }
    tagline?: string
    association?: string
    description?: string
    links?: ComponentProps<typeof LinkList>["links"]
  }
}) {
  return (
    <article key={slug} className="project-page">
      {preview.url.endsWith(".mp4") ? (
        <video
          src={preview.url}
          width={preview.width}
          height={preview.height}
          muted
          autoPlay
          loop
          controls={false}
          preload="auto"
        />
      ) : (
        <img
          alt={`${title} preview`}
          className="preview"
          src={preview.url}
          width={preview.width}
          height={preview.height}
          loading="eager"
        />
      )}
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
