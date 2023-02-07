import { H } from "./h";

export default function Project({
  project,
  idx,
}: {
  project: {
    title: string;
    tagline?: string;
    thumbnail: {
      url: string;
      width?: number;
      height?: number;
    };
    preview: {
      url: string;
      width?: number;
      height?: number;
    };
    showcase?: boolean;
  };
  idx: number;
}) {
  const { title, tagline, thumbnail, preview, showcase } = project;
  const [string, image] = showcase
    ? ["preview", preview]
    : ["thumbnail", thumbnail];
  return (
    <>
      <figure>
        {image.url.endsWith(".mp4") ? (
          <video
            className="thumbnail"
            src={image.url}
            width={image.width}
            height={image.height}
            muted
            autoPlay
            loop
            controls={false}
            poster={project.thumbnail.url}
          />
        ) : (
          <img
            alt={`${title} ${string}`}
            className="thumbnail"
            src={image.url}
            width={image.width}
            height={image.height}
            loading={idx < 4 ? "eager" : "lazy"}
          />
        )}
      </figure>
      <figcaption>
        <H dangerouslySetInnerHTML={{ __html: title }} />
        {tagline && (
          <span className="h" dangerouslySetInnerHTML={{ __html: tagline }} />
        )}
      </figcaption>
    </>
  );
}
