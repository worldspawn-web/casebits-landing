import { Like } from '../../../assets/icons/Like';
import styles from './ActiveButtonIcons.module.scss';

export const LikeButtonIcon = () => (
  <a className={styles.btn__icon}>
    <Like />
  </a>
);
