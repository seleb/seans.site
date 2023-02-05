import Link from "next/link";
import { contextHeading, H } from "./h";
import LinkList from "./linkList";

export default function Bio() {
  return (
    <header className="bio">
      <Link href="/">
        <contextHeading.Provider value={1}>
          <H>Sean S. LeBlanc</H>
          <span className="h">I Make Stuff</span>
        </contextHeading.Provider>
      </Link>
      <p>
        Hey there! I'm a UX dev, tools dev, game dev, and general-purpose media
        person from Ottawa, Canada.
      </p>
      <p>
        You can find me at Various Places on The Internet.
      </p>
      <LinkList
        id="contact"
        links={[
          "mailto:sean.s.leblanc@gmail.com",
          "https://seansleblanc.itch.io",
          "https://github.com/seleb",
          ["https://timetheft.social/@sean", { rel: 'me' }],
          "https://twitter.com/seansleblanc",
          "/rss.xml",
        ]}
      />
    </header>
  );
}
