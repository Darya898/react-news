import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NewsBanner from '../../components/NewsBanner/NewsBanner.jsx';
import { getNews } from '../../api/apiNews.js';
import NewsList from '../../components/NewsList/NewsList.jsx';
import Skeleton from '../../components/Skeleton/Skeleton.jsx';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (err) {}
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]}></NewsBanner>
      ) : (
        <Skeleton count={1} type={'banner'} />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={'item'} count={10} />
      )}
    </main>
  );
};

export default Main;
