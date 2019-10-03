import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import HomePage from '../components/Home-Page';

const IndexPage = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMdx;

  return (
    <Layout location="home">
      <HomePage posts={posts} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      ...articleFields
    }
  }
`;
