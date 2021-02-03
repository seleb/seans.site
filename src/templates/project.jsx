import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkList from "../components/linkList"

import "./projectPage.scss"

export default ({ data: { dbJson: project } }) => {
  const {
    title,
    tagline,
    association,
    description,
    links,
    preview: { publicURL: preview },
  } = project
  return (
    <Layout>
      <SEO title={project.title} description={tagline} image={preview} />
      <article className="project-page">
        <aside
          className="preview"
          style={{
            backgroundImage: `
linear-gradient(to bottom, rgba(0,0,0,0), var(--bg)),
url("${preview}")`,
          }}
        />
        <Link to="/">⛢</Link>
        <main>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <h2 dangerouslySetInnerHTML={{ __html: tagline }} />
          <h3>{association}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <LinkList links={links} />
        </main>
      </article>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    dbJson(fields: { slug: { eq: $slug } }) {
      title
      tagline
      association
      description
      tags
      links
      thumbnail {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      preview {
        publicURL
      }
    }
  }
`
