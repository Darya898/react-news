import styles from './styles.module.css';
import BannersList from '../BannersList/BannersList';
import { useGetLatesNewsQuery } from '../../store/services/newsApi.ts';

const LatestNews = () => {
  const { data, isLoading } = useGetLatesNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
