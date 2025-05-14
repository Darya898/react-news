import styles from './styles.module.css';
import NewsByFilters from "./NewsByFilters/NewsByFilters.tsx";
import LatestNews from "./LatestNews/LatestNews.tsx";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};
export default MainPage;
