import styled from 'styled-components';
import photo from '../../img/photo.jpg';

export const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 500px;
  gap: auto;
  justify-items: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PhotoContainer = styled.div`
  background: url(${photo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 500px;
  margin: 50px;
`;

export const AboutMeTitle = styled.h2`
  color: var(--accent-color);
  margin-bottom: 20px;
  text-decoration: underline;
`;

export const AboutMeText = styled.article`
  width: 500px;
`;
