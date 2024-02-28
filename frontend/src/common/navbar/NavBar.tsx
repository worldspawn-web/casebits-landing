import { Button } from '..';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <img
        className={styles.navbar__logo}
        src="../src/assets/logo/casebits.png"
      />
      <section className={styles.navbar__links}>
        <a>cases</a>
        <a>cards</a>
        <a>wheel of luck</a>
      </section>
      <section className={styles.navbar__profile}>
        <span className={styles.navbar__username}>Doggo</span>
        <img
          className={styles.navbar__avatar}
          src="../src/assets/avatars/avatar_dog.png"
        />
        <span className={styles.navbar__value}>$5,56</span>
        <Button>deposit</Button>
      </section>
    </nav>
  );
};
