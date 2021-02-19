import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="col-md-12">
        <div className="home-hero">
          <h1 className="text-center">Welcome to my Portfolio</h1>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
