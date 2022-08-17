import React from 'react';
import styles from './AnimeItem.module.scss';

export const AnimeItem: React.FC = () => {
  return (
    <div className={styles.root}>
      <div>
        <img src={'https://cdn.myanimelist.net/images/anime/4/19644.jpg'} />
      </div>
      <p className={styles.title}>Cowboy Bebop</p>
      <div className={styles.info}>
        <span>TV</span>
        <span>1998</span>
      </div>
    </div>
  );
};
