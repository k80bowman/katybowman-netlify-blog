import React from 'react';
import { Link } from 'gatsby';
import propTypes from './types';
import ArticleCard from '../Article-Card';

const HomePage = (props) => {
  let featuredIndex = 0;
  let blogIndex = 0;
  const featuredPostIndices = [];
  const isFeatured = index => featuredPostIndices.includes(index);

  const { posts } = props;

  return (
    <section className="articles">
      <div className="featured-article">
        <h2 className="section__title">Featured Publication</h2>
        {posts
          .map(({ node: post }, index) => {
            const { tags } = post.frontmatter;
            const featured = tags && tags.includes('featured');
            if (featured) {
              featuredIndex += 1;
              if (featuredIndex === 1) {
                featuredPostIndices.push(index);
                return (
                  <ArticleCard
                    slug={post.fields.slug}
                    key={post.id}
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.frontmatter.excerpt}
                    category={post.frontmatter.category}
                    imageLink={post.frontmatter.imageLink}
                    publication={post.frontmatter.publication}
                    pubLink={post.frontmatter.pubLink}
                    tags={post.frontmatter.tags}
                  />
                );
              }
            }
            return null;
          })
            }
      </div>
      <div className="blog-articles">
        <h2 className="section__title section__title--secondary">Blog Posts</h2>
        {posts
          .map(({ node: post }, index) => {
            if (!isFeatured(index)) {
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
      <Link className="blog-link" to="/posts">more posts</Link>
    </section>
  );
};

HomePage.propTypes = propTypes;

export default HomePage;
