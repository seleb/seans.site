import Bio from "../components/bio";
import Gallery from "../components/gallery";
import SEO from "../components/seo";
import { getProjects } from "../content";

export default function Index({
  projects,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  const firstShowcase = projects.find(i => i.showcase);
  return (
    <>
      <SEO description="A site for stuff made by Sean S. LeBlanc!" image={{ url: firstShowcase.preview.url.endsWith('.mp4') ? firstShowcase.thumbnail.url : firstShowcase.preview.url, alt: `${firstShowcase.title} preview` }} />
      <main className="index">
        <noscript>Javascript disabled - site may not appear as expected.</noscript>
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

export const config = {
  unstable_runtimeJS: false
}
