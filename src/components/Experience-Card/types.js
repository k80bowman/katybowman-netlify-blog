import PropTypes from 'prop-types';

const propTypes = {
  position: PropTypes.shape({
    title: PropTypes.string,
    org: PropTypes.string,
    orgLink: PropTypes.string,
    dates: PropTypes.string,
    skills: PropTypes.array,
    summary: PropTypes.node,
  }).isRequired,
};

export default propTypes;
