import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import PhotoAttribution from '../Photo-Attribution';

const ImageWithAttribution = (props) => {
  const {
    imageLink, caption, imgSourceName, imgSourceSite,
  } = props;

  return (
    <div className="blog-post__image--attribution">
      <img src={withPrefix(imageLink)} alt={caption} />
      <PhotoAttribution
        imgSourceName={imgSourceName}
        imgSourceSite={imgSourceSite}
      />
    </div>
  );
};

ImageWithAttribution.propTypes = {
  imageLink: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  imgSourceName: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  imgSourceSite: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
};

ImageWithAttribution.defaultProps = {
  imgSourceSite: null,
};

export default ImageWithAttribution;
