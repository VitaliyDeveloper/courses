import styled from 'styled-components';

export const CoursesItem = styled.li`
  margin: 20px;
  width: 300px;
  height: 400px;
  border: 3px solid var(--second-color);
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  transition: 300ms ease;

  &:hover {
    border-color: var(--accent-color);
    scale: 1.05;
  }

  &:hover .hoverColor {
    color: var(--accent-color);
  }
`;

export const TitleLi = styled.h3`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: var(--second-color);
  transition: 300ms ease;
`;

export const Price = styled.p`
  color: var(--second-color);
  text-align: center;
  text-align: right;
  font-size: 50px;
  font-weight: bold;
  transition: 300ms ease;
`;

export const Descp = styled.p`
  text-align: start;
  color: #6e6e6e;
`;
