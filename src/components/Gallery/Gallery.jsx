import style from './Gallery.module.css';
import photo from '../../img/photo.jpg';

const Gallery = () => {
  return (
    <div className={style.galleryContainer}>
      <ul className={style.galleryList}>
        <li className={style.galleryItem}>
          <img
            className={style.galleryImg}
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <p className={style.galleryText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, natus.
          </p>
        </li>
        <li className={style.galleryItem}>
          <img
            className={style.galleryImg}
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <p className={style.galleryText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, natus.
          </p>
        </li>
        <li className={style.galleryItem}>
          <img
            className={style.galleryImg}
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <p className={style.galleryText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, natus.
          </p>
        </li>
        <li className={style.galleryItem}>
          <img
            className={style.galleryImg}
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <p className={style.galleryText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, natus.
          </p>
        </li>
        <li className={style.galleryItem}>
          <img
            className={style.galleryImg}
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <p className={style.galleryText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, natus.
          </p>
        </li>
        <li className={style.galleryItem}>
          <img
            className={style.galleryImg}
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <p className={style.galleryText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, natus.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
