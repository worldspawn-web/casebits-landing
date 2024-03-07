import { Button, AchievementCard } from '..';
import styles from './Achievements.module.scss';

export const Achievements = () => {
  return (
    <section className={styles.achievements__wrapper}>
      <div className={styles.achievements__heading}>
        <h2>
          complete tasks, open cases and save bits to open cases from the "free
          cases for bits" line!
        </h2>
        <p>
          The conditions are very simple: the more you complete tasks or open
          cases, the more free cases will be available!
        </p>
        <Button className={styles.achievements__button}>
          See cases for beats
        </Button>
      </div>
      <div className={styles.achievements__examples}>
        <div className={styles.achievements__column}>
          {AchievementCard('Open first case', '25')}
          {AchievementCard('Knock out an item more expensive than $2', '125')}
        </div>
        <div className={styles.achievements__column}>
          {AchievementCard(
            'Knock out an item more expensive than $1 in the first 10 cases',
            '50'
          )}
          {AchievementCard('Open 10 cases', '150')}
        </div>
        <div className={styles.achievements__column}>
          {AchievementCard('Spin the bonus wheel: 5 times', '100')}
          {AchievementCard('Open 50 cases', '175')}
        </div>
      </div>
    </section>
  );
};
