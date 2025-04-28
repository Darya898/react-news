import styles from './styles.module.css';
import {IPaginationProps} from "@/interfaces";



const Pagination = ({
  currentPage,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  totalPages,
}:IPaginationProps) => {
  return (
    <div className={styles.pagination}>
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

export default Pagination;
