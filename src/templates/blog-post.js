import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

const PostTemplate = ({ data: { mdx } }) => (
  <Layout location="developer">
    <div className="main-content">
      <div className="post">
        <h1 className="post__title">{mdx.frontmatter.title}</h1>
        <p className="post__date">{mdx.frontmatter.date}</p>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </div>
  </Layout>
);

PostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      edges: PropTypes.array,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      body: PropTypes.string,
    }),
  }).isRequired,
};

export default PostTemplate;

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
`;
