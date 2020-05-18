import React from 'react';
import { withPrefix } from 'gatsby';
import propTypes from './types';

const PostBookImage = (props) => {
  const { imageLink, bookLink, title } = props;

  return (
    <a href={bookLink}>
      <div className="blog-post__image-wrapper">
        <img className="blog-post__image" src={withPrefix(imageLink)} alt={title} />
      </div>
    </a>
  );
};

PostBookImage.propTypes = propTypes;

export default PostBookImage;
