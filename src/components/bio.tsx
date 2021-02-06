import Link from "next/link"
import LinkList from "./linkList"

export default function Bio() {
  return (
    <header className="bio">
      <Link href="/">
        <a>
          <h1>Sean S. LeBlanc</h1>
          <h2>I Make Stuff</h2>
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
        ]}
      />
    </header>
  )
}
