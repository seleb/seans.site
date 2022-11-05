import Link from "next/link";
import { contextHeading, H } from "./h";
import LinkList from "./linkList";

export default function Bio() {
  return (
    <header className="bio">
      <Link href="/">
        <a>
          <contextHeading.Provider value={1}>
            <H>Sean S. LeBlanc</H>
            <span className="h">I Make Stuff</span>
          </contextHeading.Provider>
        </a>
      </Link>
      <p>
        Hey there! I'm a UX dev, tools dev, game dev, and general-purpose media
        person from Ottawa, Canada.
      </p>
      <p>
        Want to talk to me about stuff and/or things? Feel free to reach out:
      </p>
      <LinkList
        links={[
          "https://seansleblanc.itch.io",
          "https://github.com/seleb",
          "https://twitter.com/seansleblanc",
          "mailto:sean.s.leblanc@gmail.com",
          "/rss.xml",
        ]}
      />
    </header>
  );
}
