import PaginationButton from './PaginationButton/PaginationButton.tsx';
import React from 'react';
import { IPaginationProps } from '../model/types.ts';

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButton {...paginationProps} />}
      {children}
      {top && <PaginationButton {...paginationProps} />}
    </>
  );
};

export default Pagination;
