import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PostList from '../components/Post-List';

const BlogPostsPage = (props) => {
  const { data, pageContext } = props;
  const { edges: blogPosts } = data.blogPosts;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout location="blog-posts">
      <div className="main-content">
        <h2 className="section__title">Blog Posts</h2>
        <div className="blog-articles">
          <PostList blogPosts={blogPosts} />
        </div>
        <div className="pagination">
          {!isFirst && (
          <Link className="pagination-link previous" to={`posts/${prevPage}`} rel="prev">
            Previous Page
          </Link>
          )}
          {!isLast && (
          <Link className="pagination-link next" to={`posts/${nextPage}`} rel="next">
            Next Page
          </Link>
          )}
        </div>
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
  query BlogPostsQuery($skip: Int!, $limit: Int!) {
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: $limit
      skip: $skip
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" }
      }},
    ) {
      totalCount
      ...articleFields
    }
  }
`;
