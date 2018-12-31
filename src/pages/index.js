import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ArticleCard from '../components/Article-Card';

const IndexPage = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <section className="articles">
        {posts
          .map(({ node: post }) => (
            <ArticleCard
              slug={post.fields.slug}
              key={post.id}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.frontmatter.excerpt}
            />
          ))}
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
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
          }
        }
      }
    }
  }
`;
