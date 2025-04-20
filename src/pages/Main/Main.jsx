import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NewsBanner from '../../components/NewsBanner/NewsBanner.jsx';
import { getNews } from '../../api/apiNews.js';
import NewsList from '../../components/NewsList/NewsList.jsx';

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (err) {}
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length ? <NewsBanner item={news[0]}></NewsBanner> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
