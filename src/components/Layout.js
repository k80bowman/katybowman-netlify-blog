import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header/index';
import '../main.scss';

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
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

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
        <div className="main">
          <Header location={location} />
          <div className="page-content">{children}</div>
        </div>
      </div>
    )}
  />
);

export default TemplateWrapper;
