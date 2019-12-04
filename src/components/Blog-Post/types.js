import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  publication: PropTypes.string,
  pubLink: PropTypes.string,
  imageLink: PropTypes.string,
};

export const defaultPropTypes = {
  excerpt: 'none',
  publication: 'none',
  pubLink: 'none',
  imageLink: 'none',
};
