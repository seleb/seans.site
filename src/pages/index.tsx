import { PromiseValue } from "type-fest"
import Bio from "../components/bio"
import Gallery from "../components/gallery"
import SEO from "../components/seo"
import { getProjects } from "../content"

export default function Index({
  projects,
}: PromiseValue<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <>
      <SEO description="A site for stuff made by Sean S. LeBlanc!" />
      <main className="index">
        <Bio />
        <Gallery projects={projects} />
        <button
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Scroll to top"
        >
          ⛢
        </button>
      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  }
}
