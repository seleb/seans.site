import React from "react"
import { Link } from "gatsby"
import LinkList from "./linkList"

const Bio = () => (
  <article className="bio">
    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
      <h1>Sean S. LeBlanc</h1>
      <h2>I Make Stuff</h2>
    </Link>
    <p>
      Hey there! I'm a UX dev, tools dev, game dev, and general-purpose media
      person from Ottawa, Canada.
    </p>
    <p>Want to talk to me about stuff and/or things? Feel free to reach out:</p>
    <LinkList
      links={[
        "https://seansleblanc.itch.io",
        "https://github.com/seleb",
        "https://twitter.com/seansleblanc",
        "mailto:sean.s.leblanc@gmail.com",
      ]}
    />
  </article>
)

export default Bio
