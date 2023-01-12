// import notFound from '../../img/404-not-found.jpg';
import style from '../NotFound/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={style.notFoundContainer}>
      {/* <img src={notFound} alt="404-not-found" /> */}
      <p>ERROR 404</p>
      <p>not found</p>
    </div>
  );
};

export default NotFound;
