import styles from './styles.module.css';
import { useTheme } from '../../../../app/providers/ThemeProvider.tsx';
import { IPaginationProps } from '../../model/types.ts';

const PaginationButton = ({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  totalPages,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        className={styles.arrow}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index)}
              className={styles.pageNumber}
              key={index}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
        className={styles.arrow}
      >
        {'>'}
      </button>
    </div>
  );
};

export default PaginationButton;
