import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import styles from '../Layout/Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main style={{ minHeight: '100vh' }}>
        <>
          <div className={styles.leaves}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <Outlet />
        </>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
