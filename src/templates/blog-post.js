import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/Layout';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout location="developer">
      <div className="main-content">
        <div className="post">
          <h1>{mdx.frontmatter.title}</h1>
          <p className="post__date">{mdx.frontmatter.date}</p>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`