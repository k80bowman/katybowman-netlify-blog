import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import PostList from '../../components/Post-List';

const WritingPostsPage = (props) => {
  const { data } = props;
  const { edges: writingPosts } = data.writingPosts;

  return (
    <Layout location="writing-posts">
      <div className="main-content">
        <h2 className="section__title">Writing Posts</h2>
        <PostList blogPosts={writingPosts} />
      </div>
    </Layout>
  );
};

WritingPostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default WritingPostsPage;

export const pageQuery = graphql`
  query WritingPostsQuery {
    writingPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" },
        tags: { in: "writing" }
      }},
    ) {
      totalCount
      ...articleFields
    }
  }
`;
