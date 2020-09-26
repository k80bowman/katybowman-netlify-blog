import React from 'react';
import PropTypes from 'prop-types';

const PhotoAttribution = (props) => {
  const {
    imgSourceName,
    imgSourceSite,
  } = props;

  const displaySourceSite = Object.keys(imgSourceSite).length > 0;

  return (
    <div className="attribution">
      <span className="attribution--name">
        Photo by
        {' '}
        <a href={imgSourceName.link}>{imgSourceName.name}</a>
        {' '}
      </span>
      {displaySourceSite ? (
        <span className="attribution--source">
          on
          {' '}
          <a href={imgSourceSite.link}>{imgSourceSite.name}</a>
        </span>
      ) : false}
    </div>
  );
};

PhotoAttribution.propTypes = {
  imgSourceName: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  imgSourceSite: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
};

PhotoAttribution.defaultProps = {
  imgSourceSite: {},
};

export default PhotoAttribution;
