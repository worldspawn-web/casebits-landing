import livedropData from './../../data/fake-livedrop.json';
import { jsonParser } from '..';

import styles from './RenderLiveDrop.module.scss';

export const RenderLiveDrop = () => {
  const data = jsonParser(livedropData);
  const { drop } = data;
  return drop.map((win: { name: string; img: string; color: string }) => {
    return (
      <div className={styles.drop}>
        <span className={styles.drop__name}>{win.name}</span>
        <img className={styles.drop__image} src={win.img} />
        <span className={styles.drop__color} />
      </div>
    );
  });
};
