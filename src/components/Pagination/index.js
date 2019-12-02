import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const { pageContext, pageSlug } = props;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <div className="pagination">
      {!isFirst && (
      <Link className="pagination-link previous" to={`${pageSlug}/${prevPage}`} rel="prev">
        Previous Page
      </Link>
      )}
      {!isLast && (
      <Link className="pagination-link next" to={`${pageSlug}/${nextPage}`} rel="next">
        Next Page
      </Link>
      )}
    </div>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }).isRequired,
  pageSlug: PropTypes.string.isRequired,
};

export default Pagination;
