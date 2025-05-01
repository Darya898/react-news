import styles from './styles.module.css';
import Categories from '../Categories/Categories.tsx';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import { IFilters } from '@/interfaces';
import { useGetCategoriesQuery } from '../../store/services/newsApi.ts';
import { setFilters } from '../../slices/NewsSlice.ts';
import { useAppDispatch } from '../../store';

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords: string | null) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
