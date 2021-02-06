import { NextSeo } from "next-seo"
import React from "react"

export default function SEO({
  description,
  title,
  image,
  big,
}: {
  description: string
  title: string
  image?: {
    url: string
    alt: string
  }
  big?: boolean
}) {
  return (
    <NextSeo
      title={[title, "Sean's Site"].filter((i) => i).join(" | ")}
      description={description}
      openGraph={{
        title: title,
        description: description,
        type: "website",
        images: image
          ? [
              {
                url: image.url,
                alt: image.alt,
              },
            ]
          : undefined,
        site_name: "Sean's Site",
      }}
      twitter={{
        handle: "@SeanSLeBlanc",
        cardType: big ? "summary_large_image" : "summary",
      }}
    />
  )
}
