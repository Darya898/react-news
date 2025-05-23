import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.css';
import { CategoryType } from '../../../../entities/category';

interface Props {
  categories: CategoryType[];
  setSelectedCategory: (category: CategoryType | null) => void;
  selectedCategory: CategoryType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={styles.categories} ref={ref}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          ALL
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);
Categories.displayName = 'Categories';

export default Categories;
