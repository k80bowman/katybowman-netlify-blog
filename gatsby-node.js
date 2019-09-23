const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;
  const writingPosts = posts.filter((post) => post.node.frontmatter.tags
      && post.node.frontmatter.tags.includes('writing'));
  const devPosts = posts.filter((post) => post.node.frontmatter.tags
      && post.node.frontmatter.tags.includes('developer'));
  const postsPerPage = 10;
  const numPages = (postList) => Math.ceil(postList.length / postsPerPage);
  Array.from({ length: numPages(writingPosts) }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog/writing' : `/blog/writing/${i + 1}`,
      component: path.resolve('./src/templates/blog-writing.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  Array.from({ length: numPages(devPosts) }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog/developer' : `/blog/developer/${i + 1}`,
      component: path.resolve('./src/templates/blog-developer.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
