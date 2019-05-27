import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PostList from '../components/Post-List';
import Pagination from '../components/Pagination';

const BlogPostsPage = (props) => {
  const { data, pageContext } = props;
  const { edges: blogPosts } = data.blogPosts;

  return (
    <Layout location="blog-posts">
      <div className="main-content">
        <h2 className="section__title">Blog Posts</h2>
        <div className="blog-articles">
          <PostList blogPosts={blogPosts} />
        </div>
        <Pagination pageContext={pageContext} pageSlug="posts" />
      </div>
    </Layout>
  );
};

BlogPostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
};

export default BlogPostsPage;

export const pageQuery = graphql`
  query BlogPostsQuery($skip: Int, $limit: Int) {
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: $limit,
      skip: $skip,
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" }
      }},
    ) {
      totalCount
      ...articleFields
    }
  }
`;
