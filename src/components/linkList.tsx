import { ComponentProps } from "react"

function getIcon(link: string) {
  const { 1: domain } = link.match(/^(?:https?:\/\/)?(.+?)(?:\/|$)/) || []
  if (!domain) {
    return
  }
  if (domain.startsWith("twitter")) {
    return "twitter"
  }
  if (domain.endsWith("itch.io")) {
    return "itch"
  }
  if (domain.endsWith("gmail.com")) {
    return "email"
  }
  if (domain.startsWith("github.com")) {
    return "github"
  }
  if (domain.startsWith("lexaloffle.com")) {
    return "pico8"
  }
  return "generic"
}

function Link({ link = "" }) {
  return (
    <a className={getIcon(link)} href={link}>
      {link}
    </a>
  )
}

export default function LinkList({
  links,
}: {
  links: ComponentProps<typeof Link>["link"][]
}) {
  return (
    <ul className="link-list">
      {links.map((link) => (
        <li key={link}>
          <Link link={link} />
        </li>
      ))}
    </ul>
  )
}
