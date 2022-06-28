import Bio from "../../components/bio";
import Gallery from "../../components/gallery";
import SEO from "../../components/seo";
import { getProject, getProjects } from "../../content";

export default function Project({
  projects,
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
      <article className="index">
        <noscript>
          Javascript disabled - site may not appear as expected.
        </noscript>
        <Bio />
        <Gallery projects={projects} project={project.slug} />
        <button
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Scroll to top"
        >
          ⛢
        </button>
      </article>
    </>
  );
}

export async function getStaticProps({
  params,
}: Awaited<ReturnType<typeof getStaticPaths>>["paths"][number]) {
  return {
    props: {
      projects: await getProjects(),
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
