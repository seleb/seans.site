import Bio from "../../components/bio";
import { HLevel } from "../../components/h";
import { Preview } from "../../components/preview";
import SEO from "../../components/seo";
import { getProject, getProjects } from "../../content";

export default function Project({
  project,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <>
      <SEO
        title={project.title}
        description={project.tagline}
        image={{
          url: project.preview.url.endsWith(".mp4")
            ? project.thumbnail.url
            : project.preview.url,
          alt: `${project.title} preview`,
        }}
      />
      <div className="index project">
        <noscript>
          Javascript disabled - site may not appear as expected.
        </noscript>
        <Preview project={project} />
        <HLevel>
          <Bio seeMore />
        </HLevel>
      </div>
    </>
  );
}

export async function getStaticProps({
  params,
}: Awaited<ReturnType<typeof getStaticPaths>>["paths"][number]) {
  return {
    props: {
      project: await getProject(params.slug),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: (await getProjects()).map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export const config = {
  unstable_runtimeJS: false,
};
