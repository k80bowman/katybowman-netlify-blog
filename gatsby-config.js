module.exports = {
  siteMetadata: {
    title: 'Katy Bowman',
    description: 'Personal site for Katy Bowman, developer and writer.',
    author: '@k80bowman',
    siteUrl: 'https://www.katybowman.com/',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'experience-records',
        path: `${__dirname}/src/experience`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'katy-bowman-site',
        short_name: 'k80bowman',
        start_url: '/',
        icon: 'static/img/favicons/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: `${__dirname}/src/blog-posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            // eslint-disable-next-line max-len
            serialize: ({ query: { site, allMdx } }) => allMdx.edges.map((edge) => ({
              ...edge.node.frontmatter,
              description: edge.node.frontmatter.excerpt,
              date: edge.node.frontmatter.date,
              url: `${site.siteMetadata.siteUrl}blog/${edge.node.fields.slug}`,
              guid: `${site.siteMetadata.siteUrl}blog/${edge.node.fields.slug}`,
              custom_elements: [{ 'content:encoded': edge.node.body }],
            })),
            query: `
              {
                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                  limit: 1000
                  filter: { frontmatter: { 
                    templateKey: { eq: "blog-post" }
                  }}
                ) {
                  edges {
                    node {
                      id
                      body
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        excerpt
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Katy Bowman's RSS Feed",
          },
        ],
      },
    },
  ],
};
