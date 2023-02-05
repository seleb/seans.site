import Link from "next/link";
import { ComponentProps } from "react";
import { Preview } from "./preview";
import Project from "./project";

export default function Gallery({
  projects,
}: {
  projects: (ComponentProps<typeof Project>["project"] &
    ComponentProps<typeof Preview>["project"] & { slug: string })[];
}) {
  return (
    <>
      {projects.map((p, idx) => (
        <Link prefetch={false} key={p.slug} href={`/project/${p.slug}`} className={`project${p.showcase ? " showcase" : ""}`}>
          <Project project={p} idx={idx} />
        </Link>
      ))}
    </>
  );
}
