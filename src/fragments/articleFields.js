import { graphql } from 'gatsby';

export const articleFields = graphql`
  fragment articleFields on MarkdownRemarkConnection {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          category
          excerpt
          publication
          pubLink
          imageLink
          tags
        }
      }
    }
  }
`;
