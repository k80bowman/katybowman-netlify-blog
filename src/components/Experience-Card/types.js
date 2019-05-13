import PropTypes from 'prop-types';

export const propTypes = {
  position: PropTypes.shape({
    templateKey: PropTypes.string,
    order: PropTypes.number,
    title: PropTypes.string,
    org: PropTypes.string,
    orgLink: PropTypes.string,
    dates: PropTypes.string,
    skills: PropTypes.array,
    summary: PropTypes.node,
  }),
};
