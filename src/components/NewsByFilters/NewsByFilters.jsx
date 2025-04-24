import React from 'react';
import Categories from '../Categories/Categories.jsx';
import Search from '../Search/Search.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { TOTAL_PAGES } from '../../constants/constants.js';
import NewsList from '../NewsList/NewsList.jsx';
import styles from './styles.module.css';
import NewsFilters from '../NewsFilters/NewsFilters.jsx';
  const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };
  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    changeFilter('page_number', pageNumber - 1);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
      />

      <NewsList news={news} isLoading={isLoading} />

      <Pagination
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
      />
    </section>
  );
};

export default NewsByFilters;
