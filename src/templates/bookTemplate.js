import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
    <Layout>
        <SEO title={frontmatter.title} />

        <h1>{frontmatter.title}</h1>
        <div>Author: <Link to={frontmatter.author.frontmatter.path}>{frontmatter.author.frontmatter.authorName}</Link> </div>
        <div>Publish Date: {frontmatter.date}</div>
        <div 
            dangerouslySetInnerHTML={{ __html: html }}
        />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author {
          frontmatter {
            authorName
            path
          }
        }
        date
      }
    }
  }
`