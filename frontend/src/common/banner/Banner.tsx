import { LoginButton } from '..';
import { Steam } from '../../assets/icons/Steam';
import styles from './Banner.module.scss';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <img
        className={styles.banner__image}
        src="../src/assets/3d/case-main-1.png"
      />
      <div>
        <span className={styles.banner__subheader}>
          20% bonus on first deposit
        </span>
        <h1 className={styles.banner__header}>
          CS:GO cases that you want to open
        </h1>
        <p className={styles.banner__description}>
          with the highest probability of dropping
        </p>
        <p className={styles.banner__description}>fatty items</p>
        <LoginButton>
          <Steam />
          login on steam
        </LoginButton>
      </div>
    </section>
  );
};
