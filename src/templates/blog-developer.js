import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PostList from '../components/Post-List';
import Pagination from '../components/Pagination';

const DeveloperPostsPage = props => {
  const { data, pageContext } = props;
  const { edges: developerPosts } = data.developerPosts;

  return (
    <Layout location="developer">
      <div className="main-content">
        <h2 className="section__title">Technical Articles</h2>
        <div className="blog-articles">
          <PostList blogPosts={developerPosts} />
        </div>
        <Pagination pageContext={pageContext} pageSlug="blog/developer" />
      </div>
    </Layout>
  );
};

DeveloperPostsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
};

export default DeveloperPostsPage;

export const pageQuery = graphql`
  query DeveloperPostsQuery($skip: Int, $limit: Int) {
    developerPosts: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: $limit,
      skip: $skip,
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
