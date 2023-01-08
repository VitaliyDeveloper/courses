import { NavLink } from 'react-router-dom';
import logotype from '../../img/NG.png';
import insta from '../../img/instagram.png';
import whatsapp from '../../img/whatsapp.png';
import telegram from '../../img/telegram.png';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <img
        className={styles.logolinkLink}
        src={logotype}
        width="80"
        height="80"
        alt="logo"
      />
      <ul className={styles.listLink}>
        <li className={styles.itemLink}>
          <NavLink className={styles.link} to="/" end>
            Главная
          </NavLink>
        </li>
        <li className={styles.itemLink}>
          <NavLink className={styles.link} to="/servises">
            Мои слуги
          </NavLink>
        </li>
      </ul>
      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <a className={styles.linkSocial} href="#">
            <img
              className={styles.socialIcon}
              src={insta}
              alt="instagram"
              width="40"
              height="40"
            />
            <p className={styles.follow}>@instagram.acc</p>
          </a>
        </li>
        <li className={styles.socialItem}>
          <a className={styles.linkSocial} href="#">
            <img
              className={styles.socialIcon}
              src={whatsapp}
              alt="whatsapp"
              width="40"
              height="40"
            />
            <p className={styles.follow}>+7 777 777 77 77</p>
          </a>
        </li>
        <li className={styles.socialItem}>
          <a className={styles.linkSocial} href="#">
            <img
              className={styles.socialIcon}
              src={telegram}
              alt="telegram"
              width="40"
              height="40"
            />
            <p className={styles.follow}>+7 777 777 77 77</p>
          </a>
        </li>
      </ul>
      <button className={styles.btnLogin}>Login</button>
    </nav>
  );
};

export default Navigation;
