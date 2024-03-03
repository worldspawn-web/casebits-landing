import classNames from 'classnames';

import styles from './ServiceStats.module.scss';

export const ServiceStats = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__section}>
        <p className={classNames(styles.stats__numbers, styles.stats__profit)}>
          20%
        </p>
        <p className={styles.stats__description}>bonus on first deposit</p>
      </div>
      <div className={styles.stats__section}>
        <p className={styles.stats__numbers}>86.7 k</p>
        <p className={styles.stats__description}>
          cases opened in the last month
        </p>
      </div>
      <div className={styles.stats__section}>
        <p className={styles.stats__numbers}>13.5 k</p>
        <p className={styles.stats__description}>new users in the last month</p>
      </div>
      <div className={styles.stats__section}>
        <p className={styles.stats__numbers}>934</p>
        <p className={styles.stats__description}>users online on the site</p>
      </div>
    </section>
  );
};
