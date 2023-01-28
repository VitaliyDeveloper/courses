import photo from '../../img/photo.jpg';

//STYLES/////////////////////////////
import {
  GalleryContainer,
  GalleryList,
  GalleryItem,
  GalleryText,
} from './Gallery.styled';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryList>
        <GalleryItem>
          <img
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <GalleryText>
            Lorem ipsum, dolor sit amet consectetur adipisicing eGalleryItemt.
            Doloremque, natus.
          </GalleryText>
        </GalleryItem>
        <GalleryItem>
          <img
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <GalleryText>
            Lorem ipsum, dolor sit amet consectetur adipisicing eGalleryItemt.
            Doloremque, natus.
          </GalleryText>
        </GalleryItem>
        <GalleryItem>
          <img
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <GalleryText>
            Lorem ipsum, dolor sit amet consectetur adipisicing eGalleryItemt.
            Doloremque, natus.
          </GalleryText>
        </GalleryItem>
        <GalleryItem>
          <img
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <GalleryText>
            Lorem ipsum, dolor sit amet consectetur adipisicing eGalleryItemt.
            Doloremque, natus.
          </GalleryText>
        </GalleryItem>
        <GalleryItem>
          <img
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <GalleryText>
            Lorem ipsum, dolor sit amet consectetur adipisicing eGalleryItemt.
            Doloremque, natus.
          </GalleryText>
        </GalleryItem>
        <GalleryItem>
          <img
            src={photo}
            alt=""
            style={{
              width: 150,
            }}
          />
          <GalleryText>
            Lorem ipsum, dolor sit amet consectetur adipisicing eGalleryItemt.
            Doloremque, natus.
          </GalleryText>
        </GalleryItem>
      </GalleryList>
    </GalleryContainer>
  );
};

export default Gallery;
