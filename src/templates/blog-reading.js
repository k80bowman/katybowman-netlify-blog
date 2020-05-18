import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import PostList from '../components/Post-List';

const ReadingPage = (props) => {
  const { data, pageContext } = props;
  const { edges: readingPosts } = data.readingPosts;

  return (
    <Layout location="reading">
      <div className="main-content">
        <h2 className="section__title">What I&apos;ve Been Reading</h2>
        <div className="blog-articles">
          <PostList blogPosts={readingPosts} />
        </div>
        <Pagination pageContext={pageContext} pageSlug="blog/writing" />
      </div>
    </Layout>
  );
};

ReadingPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array,
    }),
    readingPosts: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }).isRequired,
};

export default ReadingPage;

export const pageQuery = graphql`
  query ReadingQuery($skip: Int, $limit: Int) {
    readingPosts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: $limit,
      skip: $skip,
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" },
        tags: { in: "reading" }
      }},
    ) {
      totalCount
      ...articleFields
    }
  }
`;
