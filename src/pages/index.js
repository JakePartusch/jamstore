import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/common/seo"
import Hero from "../components/home/Hero"
import Features from "../components/home/Features"
import Newsletter from "../components/home/Newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <Newsletter />
  </Layout>
)

export default IndexPage
