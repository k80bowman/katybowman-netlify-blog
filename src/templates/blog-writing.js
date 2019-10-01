import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PostList from '../components/Post-List';
import Pagination from '../components/Pagination';

const WritingPostsPage = (props) => {
  const { data, pageContext } = props;
  const { edges: writingPosts } = data.writingPosts;

  return (
    <Layout location="writer">
      <div className="main-content">
        <h2 className="section__title">Writing Posts</h2>
        <div className="blog-articles">
          <PostList blogPosts={writingPosts} />
        </div>
        <Pagination pageContext={pageContext} pageSlug="blog/writing" />
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
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
};

export default WritingPostsPage;

export const pageQuery = graphql`
  query WritingPostsQuery($skip: Int, $limit: Int) {
    writingPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: $limit,
      skip: $skip,
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
