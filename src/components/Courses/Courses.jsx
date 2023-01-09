import styles from '../Courses/Courses.module.css';
import poster from '../../img/fotoapparat.jpg';

const Courses = () => {
  return (
    <ul className={styles.courseList}>
      <li className={styles.courseItem}>
        <img src={poster} alt="poster" />
        <h3>Визуал</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
          impedit?
        </p>
      </li>
      <li className={styles.courseItem}>
        <img src={poster} alt="poster" />
        <h3>Фотосессия</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
          impedit?
        </p>
      </li>
      <li className={styles.courseItem}>
        <img src={poster} alt="poster" />
        <h3>Консультации</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
          impedit?
        </p>
      </li>
    </ul>
  );
};

export default Courses;
