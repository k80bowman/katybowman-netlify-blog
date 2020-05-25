const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const postsPerPage = 10;

const postsQuery = `
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
`;

const getNumPages = (postList) => (postList.length > postsPerPage
  ? Math.ceil(postList.length / postsPerPage)
  : 1);

// eslint-disable-next-line max-len
const getTaggedPosts = (posts, filterName) => posts.filter((post) => post.node.frontmatter.tags
    && post.node.frontmatter.tags.includes(filterName));

const createSitePage = ({
  posts,
  createPage,
  pageName,
  templateName,
}) => {
  const numPages = getNumPages(posts);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${pageName}` : `/${pageName}/${i + 1}`,
      component: path.resolve(`./src/templates/${templateName}.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

const getPostsArray = (posts) => ([
  {
    posts: posts.filter((post) => post.node.frontmatter.templateKey
      && post.node.frontmatter.templateKey.includes('blog-post')),
    pageName: 'blog',
    templateName: 'blog-all',
  },
  {
    posts: getTaggedPosts(posts, 'writing'),
    pageName: 'blog/writing',
    templateName: 'blog-writing',
  },
  {
    posts: getTaggedPosts(posts, 'developer'),
    pageName: 'blog/developer',
    templateName: 'blog-developer',
  },
  {
    posts: getTaggedPosts(posts, 'publication'),
    pageName: 'publications',
    templateName: 'publication-list',
  },
  {
    posts: getTaggedPosts(posts, 'reading'),
    pageName: 'reading',
    templateName: 'blog-reading',
  },
]);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(postsQuery);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const posts = result.data.allMdx.edges;

  const postsArray = getPostsArray(posts);

  postsArray.forEach((postObject) => {
    createSitePage({
      ...postObject,
      createPage,
    });
  });

  posts.forEach(({ node }) => {
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
