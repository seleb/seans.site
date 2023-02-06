import Head from "next/head";
import Link from "next/link";
import { ComponentProps } from "react";
import { projectToJson } from "../content/jsonld";
import Project from "./project";

export default function Gallery({
  projects,
}: {
  projects: (ComponentProps<typeof Project>["project"] & { slug: string })[];
}) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projects.map(projectToJson)) }}
        />
      </Head>
      {projects.map((p, idx) => (
        <Link prefetch={false} key={p.slug} href={`/project/${p.slug}`} className={`project${p.showcase ? " showcase" : ""}`}>
          <Project project={p} idx={idx} />
        </Link>
      ))}
    </>
  );
}
