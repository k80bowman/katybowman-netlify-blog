import React from 'react';
import propTypes from './types';
import ArticleCard from '../Article-Card';

const PostList = (props) => {
  const { blogPosts } = props;

  return (
    blogPosts.map(({ node: post }) => (
      <ArticleCard post={post} />
    ))
  );
};

PostList.propTypes = propTypes;

export default PostList;
