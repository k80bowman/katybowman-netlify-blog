import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import PostList from '../../components/Post-List';

const DeveloperPostsPage = (props) => {
  const { data } = props;
  const { edges: developerPosts } = data.developerPosts;

  return (
    <Layout location="developer-posts">
      <div className="main-content">
        <h2 className="section__title">Technical Articles</h2>
        <PostList blogPosts={developerPosts} />
      </div>
    </Layout>
  );
};

DeveloperPostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default DeveloperPostsPage;

export const pageQuery = graphql`
  query DeveloperPostsQuery {
    developerPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" },
        tags: { in: "developer" }
      }},
    ) {
      totalCount
      ...articleFields
    }
  }
`;
