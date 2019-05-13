import React from 'react';
import propTypes from './types';
import ArticleCard from '../Article-Card';

const PostList = (props) => {
  const { blogPosts } = props;

  return (
    blogPosts.map(({ node: post }) => (
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
    ))
  );
};

PostList.propTypes = propTypes;

export default PostList;
