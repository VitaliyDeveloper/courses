import styles from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <address className={styles.adress}>Almaty, Kazakhstan</address>
      <p className={styles.copy}>&copy; copyright 2023</p>
    </footer>
  );
};

export default Footer;
