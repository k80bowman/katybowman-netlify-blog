import React from 'react';
import propTypes from './types';
import ArticleCard from '../Article-Card';

const WriterPage = (props) => {
  const { posts } = props;

  return (
    <div className="writer">
      <section className="articles">
        <h2 className="articles__title">Publications</h2>
        <div className="blog-articles">
          {posts
            .map(({ node: post }) => {
              if (post.frontmatter.category !== 'Blog Post') {
                return (
                  <ArticleCard
                    slug={post.fields.slug}
                    key={post.id}
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.frontmatter.excerpt}
                    category={post.frontmatter.category}
                    publication={post.frontmatter.publication}
                    pubLink={post.frontmatter.pubLink}
                  />
                );
              }
              return null;
            })
              }
        </div>
      </section>
    </div>
  );
};

WriterPage.propTypes = propTypes;

export default WriterPage;
