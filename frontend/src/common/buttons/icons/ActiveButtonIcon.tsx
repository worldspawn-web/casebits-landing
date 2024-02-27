import { Favorite } from '../../../assets/icons/Favorite';
import styles from './ActiveButtonIcons.module.scss';

export const ActiveButtonIcon = () => (
  <a className={styles.btn__icon__active}>
    <Favorite />
  </a>
);
