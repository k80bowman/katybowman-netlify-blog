import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import DevPageComponent from '../components/Developer-Page';

const DeveloperPage = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);

  return (
    <Layout>
      <DevPageComponent posts={posts} />
    </Layout>
  );
};

DeveloperPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default DeveloperPage;

export const pageQuery = graphql`
  query DeveloperQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            category
            featured
            excerpt
            publication
            pubLink
            imageLink
            subject
          }
        }
      }
    }
  }
`;
