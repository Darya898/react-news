import { TOTAL_PAGES } from '../../../../shared/constants/constants.ts';
import NewsList from '../../../../widgets/news/ui/NewsList/NewsList.tsx';
import styles from './styles.module.css';
import NewsFilters from '../NewsFilters/NewsFilters.tsx';
import { useDebounce } from '../../../../shared/hooks/useDebounce.ts';
import PaginationWrapper from '../../../../features/pagination/ui/Pagination.tsx';
import { useGetNewsQuery } from '../../../../entities/news/api/newsApi.ts';
import { useAppDispatch, useAppSelector } from '../../../../app/appStore.ts';
import { setFilters } from '../../../../entities/news/model/NewsSlice.ts';

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      );
    }
  };
  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      );
    }
  };
  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
      >
        <NewsList news={news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
