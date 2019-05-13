import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import DevPageComponent from '../components/Developer-Page';

const DeveloperPage = (props) => {
  const { data } = props;
  const { edges: techPosts } = data.techPosts;
  const { edges: techRoles } = data.techRoles;
  const { edges: communityRoles } = data.communityRoles;

  return (
    <Layout location="developer">
      <DevPageComponent
        techPosts={techPosts}
        techRoles={techRoles}
        communityRoles={communityRoles}
      />
    </Layout>
  );
};

DeveloperPage.propTypes = {
  data: PropTypes.shape({
    communityRoles: PropTypes.shape({
      edges: PropTypes.array,
    }),
    techPosts: PropTypes.shape({
      edges: PropTypes.array,
    }),
    techRoles: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default DeveloperPage;

export const pageQuery = graphql`
  query TechnicalRolesQuery {
    techRoles: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___order] },
      filter: { frontmatter: { 
        templateKey: { eq: "experience" },
        type: { eq: "tech" }
      }}
    ) {
      totalCount
      ...experienceFields
  },
  communityRoles: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___order] },
      filter: { frontmatter: { 
        templateKey: { eq: "experience" },
        type: { eq: "community" }
      }}
    ) {
      totalCount
      ...experienceFields
    },
    techPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { 
        templateKey: { eq: "blog-post" },
        tags: { in: "developer" }
      }}
      limit: 3
    ) {
      ...articleFields
    }
  }
`;
