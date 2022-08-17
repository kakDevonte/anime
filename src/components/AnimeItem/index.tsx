import React from 'react';
import styles from './AnimeItem.module.scss';
import { AnimeType } from '../../redux/animes/types';

export const AnimeItem: React.FC<AnimeType> = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={props.images.webp.image_url} />
      </div>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.info}>
        <span>{props.type}</span>
        <span>{props.aired.prop.from.year}</span>
      </div>
    </div>
  );
};
