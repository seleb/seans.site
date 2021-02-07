import { useCallback, useEffect, useRef, useState } from "react"

export default function Project({
  project: { title, tagline, thumbnail },
}: {
  project: {
    title: string
    tagline: string
    thumbnail: string
  }
}) {
  const [loaded, setLoaded] = useState(true)
  const ref = useRef<HTMLImageElement>()
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    if (!ref.current || ref.current.complete) return
    setLoaded(false)
    ref.current.src = thumbnail
    ref.current.onload = onLoad
  }, [ref, thumbnail])
  return (
    <>
      <figure>
        <img
          ref={ref}
          alt={`${title} thumbnail`}
          className={`thumbnail ${loaded ? "" : "loading"}`}
          src={thumbnail}
          loading="lazy"
        />
      </figure>
      <figcaption>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <h2 dangerouslySetInnerHTML={{ __html: tagline }} />
      </figcaption>
    </>
  )
}
