import {
  Organization,
  Person,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { getProject } from ".";

export const author: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sean S. LeBlanc",
  email: "sean.s.leblanc@gmail.com",
  url: "https://seans.site",
  sameAs: [
    "https://seansleblanc.itch.io",
    "https://github.com/seleb",
    "https://timetheft.social/@sean",
    "https://twitter.com/seansleblanc",
  ],
};

export const org: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://seans.site",
  logo: "https://seans.site/icons/icon-512x512.png",
};

export function projectToJson(
  project: Awaited<ReturnType<typeof getProject>>
): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    abstract: project.tagline,
    description: project.description,
    creator: author,
    thumbnailUrl: project.preview.url,
    applicationCategory:
      !project.tags?.length || project.tags.includes("game")
        ? "GameApplication"
        : "MultimediaApplication",
    datePublished: project.date,
    sameAs: project.links.map((i) => (typeof i === "string" ? i : i[0])),
    offers: [
      {
        "@type": "Offer",
        url:
          typeof project.links[0] === "string"
            ? project.links[0]
            : project.links[0]?.[0],
      },
    ],
  };
}
