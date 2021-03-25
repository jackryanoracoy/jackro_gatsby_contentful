import { Link } from "gatsby"
import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/site-layout"
import AboveTheFold from "../components/site-above-the-fold"

const BlogPost = ({node}) => {
  return (
    <div className="flex-item-12 flex-item-lg-4">
      <h3><Link to={`/article/${node.id}/`}>{node.title}</Link></h3>
      <span className="font-small color-grey-500">{node.updatedAt}</span>
      <p>{node.excerpt}</p>
    </div>
  )
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <AboveTheFold/>
      <div className="container">
        <section className="section">
          <h1>FRONT PAGE</h1>
          <div className='flex gap-10'>
            {data.allContentfulArticle.edges.map((edge) => <BlogPost node={edge.node} />)}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
   query pageQuery {
    allContentfulArticle (
    filter: {
      node_locale: {eq: "en-US"}
    },
    ) {
        edges {
          node {
            id
            title
            excerpt
            thumbnail {
              fluid {
                src
              }
            }
            updatedAt(formatString: "MMM DD, yyyy - HH:mm")
          }
        }
    }
   }
`