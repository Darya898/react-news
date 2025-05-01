import Pagination from '../Pagination/Pagination.tsx';
import React from 'react';
import { IPaginationProps } from '@/interfaces';

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {top && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
