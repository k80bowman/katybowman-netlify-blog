import React from 'react';
import { Link } from 'gatsby';
import propTypes from './types';
import ArticleCard from '../Article-Card';

const HomePage = (props) => {
  let featuredIndex = 0;
  let featuredPostIndex;
  let blogIndex = 0;

  const { posts } = props;

  return (
    <section className="articles">
      <div className="featured-article">
        {posts
          .map(({ node: post }, index) => {
            if (post.frontmatter.featured) {
              featuredIndex += 1;
              if (featuredIndex === 1) {
                featuredPostIndex = index;
                return (
                  <ArticleCard
                    slug={post.fields.slug}
                    key={post.id}
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.frontmatter.excerpt}
                    category={post.frontmatter.category}
                    imageLink={post.frontmatter.imageLink}
                    featured={post.frontmatter.featured}
                    publication={post.frontmatter.publication}
                    pubLink={post.frontmatter.pubLink}
                  />
                );
              }
            }
            return null;
          })
            }
      </div>
      <div className="blog-articles">
        {posts
          .map(({ node: post }, index) => {
            if (index !== featuredPostIndex) {
              blogIndex += 1;
              if (blogIndex < 6) {
                return (
                  <ArticleCard
                    slug={post.fields.slug}
                    key={post.id}
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.frontmatter.excerpt}
                    category={post.frontmatter.category}
                    featured={post.frontmatter.featured}
                  />
                );
              }
            }
            return null;
          })
            }
      </div>
      <h3>
        <Link className="blog-link" to="/blog-posts/">more posts</Link>
      </h3>
    </section>
  );
};

HomePage.propTypes = propTypes;

export default HomePage;
