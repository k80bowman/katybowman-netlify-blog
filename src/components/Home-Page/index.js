import React from 'react';
import { Link } from 'gatsby';
import { getFeaturedPost, getFirstFivePosts } from './helpers';
import propTypes from './types';
import ArticleCard from '../Article-Card';

const HomePage = (props) => {
  const { posts } = props;
  const featuredPost = getFeaturedPost(posts);
  const firstFivePosts = getFirstFivePosts(posts, featuredPost.id);

  return (
    <section className="articles">
      <div className="featured-article">
        <h2 className="section__title">Featured Publication</h2>
        <ArticleCard post={featuredPost.post} />
      </div>
      <div className="blog-articles">
        <h2 className="section__title section__title--secondary">Blog Posts</h2>
        {firstFivePosts.map((post) => (
          <ArticleCard post={post} />
        ))}
      </div>
      <Link className="blog-link" to="/blog">more posts</Link>
    </section>
  );
};

HomePage.propTypes = propTypes;

export default HomePage;
