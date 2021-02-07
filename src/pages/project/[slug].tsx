import { ComponentProps } from "react"
import Bio from "../../components/bio"
import Gallery from "../../components/gallery"
import LinkList from "../../components/linkList"
import SEO from "../../components/seo"
import { getProject, getProjects } from "../../content"

export default function Project({
  projects,
  project,
}: {
  projects: ComponentProps<typeof Gallery>["projects"]
  project: {
    title: string
    description: string
    preview: string
    slug: string
    association: string
    tagline: string
    links: ComponentProps<typeof LinkList>["links"]
  }
}) {
  return (
    <>
      <SEO
        title={project.title}
        description={project.tagline}
        image={{ url: project.preview, alt: `${project.title} preview` }}
      />
      <article className="index">
        <Bio />
        <Gallery projects={projects} project={project} />
        <button
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Scroll to top"
        >
          ⛢
        </button>
      </article>
    </>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      projects: await getProjects(),
      project: await getProject(params.slug),
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: (await getProjects()).map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}
