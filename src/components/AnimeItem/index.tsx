import React from 'react';
import styles from './AnimeItem.module.scss';
import { AnimeType } from '../../redux/animes/types';

export const AnimeItem: React.FC<AnimeType> = (props) => {
  const infoString = `${props.type},${props.aired.prop.from.year}
    | ${props.status.split(' ')[0]}
    | ${props.episodes} ${props.episodes > 1 ? 'eps' : 'ep'} ${props.duration}`;

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <p className={styles.title}>{props.title}</p>
      </div>
      <div className={styles.info}>
        <span>{infoString}</span>
      </div>
      <div className={styles.genre}>
        <ul className={styles.valueList}>
          {props.genres.map((item) => (
            <li key={item.mal_id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.synopsis}>
        <div className={styles.image}>
          <img src={props.images.webp.image_url} />
        </div>
        <div>
          <div className={styles.item}>
            <div className={styles.text}>{props.synopsis}</div>
          </div>
          {props.themes.length > 0 && (
            <div className={styles.item}>
              <p>Theme: </p>
              <ul className={styles.valueList}>
                {props.themes.map((item) => (
                  <li key={item.mal_id}>{item.name}</li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.item}>
            <p>Studio: </p>
            <span className={styles.studio}>{props.studios[0].name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
