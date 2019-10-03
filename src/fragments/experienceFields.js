import { graphql } from 'gatsby';

export const experienceFields = graphql`
fragment experienceFields on MdxConnection {
    edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            dates
            order
            org
            orgLink
            type
            skills
            summary
          }
        }
    }
  }`;
