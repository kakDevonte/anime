import React from 'react';
import { AnimeItem } from '../../components/AnimeItem';
import styles from './AnimesPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getAnimes } from '../../redux/animes/asyncActions';
import { useOnScreen } from '../../hooks/useOnScreen';

export const AnimesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, pagination, status } = useAppSelector((state) => state.anime);
  const [page, setPage] = React.useState(1);
  const loader = React.useRef(null);
  const isOnScreen = useOnScreen(loader);

  React.useEffect(() => {
    if (isOnScreen && pagination?.has_next_page && data.length) {
      setPage((prev) => prev + 1);
    }
  }, [isOnScreen]);

  React.useEffect(() => {
    dispatch(getAnimes(page));
  }, [page]);

  return (
    <>
      <div>
        <h1>AnimesPage</h1>
        <div className={styles.list}>
          {data.map((item) => (
            <AnimeItem key={item.url} {...item} />
          ))}
        </div>
        {status === 'loading' && <div>Загрузка...</div>}
        <div ref={loader}></div>
      </div>
    </>
  );
};
