const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                templateKey
              }
            }
          }
        }
      }
    `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const posts = result.data.allMdx.edges;
  const blogPosts = posts.filter((post) => post.node.frontmatter.templateKey
    && post.node.frontmatter.templateKey.includes('blog-post'));
  const writingPosts = posts.filter((post) => post.node.frontmatter.tags
      && post.node.frontmatter.tags.includes('writing'));
  const devPosts = posts.filter((post) => post.node.frontmatter.tags
      && post.node.frontmatter.tags.includes('developer'));
  const publications = posts.filter((post) => post.node.frontmatter.tags
      && post.node.frontmatter.tags.includes('publication'));
  const postsPerPage = 10;
  const numPages = (postList) => (postList.length > postsPerPage
    ? Math.ceil(postList.length / postsPerPage)
    : 1);
  const numBlogPostsPages = numPages(blogPosts);
  const numWritingPages = numPages(writingPosts);
  const numDevPages = numPages(devPosts);
  const numPublicationPages = numPages(publications);

  Array.from({ length: numBlogPostsPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog-all.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numBlogPostsPages,
        currentPage: i + 1,
      },
    });
  });

  Array.from({ length: numWritingPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog/writing' : `/blog/writing/${i + 1}`,
      component: path.resolve('./src/templates/blog-writing.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numWritingPages,
        currentPage: i + 1,
      },
    });
  });

  Array.from({ length: numDevPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog/developer' : `/blog/developer/${i + 1}`,
      component: path.resolve('./src/templates/blog-developer.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numDevPages,
        currentPage: i + 1,
      },
    });
  });

  Array.from({ length: numPublicationPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/publications' : `/publications/${i + 1}`,
      component: path.resolve('./src/templates/publication-list.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPublicationPages,
        currentPage: i + 1,
      },
    });
  });

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: { id: node.id },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: `/blog${value}`,
    });
  }
};
