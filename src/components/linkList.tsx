import { ComponentProps } from "react";

function getIcon(link: string) {
  const { 1: domain } = link.match(/^(?:https?:\/\/)?(.+?)(?:\/|$)/) || [];
  if (!domain) {
    return;
  }
  if (domain.startsWith("twitter")) {
    return "twitter";
  }
  if (domain.endsWith("itch.io")) {
    return "itch";
  }
  if (domain.endsWith("gmail.com")) {
    return "email";
  }
  if (domain.startsWith("github.com")) {
    return "github";
  }
  if (domain.startsWith("lexaloffle.com")) {
    return "pico8";
  }
  if (domain.startsWith("linkedin.com")) {
    return "linkedin";
  }
  if (domain.startsWith("tumblr.com") || domain.startsWith("blog.seans.site")) {
    return "tumblr";
  }
  if (domain.endsWith(".social")) {
    return "mastodon";
  }
  if (link.endsWith("rss.xml")) {
    return "rss";
  }
  return "generic";
}

function Link({ link = "" }: { link: string | [string, ComponentProps<"a">] }) {
  if (typeof link === "string") {
    return (
      <a
        rel={link.includes(".social/") ? "me" : undefined}
        className={getIcon(link)}
        href={link}
      >
        {link}
      </a>
    );
  }
  return (
    <a className={getIcon(link[0])} href={link[0]} {...link[1]}>
      {link[0]}
    </a>
  );
}

export default function LinkList({
  links,
  ...props
}: ComponentProps<"ul"> & {
  links: ComponentProps<typeof Link>["link"][];
}) {
  return (
    <ul {...props} className="link-list">
      {links.map((link) => (
        <li key={typeof link === "string" ? link : link[0]}>
          <Link link={link} />
        </li>
      ))}
    </ul>
  );
}
