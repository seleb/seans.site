import { NextSeo } from "next-seo";

export default function SEO({
  description,
  title,
  image,
  big,
}: {
  description: string;
  title?: string;
  image?: {
    url: string;
    alt: string;
  };
  big?: boolean;
}) {
  const t = [title, "Sean's Site"].filter((i) => i).join(" | ");
  return (
    <NextSeo
      title={t}
      description={description}
      openGraph={{
        title: t,
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
  );
}
