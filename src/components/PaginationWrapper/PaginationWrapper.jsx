import React from 'react';
import Pagination from '../Pagination/Pagination.jsx';

const PaginationWrapper = ({ top, bottom, children, ...paginationProps }) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {top && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
