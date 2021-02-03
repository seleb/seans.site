import React from "react"
import Img from "gatsby-image"

export default function Project({
  project: {
    title,
    tagline,
    thumbnail,
    preview: { publicURL: preview },
  },
}) {
  return (
    <>
      <figure>
        <Img
          objectFit="cover"
          alt={`${title} thumbnail`}
          className="thumbnail"
          fluid={{ ...thumbnail.childImageSharp.fluid, aspectRatio: 1 }}
        />
        <img alt={`${title} preview`} className="preview" src={preview} />
      </figure>
      <figcaption>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <h2 dangerouslySetInnerHTML={{ __html: tagline }} />
      </figcaption>
    </>
  )
}
