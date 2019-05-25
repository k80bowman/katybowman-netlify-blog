import PropTypes from 'prop-types';

const propTypes = {
  posts: PropTypes.array.isRequired,
  techRoles: PropTypes.array.isRequired,
  communityRoles: PropTypes.array,
};

export default propTypes;