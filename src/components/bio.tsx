import Head from "next/head";
import Link from "next/link";
import { author, org } from "../content/jsonld";
import { H } from "./h";
import LinkList from "./linkList";

export default function Bio({ seeMore }: { seeMore?: boolean }) {
  return (
    <header className="bio">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([author, org]) }}
        />
      </Head>
      <Link href="/">
        <H>Sean S. LeBlanc</H>
        <span className="h">I Make Stuff</span>
      </Link>
      <p>
        Hey there! I'm a UX dev, tools dev, game dev, and general-purpose media
        person from Ottawa, Canada.
      </p>
      {seeMore && (
        <Link className="see-more" href="/">
          See more projects I've worked on.
        </Link>
      )}
      <p>You can find me at Various Places on The Internet.</p>
      <LinkList
        id="contact"
        links={[
          "mailto:sean.s.leblanc@gmail.com",
          "https://seansleblanc.itch.io",
          "https://github.com/seleb",
          ["https://timetheft.social/@sean", { rel: "me" }],
          "https://blog.seans.site",
          "https://twitter.com/seansleblanc",
          "/rss.xml",
        ]}
      />
    </header>
  );
}
