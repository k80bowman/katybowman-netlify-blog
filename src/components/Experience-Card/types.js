import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  orgLink: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
};
