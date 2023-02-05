import Link from "next/link";
import { ComponentProps } from "react";
import { H } from "./h";
import LinkList from "./linkList";

export function Preview({
  project: { slug, title, preview, tagline, association, description, links },
}: {
  project: {
    slug: string;
    title: string;
    preview: {
      url: string;
      width?: number;
      height?: number;
    };
    tagline?: string;
    association?: string;
    description?: string;
    links?: ComponentProps<typeof LinkList>["links"];
  };
}) {
  return (
    <>
      <article key={slug} className="project-page">
        {preview.url.endsWith(".mp4") ? (
          <video
            className="preview"
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
        <Link href="/" title="Home">
          ⛢
        </Link>
        <main>
          <H dangerouslySetInnerHTML={{ __html: title }} />
          {tagline && (
            <span className="h" dangerouslySetInnerHTML={{ __html: tagline }} />
          )}
          {association && <span className="h">{association}</span>}
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
          {links && <LinkList links={links} />}
        </main>
      </article>
      <script
        dangerouslySetInnerHTML={{
          __html: `
if (window.location.hash.replace('#', '') !== 'preview') {
  document.querySelector('.project-page').classList.add('top');
}
`,
        }}
      />
    </>
  );
}
