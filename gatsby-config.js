module.exports = {
  siteMetadata: {
    title: `Katy Bowman`,
    description: `Personal site for Katy Bowman, developer and writer.`,
    author: `@k80bowman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience-records`,
        path: `${__dirname}/src/pages/experience`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `katy-bowman-site`,
        short_name: `k80bowman`,
        start_url: `/`,
        icon: `static/img/favicons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
