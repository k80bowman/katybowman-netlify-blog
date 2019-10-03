import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import WriterPageComponent from '../components/Writer-Page';

const WriterPage = (props) => {
  const { data } = props;
  const { edges: featuredPublication } = data.featuredPublication;
  const { edges: blogPosts } = data.blogPosts;

  return (
    <Layout location="writer">
      <WriterPageComponent blogPosts={blogPosts} featuredPublication={featuredPublication} />
    </Layout>
  );
};

WriterPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default WriterPage;

export const pageQuery = graphql`
  query WriterQuery {
    featuredPublication: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" },
        tags: { in: "featured" }
      }},
      limit: 3
    ) {
      totalCount
      ...articleFields
  },
  blogPosts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" },
        tags: { nin: "featured", in: "writing" }
      }},
    limit: 5
    ) {
      totalCount
      ...articleFields
    }
  }
`;
