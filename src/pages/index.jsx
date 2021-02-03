import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Gallery from "../components/gallery"
import { graphql } from "gatsby"

import "./index.scss"

const IndexPage = ({ data }) => {
  const projects = data.allDbJson.edges.map(({ node }) => node)
  return (
    <Layout>
      <SEO title="Home" />
      <article className="index">
        <Bio />
        <Gallery projects={projects} />
        <button onClick={() => window.scrollTo(0, 0)}>⛢</button>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    allDbJson {
      edges {
        node {
          fields {
            slug
          }
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
    }
  }
`

export default IndexPage
