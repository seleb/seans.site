import pkg from '../../package.json';
import Bio from "../components/bio";
import HeadCanonical from '../components/canonical';
import Gallery from "../components/gallery";
import { HLevel } from '../components/h';
import SEO from "../components/seo";
import { getProjects } from "../content";
import generateRssFeed from "../generateRSSFeed";

export default function Index({
  projects,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  const firstShowcase = projects.find((i) => i.showcase);
  return (
    <>
      <SEO
        description={pkg.description}
        image={{
          url: firstShowcase.preview.url.endsWith(".mp4") || firstShowcase.preview.url.endsWith(".webm")
            ? firstShowcase.thumbnail.url
            : firstShowcase.preview.url,
          alt: `${firstShowcase.title} preview`,
        }}
      />
      <HeadCanonical />
      <main className="index">
        <noscript>
          Javascript disabled - site may not appear as expected.
        </noscript>
        <Bio />
        <HLevel>
          <Gallery projects={projects} />
        </HLevel>
        <button
          onClick={() => window.scrollTo(0, 0)}
          title="Scroll to top"
        >
          ⛢
        </button>
      </main>
    </>
  );
}

export async function getStaticProps() {
  await generateRssFeed();
  return {
    props: {
      projects: await getProjects(),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};
