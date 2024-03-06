import { Button } from '..';
import styles from './FreeCasePromo.module.scss';

export const FreeCasePromo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promo__description}>
        <p className={styles.promo__description__header}>free case</p>
        <p className={styles.promo__description__text}>
          Register on our server and receive a free case upon the first
          replenishment of the balance
        </p>
      </div>
      <img
        className={styles.promo__image}
        src="./src/assets/3d/case-free.png"
      />
      <Button>get a free case</Button>
    </section>
  );
};
