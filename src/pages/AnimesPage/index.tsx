import React from 'react';
import { AnimeItem } from '../../components/AnimeItem';
import styles from './AnimesPage.module.scss';

export const AnimesPage: React.FC = () => {
  return (
    <>
      <h1>AnimesPage</h1>
      <div className={styles.list}>
        {[...Array(25)].map((item, index) => (
          <AnimeItem key={index} />
        ))}
      </div>
    </>
  );
};
