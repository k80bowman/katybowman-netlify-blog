import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Gist from 'react-gist';

import Header from './Header/index';
import '../main.scss';

const components = {
  pre: (props) => <div {...props} />,
  Gist,
};

const TemplateWrapper = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={(data) => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.katybowman.com" />
          <meta property="og:image" content="/img/og_image.png" />
          <meta property="og:description" content="personal website for Katy Bowman, writer and developer" />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/img/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />

          <link href="https://fonts.googleapis.com/css?family=Oswald|Merriweather" rel="stylesheet" />
        </Helmet>
        <MDXProvider components={components}>
          <div className="main">
            <Header location={location} />
            <div className="page-content">{children}</div>
          </div>
        </MDXProvider>
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      communityRoles: PropTypes.array,
      techPosts: PropTypes.array,
      techRoles: PropTypes.array,
    }),
  }).isRequired,
  location: PropTypes.string.isRequired,
};

export default TemplateWrapper;
