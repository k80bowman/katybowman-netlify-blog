import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PostList from '../components/Post-List';

const BlogPostsPage = (props) => {
  const { data } = props;
  const { edges: blogPosts } = data.blogPosts;

  return (
    <Layout location="blog-posts">
      <div className="main-content">
        <h2 className="section__title">Blog Posts</h2>
        <PostList blogPosts={blogPosts} />
      </div>
    </Layout>
  );
};

BlogPostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default BlogPostsPage;

export const pageQuery = graphql`
  query BlogPostsQuery {
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" }
      }},
    ) {
      totalCount
      ...articleFields
    }
  }
`;
