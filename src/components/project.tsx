import React from "react"

export default function Project({
  project: { title, tagline, thumbnail, preview },
}) {
  return (
    <>
      <figure>
        <img
          alt={`${title} thumbnail`}
          className="thumbnail"
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