import { useCallback, useEffect, useRef, useState } from "react"

export default function Project({
  project: { title, tagline, thumbnail, preview, showcase },
}: {
  project: {
    title: string
    tagline?: string
    thumbnail: {
      url: string
      w: number
      h: number
    }
    preview: {
      url: string
      w: number
      h: number
    }
    showcase?: boolean
  }
}) {
  const [string, image] = showcase
    ? ["preview", preview]
    : ["thumbnail", thumbnail]
  const [loaded, setLoaded] = useState(true)
  const ref = useRef<HTMLImageElement>()
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    if (!ref.current || ref.current.complete) return
    setLoaded(false)
    ref.current.onload = onLoad
  }, [ref, image])
  return (
    <>
      <figure>
        {image.url.endsWith(".mp4") ? (
          <video
            className={`thumbnail${loaded ? "" : " loading"}`}
            src={image.url}
            width={image.w}
            height={image.h}
            muted
            autoPlay
            loop
            controls={false}
          />
        ) : (
          <img
            ref={ref}
            alt={`${title} ${string}`}
            className={`thumbnail${loaded ? "" : " loading"}`}
            src={image.url}
            width={image.w}
            height={image.h}
            loading="lazy"
          />
        )}
      </figure>
      <figcaption>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {tagline && <h2 dangerouslySetInnerHTML={{ __html: tagline }} />}
      </figcaption>
    </>
  )
}
