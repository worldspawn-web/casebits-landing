import {
  ActiveButtonIcon,
  ButtonIcon,
  LikeButtonIcon,
  RenderLiveDrop,
} from '..';
import styles from './LiveDrop.module.scss';

export const LiveDrop = () => {
  return (
    <section className={styles.livedrop__wrapper}>
      <div className={styles.livedrop__buttons}>
        <ActiveButtonIcon />
        <ButtonIcon />
        <LikeButtonIcon />
      </div>
      <div className={styles.livedrop}>
        <RenderLiveDrop />
      </div>
    </section>
  );
};
