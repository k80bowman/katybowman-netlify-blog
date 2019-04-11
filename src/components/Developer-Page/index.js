import React from 'react';
import { withPrefix } from 'gatsby';
import propTypes from './types';
import ArticleCard from '../Article-Card';

const DevPage = (props) => {
  const { posts } = props;

  return (
    <div className="developer">
      <section className="developer__resume">
        <div className="developer__experience" />
        <div className="developer__links">
          <a className="developer__link" href="https://github.com/k80bowman">
            <img className="developer__link--image" src={withPrefix('/img/GitHub-Mark-120px-plus.png')} alt="link to Github profile" />
          </a>
          <a className="developer__link" href="https://codepen.io/k80bowman/#">
            <img className="developer__link--image" src={withPrefix('/img/codepen.png')} alt="link to Codepen profile" />
          </a>
          <a className="developer__link" href="https://www.linkedin.com/in/k80bowman/">
            <img className="developer__link--image linkedin" src={withPrefix('/img/In-Black-128px-TM.png')} alt="link to LinkedIn profile" />
          </a>
        </div>
      </section>
      <section className="articles">
        <h2 className="articles__title">Technical Articles</h2>
        <div className="blog-articles">
          {posts
            .map(({ node: post }) => {
              if (post.frontmatter.subject === 'tech') {
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

DevPage.propTypes = propTypes;

export default DevPage;
