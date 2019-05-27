const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              tags
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    const writingPosts = posts.filter(post => post.node.frontmatter.tags
      && post.node.frontmatter.tags.includes('writing'));
    const devPosts = posts.filter(post => post.node.frontmatter.tags
      && post.node.frontmatter.tags.includes('developer'));
    const postsPerPage = 10;
    const numPages = postList => Math.ceil(postList.length / postsPerPage);

    Array.from({ length: numPages(posts) }).forEach((__, i) => {
      createPage({
        path: i === 0 ? '/posts' : `/posts/${i + 1}`,
        component: path.resolve('./src/pages/posts.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numPages(posts),
          currentPage: i + 1,
        },
      });
    });

    Array.from({ length: numPages(writingPosts) }).forEach((__, i) => {
      createPage({
        path: i === 0 ? '/tags/writing' : `/tags/writing/${i + 1}`,
        component: path.resolve('./src/pages/tags/writing.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numPages(writingPosts),
          currentPage: i + 1,
        },
      });
    });

    Array.from({ length: numPages(devPosts) }).forEach((__, i) => {
      createPage({
        path: i === 0 ? '/tags/developer' : `/tags/developer/${i + 1}`,
        component: path.resolve('./src/pages/tags/developer.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numPages(devPosts),
          currentPage: i + 1,
        },
      });
    });

    posts.forEach((edge, i) => {
      const { id } = edge.node;
      if (edge.node.frontmatter.templateKey !== 'experience') {
        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
          ),
          // additional data can be passed via context
          context: {
            id,
            limit: postsPerPage,
            skip: i * postsPerPage,
            currentPage: i + 1,
          },
        });
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
