import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortList from "../components/portList"

const PortsPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark (filter: {frontmatter: {type: {eq: "port"}}}) {
          edges {
            node {
              frontmatter {
                path
                title
                thumbnailImage {
                  childImageSharp {
                    fixed(height: 150) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }             
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Portfolio" />

      <PortList portv={allMarkdownRemark.edges} />

    </Layout>
  )
}

export default PortsPage
