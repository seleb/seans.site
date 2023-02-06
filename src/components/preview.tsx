import Head from "next/head";
import Link from "next/link";
import { projectToJson } from "../content/jsonld";
import { H } from "./h";
import LinkList from "./linkList";

export function Preview({
  project,
}: {
  project: Parameters<typeof projectToJson>[0];
}) {
  const { slug, title, preview, tagline, association, description, links } = project;
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectToJson(project)) }}
        />
      </Head>
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
    </>
  );
}
