import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/site-layout"

const Article = ({ data }) => {
  return (
    <Layout className="site-main">
      <div className="bg-grey-200">
        <div className="container">
          <section className="section">
            <h1 className="heading-above-the-fold">{data.article.title}</h1>
          </section>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <p>Welcome to the site.</p>
        </section>
      </div>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query($id: String!) {
    article: contentfulArticle(id: { eq: $id }) {
      id
      title
    }
  }
`