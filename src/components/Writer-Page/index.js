import React from 'react';
import { Link } from 'gatsby';
import propTypes from './types';
import ArticleCard from '../Article-Card';

const WriterPage = (props) => {
  const { featuredPublication, blogPosts } = props;

  return (
    <div className="writer main-content">
      <section className="featured-articles">
        <h2 className="section__title">Featured Publications</h2>
        {featuredPublication
          .map(({ node: post }) => (
            <ArticleCard post={post} />
          ))}
      </section>
      <Link className="blog-link" to="/publications">more publications</Link>
      <section className="blog-articles">
        <h2 className="section__title section__title--secondary">Writing Articles</h2>
        {blogPosts
          .map(({ node: post }) => (
            <ArticleCard post={post} />
          ))}
      </section>
      <Link className="blog-link" to="/blog/writing">more writing articles</Link>
    </div>
  );
};

WriterPage.propTypes = propTypes;

export default WriterPage;
